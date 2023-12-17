#!/usr/bin/env node
const { writeFileSync } = require('fs');

console.info('Add babel config in .babelrc.js');

writeFileSync('.babelrc.js', "module.exports = { extends: '@pplancq/babel-config' };\n", { encoding: 'utf-8' });
