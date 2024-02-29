module.exports = {
  extends: ['./index.js', './rules/prettier.js'].map(require.resolve),
};
