module.exports = {
  extends: ['./rules/base.js', './rules/typescript.js', './rules/prettier.js'].map(require.resolve),
};
