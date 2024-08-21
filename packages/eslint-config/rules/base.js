module.exports = {
  extends: ['airbnb/base', './import.js'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    // eslint
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
  },
};
