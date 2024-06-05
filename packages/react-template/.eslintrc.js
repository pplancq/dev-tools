module.exports = {
  extends: ['@pplancq/eslint-config/react', '@pplancq/eslint-config/vitest', '@pplancq/eslint-config/prettier'],
  overrides: [
    {
      files: ['mocks/**/*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
