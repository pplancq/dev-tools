import { defineConfig } from '@pplancq/eslint-config';

export default defineConfig({
  enableReact: true,
  enablePrettier: 'on',
  enableVitest: true,
  extendConfig: [
    {
      files: ['mocks/**/*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
});
