module.exports = {
  extends: ['./rules/baseCss.js', './rules/baseScss.js', './rules/order.js'].map(require.resolve),
};
