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

  const basseCssRules = [
    isEnvDevelopment && require.resolve('style-loader'),
    isEnvProduction && {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
        sourceMap: true,
        modules: {
          auto: /\.module\.\w+$/i,
          localIdentName: isEnvProduction ? 'css--[hash:base64:16]' : '[name]--[local]--[hash:base64:8]',
        },
      },
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        sourceMap: true,
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
          include: paths.src,
          use: basseCssRules,
          sideEffects: true,
        },
        {
          test: /\.(scss|sass)$/,
          include: paths.src,
          use: [
            ...basseCssRules,
            {
              loader: require.resolve('resolve-url-loader'),
              options: {
                sourceMap: true,
                root: paths.src,
              },
            },
            {
              loader: require.resolve('sass-loader'),
              options: {
                sourceMap: true,
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
