#!/usr/bin/env node
const { readFileSync, writeFileSync, cpSync } = require('fs');
const { resolve } = require('path');

const packageJson = JSON.parse(readFileSync('package.json', { encoding: 'utf-8' }));

console.info('Add browserslist config in package.json');
packageJson.browserslist = {
  production: ['>0.2%', 'not dead', 'not op_mini all'],
  development: ['last 1 chrome version', 'last 1 firefox version', 'last 1 safari version'],
};

console.info('Add scripts start in package.json');
packageJson.scripts = {
  start: 'webpack serve',
  ...packageJson.scripts,
};

console.info('Add scripts build in package.json');
packageJson.scripts = {
  build: 'webpack --mode production',
  ...packageJson.scripts,
};

writeFileSync('package.json', JSON.stringify(packageJson, null, 2), { encoding: 'utf-8' });

console.info('Add .env file');
cpSync(resolve(__dirname, '../template/.env'), '.env');

console.info('Add webpack.config.js file');
cpSync(resolve(__dirname, '../template/webpack.config.js'), 'webpack.config.js');
