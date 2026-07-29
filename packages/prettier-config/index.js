/** @type {import('prettier').Config} */
const config = {
  printWidth: 120,
  plugins: ["prettier-plugin-sh", "prettier-plugin-gherkin", "prettier-plugin-properties"],
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
