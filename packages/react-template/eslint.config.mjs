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
    {
      files: ['**/*.config.{js,cjs,mjs,ts,cts,mts}'],
      rules: {
        'import/no-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
});
