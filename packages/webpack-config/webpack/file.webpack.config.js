const paths = require('../helper/paths');

module.exports = (env, { mode = 'development' }) => {
  const isEnvProduction = mode === 'production';

  return {
    module: {
      rules: [
        {
          test: /\.(jpeg?|png|gif|ico|bmp)$/,
          include: paths.src,
          use: {
            loader: 'file-loader',
            options: {
              name: isEnvProduction ? 'images/[name].[contenthash:8].[ext]' : 'images/[name].[ext]',
              limit: 100000,
              esModule: true,
            },
          },
        },
        {
          test: /\.(woff2?|ttf|eot)$/,
          include: paths.src,
          use: {
            loader: 'file-loader',
            options: {
              name: isEnvProduction ? 'fonts/[name].[contenthash:8].[ext]' : 'fonts/[name].[ext]',
              esModule: false,
            },
          },
        },
      ],
    },
  };
};
