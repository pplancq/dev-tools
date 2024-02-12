const { resolve } = require('path');

const paths = {
  root: resolve(process.cwd()),
  nodeModules: resolve(process.cwd(), './node_modules'),
  src: resolve(process.cwd(), './src'),
  public: resolve(process.cwd(), './public'),
  build: resolve(process.cwd(), './build'),
  dotenv: resolve(process.cwd(), './.env'),
  entry: resolve(process.cwd(), './src/main.ts'),
  cache: resolve(process.cwd(), './node_modules/.cache'),
  tsconfig: resolve(process.cwd(), './tsconfig.json'),
  packageJson: resolve(process.cwd(), './package.json'),
  indexHtml: resolve(process.cwd(), './public/index.html'),
};

module.exports = paths;
