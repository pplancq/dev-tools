#!/usr/bin/env node
const { writeFileSync } = require('fs');

console.info('Add eslint config in .eslintrc.js');

writeFileSync(
  '.eslintrc.js',
  "module.exports = { extends: ['@pplancq/eslint-config/react', '@pplancq/eslint-config/vitest'] };\n",
  {
    encoding: 'utf-8',
  },
);
