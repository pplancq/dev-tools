import { defineConfig } from '@pplancq/eslint-config';

export default defineConfig({
  enablePrettier: 'on',
  enableVitest: true,
  extendConfig: [
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
    {
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
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
