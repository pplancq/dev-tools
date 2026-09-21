/** @type {import('prettier').Config} */
const config = {
  printWidth: 120,
  plugins: ["prettier-plugin-sh", "prettier-plugin-gherkin", "prettier-plugin-properties", "prettier-plugin-yaml"],
  // Neutral YAML options close to Prettier defaults to avoid mass reformatting.
  yamlBlockStyle: undefined,
  yamlCollectionStyle: undefined,
  yamlQuoteKeys: false,
  yamlQuoteValues: false,
  overrides: [
    {
      files: ["Dockerfile", "*.Dockerfile", "Dockerfile.*"],
      options: {
        parser: "sh",
        indent: 4,
      },
    },
    {
      files: "*.properties",
      options: {
        printWidth: 0,
      },
    },
  ],
};

// eslint-disable-next-line import/no-default-export
export default config;
