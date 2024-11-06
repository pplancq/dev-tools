const baseConfig = require('./rules/base');
const typescriptConfig = require('./rules/typescript');
const reactJsxA11yConfig = require('./rules/react-jsx-a11y');
const reactConfig = require('./rules/react');

module.exports = [...baseConfig, ...reactJsxA11yConfig, ...typescriptConfig, ...reactConfig];
