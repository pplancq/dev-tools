const { resolve } = require('path');
const { existsSync } = require('fs');

module.exports = () => {
  const tsPath = resolve(process.cwd(), './src/main.ts');
  const jsPath = resolve(process.cwd(), './src/main.js');

  if (existsSync(tsPath)) {
    return tsPath;
  }

  if (existsSync(jsPath)) {
    return jsPath;
  }

  throw new Error('Neither main.js nor main.ts found in src directory');
};
