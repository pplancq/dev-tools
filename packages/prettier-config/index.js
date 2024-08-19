/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  arrowParens: 'avoid',
  printWidth: 120,
  plugins: ['prettier-plugin-sh', 'prettier-plugin-gherkin', 'prettier-plugin-nginx', 'prettier-plugin-properties'],
  overrides: [
    {
      files: ['Dockerfile'],
      options: {
        parser: 'sh',
        indent: 4,
      },
    },
    {
      files: ['nginx.conf'],
      options: {
        parser: 'nginx',
      },
    },
    {
      files: '*.properties',
      options: {
        printWidth: 0,
      },
    },
  ],
};

module.exports = config;
