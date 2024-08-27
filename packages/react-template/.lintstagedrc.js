module.exports = {
  '*.{js,jsx,ts,tsx}': 'eslint --fix',
  '*.{ts,tsx}': 'tsc-files --noEmit',
  '*.{scss,css}': 'stylelint --fix',
  '*.!(js|jsx|ts|tsx|scss|css)': 'prettier --write --ignore-unknown',
  '(package|package-lock).json': 'npm run package:check',
};
