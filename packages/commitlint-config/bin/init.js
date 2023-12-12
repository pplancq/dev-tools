#!/usr/bin/env node
const { writeFileSync } = require('fs');

console.info('Add commitlint config in .commitlintrc.js');

writeFileSync('.commitlintrc.js', "module.exports = { extends: ['@pplancq/commitlint-config'] };\n", {
  encoding: 'utf-8',
});
