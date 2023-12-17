module.exports = {
  overrides: [
    {
      files: ['*.{test,spec}.{js,jsx,ts,tsx}'],
      plugins: ['jest', 'jest-extended'],
      env: {
        'jest/globals': true,
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',

        // eslint-plugin-jest https://github.com/jest-community/eslint-plugin-jest
        'jest/no-conditional-expect': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-interpolation-in-snapshots': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-mocks-import': 'error',
        'jest/valid-describe-callback': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-title': 'error',
        'jest/prefer-called-with': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-strict-equal': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error',

        // eslint-plugin-jest-extended https://github.com/jest-community/eslint-plugin-jest-extended
        'jest-extended/prefer-to-be-array': 'error',
        'jest-extended/prefer-to-be-false': 'error',
        'jest-extended/prefer-to-be-object': 'error',
        'jest-extended/prefer-to-be-true': 'error',
        'jest-extended/prefer-to-have-been-called-once': 'error',
      },
    },
  ],
};
