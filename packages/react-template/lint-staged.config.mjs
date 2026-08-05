export default {
  "*.{js,jsx,mjs,ts,tsx}": "eslint --fix",
  "*.{ts,tsx}": "tsc-files --noEmit",
  "*.{scss,css}": "stylelint --fix",
  "*": "prettier --write --ignore-unknown",
  "(package|package-lock).json": "npm run package:check",
};
