#!/usr/bin/env node
import { writeFileSync } from 'node:fs';

console.info('Add commitlint config in commitlint.config.mjs');

writeFileSync(
  'commitlint.config.mjs',
  `export default {
  extends: ['@pplancq/commitlint-config'],
};
`,
  {
    encoding: 'utf-8',
  },
);
