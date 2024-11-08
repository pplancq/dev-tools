#!/usr/bin/env node
const { writeFileSync } = require('fs');

console.info('Add eslint config in eslint.config.mjs');

writeFileSync(
  'eslint.config.mjs',
  "import { defineConfig } from '@pplancq/eslint-config';\n" +
    '\n' +
    'export default defineConfig({\n' +
    '  enableReact: true,\n' +
    '  enableVitest: true,\n' +
    '});\n',
  {
    encoding: 'utf-8',
  },
);
