// eslint-disable-next-line import/no-default-export
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'import-notation': 'string',
  },
  overrides: [
    {
      files: ['*.module.css'],
      rules: {
        'selector-class-pattern': [
          '^([a-z][a-z0-9]*)([A-Z][a-z0-9]+)*$',
          {
            message: 'Expected class selector "%s" to be camelCase',
          },
        ],
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['global'],
          },
        ],
      },
    },
  ],
};
