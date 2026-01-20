#!/usr/bin/env node
import { writeFileSync } from 'node:fs';

console.info('Add postcss config in postcss.config.mjs');

writeFileSync(
  'postcss.config.mjs',
  `import defaultConfig from '@pplancq/postcss-config';

export default {
  ...defaultConfig,
};
`,
  { encoding: 'utf-8' },
);
