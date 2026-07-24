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
        'prettier-config',
        'react-template',
        'stylelint-config',
        'nx-release-plugin',
        'deps',
        'release',
      ],
    ],
  },
};
