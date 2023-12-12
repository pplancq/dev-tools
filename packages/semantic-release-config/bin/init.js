#!/usr/bin/env node
const { writeFileSync } = require('fs');

console.info('Add semantic-release config in .releaserc .js');

writeFileSync('.releaserc .js', "module.exports = { extends: ['@pplancq/semantic-release-config'] };\n", {
  encoding: 'utf-8',
});
