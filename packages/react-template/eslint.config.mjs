import { defineConfig } from '@pplancq/eslint-config';

export default defineConfig({
  enableReact: true,
  enablePrettier: 'on',
  enableVitest: true,
  unitTestFiles: ['src/**/*.{test,spec,steps}.{js,jsx,ts,tsx}'],
  enablePlaywright: true,
  unitE2eFiles: ['tests/**/*.{test,spec}.{js,jsx,ts,tsx}'],
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
