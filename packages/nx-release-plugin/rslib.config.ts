import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      id: 'changelog-renderer',
      source: {
        entry: {
          'changelog-renderer': './src/changelog-renderer.ts',
        },
      },
      format: 'cjs',
      bundle: true,
      dts: false,
      output: {
        filename: {
          js: '[name].cjs',
        },
      },
    },
    {
      id: 'plugin',
      source: {
        entry: {
          index: './src/index.ts',
          'generators/setup/generator': './src/generators/setup/generator.ts',
          'migrations/update-2-0-0/update-2-0-0': './src/migrations/update-2-0-0/update-2-0-0.ts',
        },
        tsconfigPath: './tsconfig.build.json',
      },
      format: 'esm',
      bundle: true,
      dts: true,
      output: {
        filename: {
          js: '[name].js',
        },
      },
    },
  ],
  output: {
    target: 'node',
  },
});
