#!/usr/bin/env node
import { writeFileSync } from 'node:fs';

console.info('Add stylelint config in stylelint.config.mjs');

writeFileSync(
  'stylelint.config.mjs',
  `export default {
  extends: ['@pplancq/stylelint-config'],
};`,
  {
    encoding: 'utf-8',
  },
);
