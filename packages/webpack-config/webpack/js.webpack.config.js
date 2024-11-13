const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const paths = require('../helper/paths');
const resolveModule = require('../helper/resolveModule');

module.exports = (env, { mode = 'development' }) => {
  const isEnvProduction = mode === 'production';
  const isEnvDevelopment = !isEnvProduction;
  const disableEsLintPlugin = (process.env.DISABLE_ESLINT_PLUGIN ?? 'false') === 'true' || !resolveModule('eslint');

  return {
    target: ['browserslist'],
    optimization: {
      minimize: isEnvProduction,
      chunkIds: 'named',
      minimizer: [
        new TerserPlugin({
          minify: TerserPlugin.swcMinify,
        }),
      ],
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
        },
      },
    },
    output: {
      filename: isEnvProduction ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      chunkFilename: isEnvProduction ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      plugins: [new TsconfigPathsPlugin()],
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          include: paths.src,
          loader: require.resolve('swc-loader'),
          exclude: /node_modules/,
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                jsx: true,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                  development: isEnvDevelopment,
                  refresh: isEnvDevelopment,
                },
              },
            },
          },
        },
      ],
    },
    plugins: [
      !disableEsLintPlugin &&
        new ESLintPlugin({
          extensions: ['js', 'jsx', 'ts', 'tsx'],
          configType: process.env.ESLINT_CONFIG_TYPE ?? 'eslintrc',
          eslintPath: require.resolve('eslint'),
          failOnError: isEnvProduction,
          context: paths.src,
        }),
      new ForkTsCheckerWebpackPlugin({
        async: isEnvDevelopment,
        issue: {
          include: [{ file: '**/src/**/*.{ts,tsx}' }],
          exclude: [
            { file: '**/src/**/__tests__/**' },
            { file: '**/src/**/?(*.){spec|test|steps}.*' },
            { file: '**/src/utils/tests/**' },
          ],
        },
      }),
      isEnvDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
  };
};
