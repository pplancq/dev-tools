// eslint-disable-next-line import/no-default-export
export default {
  overrides: [
    {
      files: ["*.module.css", "*.module.scss"],
      rules: {
        "selector-class-pattern": [
          "^([a-z][a-z0-9]*)([A-Z][a-z0-9]+)*$",
          {
            message: 'Expected class selector "%s" to be camelCase',
          },
        ],
        "selector-pseudo-class-no-unknown": [
          true,
          {
            ignorePseudoClasses: ["global"],
          },
        ],
      },
    },
  ],
};
