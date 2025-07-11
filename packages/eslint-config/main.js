const { baseRules } = require('./rules/base');
const { importRules } = require('./rules/import');
const { reactJsxA11yRules } = require('./rules/react-jsx-a11y');
const { reactRules, reactTypescriptRules, reactTestRules } = require('./rules/react');
const { typescriptRules } = require('./rules/typescript');
const { prettierRules } = require('./rules/prettier');
const { vitestRules } = require('./rules/vitest');
const { playwrightRules } = require('./rules/playwright');

/**
 * define eslint flat config.
 *
 * @param {Object} options
 * @param {string[]} [options.tsFiles=['**\/*.ts?(x)']]
 * @param {string[]} [options.unitTestFiles=['**\/*.{test,spec,steps}.{js,jsx,ts,tsx}']]
 * @param {string[]} [options.unitE2eFiles=['tests/**\/*.{test,spec}.{js,jsx,ts,tsx}']]
 * @param {boolean} [options.enableReact=false]
 * @param {boolean} [options.enableVitest=false]
 * @param {boolean} [options.enablePlaywright=false]
 * @param {'off' | 'on' | 'disableStyleOnly'} [options.enablePrettier='on']
 * @param {Array<import('eslint').Linter.Config>} [options.extendConfig=[]]
 *
 * @returns {import('eslint').Linter.Config}
 */
const defineConfig = ({
  tsFiles = ['**/*.ts?(x)'],
  unitTestFiles = ['**/*.{test,spec,steps}.{js,jsx,ts,tsx}'],
  unitE2eFiles = ['tests/**/*.{test,spec}.{js,jsx,ts,tsx}'],
  enableReact = false,
  enableVitest = false,
  enablePlaywright = false,
  enablePrettier = 'off',
  extendConfig = [],
} = {}) => {
  typescriptRules.files = tsFiles;
  reactTypescriptRules.files = tsFiles;
  reactTestRules.files = unitTestFiles;
  vitestRules.files = unitTestFiles;
  playwrightRules.files = unitE2eFiles;

  if (enablePrettier === 'disableStyleOnly') {
    prettierRules.rules['prettier/prettier'] = 'off';
  }

  return [
    importRules,
    baseRules,
    enableReact && reactJsxA11yRules,
    typescriptRules,
    enableReact && reactRules,
    enableReact && reactTypescriptRules,
    enableReact && reactTestRules,
    enablePrettier !== 'off' && prettierRules,
    enableVitest && vitestRules,
    enablePlaywright && playwrightRules,
    {
      files: ['eslint.config.*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/no-default-export': 'off',
      },
    },
    ...extendConfig,
  ].filter(Boolean);
};

module.exports = {
  defineConfig,
};
