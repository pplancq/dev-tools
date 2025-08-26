import { defineConfig } from '@pplancq/eslint-config';

export default defineConfig({
  enablePrettier: 'on',
  enableVitest: true,
  extendConfig: [
    {
      files: ['**/*.config.{js,cjs,mjs,ts,cts,mts}'],
      rules: {
        'import/no-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      ignores: ['dist'],
    },
    {
      files: ['index.js'],
      rules: {
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
      },
    },
  ],
});
