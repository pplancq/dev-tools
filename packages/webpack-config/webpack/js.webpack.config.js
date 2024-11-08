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
  const isEnvProductionProfile = isEnvProduction && process.argv.includes('--profile');
  const disableEsLintPlugin = (process.env.DISABLE_ESLINT_PLUGIN ?? 'false') === 'true' || !resolveModule('eslint');

  return {
    target: ['browserslist'],
    optimization: {
      minimize: isEnvProduction,
      chunkIds: 'named',
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            keep_classnames: isEnvProductionProfile,
            keep_fnames: isEnvProductionProfile,
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
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
          loader: require.resolve('babel-loader'),
          exclude: /node_modules/,
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            compact: isEnvProduction,
            plugins: [isEnvDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
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
