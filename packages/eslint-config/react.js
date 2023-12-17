module.exports = {
  extends: ['./rules/react.js', './rules/prettier.js'].map(require.resolve),
};
