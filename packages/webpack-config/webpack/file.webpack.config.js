module.exports = (env, { mode = 'development' }) => {
  const isEnvProduction = mode === 'production';

  return {
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|ico|bmp)$/,
          type: 'asset/resource',
          generator: {
            filename: isEnvProduction ? 'images/[name].[contenthash:8][ext]' : 'images/[name][ext]',
          },
        },
        {
          test: /\.(woff2?|ttf|eot)$/,
          type: 'asset/resource',
          generator: {
            filename: isEnvProduction ? 'fonts/[name].[contenthash:8][ext]' : 'fonts/[name][ext]',
          },
        },
      ],
    },
  };
};
