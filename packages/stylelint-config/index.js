module.exports = {
  extends: ['./rules/baseCss.js', './rules/baseScss.js', './rules/prettier.js', './rules/order.js'].map(
    require.resolve,
  ),
};
