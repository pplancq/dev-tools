import { defineConfig } from '@pplancq/eslint-config';

export default defineConfig({
  enablePrettier: 'on',
  extendConfig: [
    {
      ignores: ['dist/', 'node_modules/'],
    },
    {
      files: ['**/*.config.{js,cjs,mjs,ts,cts,mts}', 'src/cli.ts'],
      rules: {
        'import/no-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
});
