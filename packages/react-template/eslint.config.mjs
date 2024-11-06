/* eslint-disable import/no-extraneous-dependencies */
import prettierConfig from '@pplancq/eslint-config/prettier';
import reactConfig from '@pplancq/eslint-config/react';
import vitestConfig from '@pplancq/eslint-config/vitest';

// eslint-disable-next-line import/no-default-export
export default [
  ...reactConfig,
  ...vitestConfig,
  ...prettierConfig,
  {
    files: ['mocks/**/*'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
];
