#!/usr/bin/env node
import { writeFileSync } from 'node:fs';

console.info('Add postcss config in prettier.config.mjs');

writeFileSync(
  'prettier.config.mjs',
  `import defaultConfig from '@pplancq/prettier-config';

export default {
  ...defaultConfig,
};
`,
  { encoding: 'utf-8' },
);
