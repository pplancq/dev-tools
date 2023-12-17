const paths = require('../helper/paths');

module.exports = (env, { mode = 'development' }) => {
  const isEnvProduction = mode === 'production';

  return {
    module: {
      rules: [
        {
          test: /\.svg$/,
          include: paths.src,
          resourceQuery: /react/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.svg$/,
          include: paths.src,
          resourceQuery: { not: [/react/] },
          use: [
            {
              loader: 'file-loader',
              options: {
                name: isEnvProduction ? 'images/[name].[contenthash:8].[ext]' : 'images/[name].[ext]',
                limit: 100000,
                esModule: true,
              },
            },
          ],
        },
      ],
    },
  };
};
