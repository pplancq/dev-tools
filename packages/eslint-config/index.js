module.exports = {
  extends: ['./rules/base.js', './rules/typescript.js'].map(require.resolve),
};
