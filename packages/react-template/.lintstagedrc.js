module.exports = {
  '*.{js,jsx,ts,tsx}': 'eslint --fix',
  '*.{ts,tsx}': 'tsc-files --noEmit',
  '*.{scss,css}': 'stylelint --fix',
  '(package|package-lock).json': 'npm run package:check',
};
