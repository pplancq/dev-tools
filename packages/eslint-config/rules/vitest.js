module.exports = {
  overrides: [
    {
      files: ['*.{test,spec}.{js,jsx,ts,tsx}'],
      plugins: ['vitest', 'vitest-globals'],
      env: {
        'vitest-globals/env': true,
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',

        // eslint-plugin-vitest https://github.com/veritem/eslint-plugin-vitest
        'vitest/no-conditional-expect': 'error',
        'vitest/no-identical-title': 'error',
        'vitest/no-interpolation-in-snapshots': 'error',
        'vitest/no-mocks-import': 'error',
        'vitest/valid-describe-callback': 'error',
        'vitest/valid-expect': 'error',
        'vitest/valid-title': 'warn',
        'vitest/prefer-called-with': 'error',
        'vitest/prefer-strict-equal': 'error',
        'vitest/prefer-to-contain': 'error',
        'vitest/prefer-to-have-length': 'error',
        'vitest/prefer-to-be-truthy': 'error',
        'vitest/prefer-to-be-falsy': 'error',
        'vitest/prefer-to-be-object': 'error',
      },
    },
  ],
};
