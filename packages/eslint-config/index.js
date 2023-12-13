module.exports = {
  extends: ['./rules/base.js', './rules/typescript.js', './rules/prettier.js', './rules/react.js'].map(require.resolve),
};
