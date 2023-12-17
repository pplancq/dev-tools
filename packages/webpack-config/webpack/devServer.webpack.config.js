module.exports = {
  devServer: {
    port: parseInt(process.env.PORT ?? '3000', 10),
    open: (process.env.BROWSER ?? 'false') === 'true',
    hot: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
  },
};
