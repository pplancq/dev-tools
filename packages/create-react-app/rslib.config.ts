import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    entry: {
      main: './src/index.ts',
    },
  },
  lib: [
    {
      format: 'esm',
      bundle: true,
      dts: false,
    },
  ],
  output: {
    target: 'node',
    minify: true,
  },
});
