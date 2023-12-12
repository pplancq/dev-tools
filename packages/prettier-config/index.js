/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  arrowParens: 'avoid',
  printWidth: 120,
  overrides: [
    {
      files: ['Dockerfile'],
      options: {
        plugins: ['prettier-plugin-sh'],
        parser: 'sh',
        indent: 4,
      },
    },
  ],
};

module.exports = config;
