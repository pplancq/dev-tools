module.exports = {
  extends: ['airbnb/base'],
  plugins: ['import'],
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

    // eslint-plugin-import https://github.com/import-js/eslint-plugin-import
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
    },
  },
};
