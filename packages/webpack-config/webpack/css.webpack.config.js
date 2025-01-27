const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const paths = require('../helper/paths');
const resolveModule = require('../helper/resolveModule');

module.exports = (env, { mode = 'development' }) => {
  const isEnvProduction = mode === 'production';
  const isEnvDevelopment = !isEnvProduction;
  const disableStyleLintPlugin =
    (process.env.DISABLE_STYLELINT_PLUGIN ?? 'false') === 'true' || !resolveModule('stylelint');
  const disableSourceMap = (process.env.DISABLE_SOURCE_MAP ?? 'false') === 'true';

  const basseCssRules = [
    isEnvDevelopment && require.resolve('style-loader'),
    isEnvProduction && {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
        sourceMap: !disableSourceMap,
        modules: {
          auto: /\.module\.\w+$/i,
          localIdentName: isEnvProduction ? 'css--[hash:base64:16]' : '[name]--[local]--[hash:base64:8]',
          namedExport: false,
        },
      },
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        sourceMap: !disableSourceMap,
      },
    },
  ].filter(Boolean);

  return {
    optimization: {
      minimize: isEnvProduction,
      minimizer: [new CssMinimizerPlugin()],
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: basseCssRules,
          sideEffects: true,
        },
        {
          test: /\.(scss|sass)$/,
          use: [
            ...basseCssRules,
            {
              loader: require.resolve('sass-loader'),
              options: {
                sourceMap: !disableSourceMap,
              },
            },
          ],
          sideEffects: true,
        },
      ],
    },
    plugins: [
      !disableStyleLintPlugin &&
        new StylelintPlugin({
          extensions: ['css', 'scss', 'sass'],
          stylelintPath: require.resolve('stylelint'),
          failOnError: isEnvProduction,
          context: paths.src,
        }),
      isEnvProduction &&
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
        }),
    ].filter(Boolean),
  };
};
