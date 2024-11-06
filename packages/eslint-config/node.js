const baseConfig = require('./rules/base');
const typescriptConfig = require('./rules/typescript');

module.exports = [...baseConfig, ...typescriptConfig];
