module.exports = (env, { mode = 'development' }) => {
  const isEnvProduction = mode === 'production';

  return {
    module: {
      rules: [
        {
          test: /\.svg$/,
          resourceQuery: /react/,
          use: [
            {
              loader: require.resolve('@svgr/webpack'),
            },
          ],
        },
        {
          test: /\.svg$/,
          resourceQuery: { not: [/react/] },
          use: [
            {
              loader: require.resolve('file-loader'),
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
