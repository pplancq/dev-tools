#!/usr/bin/env node
const { writeFileSync } = require('fs');

console.info('Add postcss config in .postcssrc.js');

writeFileSync('.postcssrc.js', "module.exports = require('@pplancq/postcss-config');\n", { encoding: 'utf-8' });
