const { resolve, relative } = require('path');
const { existsSync } = require('fs');
const { DefinePlugin } = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { createHash } = require('crypto');
const paths = require('../helper/paths');
const generateMetaEnv = require('../helper/generateMetaEnv');

module.exports = (env, { mode = 'development' }) => {
  const isEnvProduction = mode === 'production';
  const isEnvDevelopment = !isEnvProduction;

  const metaEnv = generateMetaEnv(mode);

  return {
    extends: [
      resolve(__dirname, 'js.webpack.config.js'),
      resolve(__dirname, 'css.webpack.config.js'),
      resolve(__dirname, 'file.webpack.config.js'),
      resolve(__dirname, 'svg.webpack.config.js'),
      resolve(__dirname, 'devServer.webpack.config.js'),
    ],
    mode: isEnvProduction ? 'production' : 'development',
    devtool: isEnvProduction ? 'source-map' : 'cheap-module-source-map',
    entry: paths.entry,
    output: {
      path: paths.build,
      pathinfo: isEnvDevelopment,
      publicPath: '/',
      devtoolModuleFilenameTemplate: isEnvProduction
        ? ({ absoluteResourcePath }) => relative(paths.src, absoluteResourcePath).replace(/\\/g, '/')
        : ({ absoluteResourcePath }) => resolve(absoluteResourcePath).replace(/\\/g, '/'),
    },
    cache: {
      type: 'filesystem',
      version: createHash('md5').update(JSON.stringify(metaEnv)).digest('hex'),
      cacheDirectory: paths.cache,
      store: 'pack',
      buildDependencies: {
        defaultWebpack: ['webpack/lib/'],
        config: [__filename],
        tsconfig: [paths.tsconfig].filter(f => existsSync(f)),
      },
    },
    plugins: [
      new DefinePlugin(metaEnv),
      new CleanWebpackPlugin(),
      isEnvProduction &&
        new CopyPlugin({
          patterns: [
            {
              from: paths.public,
              filter: filepath => filepath !== paths.indexHtml.replace(/\\/g, '/'),
            },
          ],
        }),
      new HtmlWebPackPlugin({
        template: paths.indexHtml,
        minify: isEnvProduction
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            }
          : undefined,
      }),
      new CaseSensitivePathsPlugin(),
    ].filter(Boolean),
  };
};
