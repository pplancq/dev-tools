// eslint-disable-next-line import/no-default-export
export default {
  extends: ['@pplancq/commitlint-config'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'dev-tools',
        'commitlint-config',
        'create-react-app',
        'eslint-config',
        'postcss-config',
        'prettier-config',
        'react-template',
        'semantic-release-config',
        'stylelint-config',
        'deps',
        'release',
      ],
    ],
  },
};
