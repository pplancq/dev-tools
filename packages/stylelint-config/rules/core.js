// eslint-disable-next-line import/no-default-export
export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "selector-class-pattern": [
      "^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$",
      {
        message: 'Expected class selector "%s" to follow BEM',
      },
    ],

    "scss/at-function-pattern": [
      "^([a-z][a-z0-9]*)([A-Z][a-z0-9]+)*$",
      {
        message: (name) => `Expected function name "${name}" to be camelCase`,
      },
    ],
    "scss/at-mixin-pattern": [
      "^([a-z][a-z0-9]*)([A-Z][a-z0-9]+)*$",
      {
        message: (name) => `Expected mixin name "${name}" to be camelCase`,
      },
    ],
    "scss/dollar-variable-pattern": [
      "^([a-z][a-z0-9]*)([A-Z][a-z0-9]+)*$",
      {
        message: (name) => `Expected variable name "${name}" to be camelCase`,
      },
    ],
    "scss/percent-placeholder-pattern": [
      "^([a-z][a-z0-9]*)([A-Z][a-z0-9]+)*$",
      {
        message: (name) => `Expected placeholder name "${name}" to be camelCase`,
      },
    ],
  },
};
