/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ['@commitlint/config-conventional'],
  ignores: [commit => /release/i.test(commit)],
  rules: {
    'header-max-length': [2, 'always', 200],
    'body-max-line-length': [0],
    'footer-max-line-length': [0],
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
