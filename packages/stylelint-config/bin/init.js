#!/usr/bin/env node
const { writeFileSync } = require('fs');

console.info('Add stylelint config in .stylelintrc.js');

writeFileSync('.stylelintrc.js', "module.exports = { extends: ['@pplancq/stylelint-config'] };\n", {
  encoding: 'utf-8',
});
