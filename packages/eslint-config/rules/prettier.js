// eslint-disable-next-line import/no-extraneous-dependencies
import prettierPlugin from "eslint-plugin-prettier";

export const prettierRules = {
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    // eslint-plugin-prettier
    // https://github.com/prettier/eslint-plugin-prettier
    "prettier/prettier": "error",
  },
};
