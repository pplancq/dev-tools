module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      settings: {
        'import/resolver': {
          typescript: true,
          node: {
            extensions: ['.js', '.ts'],
          },
        },
      },
      rules: {
        // typescript-eslint/typescript-eslint https://github.com/typescript-eslint/typescript-eslint
        // Add TypeScript specific rules (and turn off ESLint equivalents)
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',

        '@typescript-eslint/consistent-type-assertions': 'warn',

        // eslint-plugin-import https://github.com/import-js/eslint-plugin-import
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            ts: 'never',
          },
        ],
      },
    },
  ],
};
