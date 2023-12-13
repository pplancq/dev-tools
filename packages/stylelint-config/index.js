module.exports = {
  extends: ['./rules/baseCss.js', './rules/prettier.js', './rules/order.js'].map(require.resolve),
};
