#!/usr/bin/env node
const { writeFileSync } = require('fs');

console.info('Add postcss config in .prettierrc.js');

writeFileSync('.prettierrc.js', "module.exports = require('@pplancq/prettier-config');\n", { encoding: 'utf-8' });
