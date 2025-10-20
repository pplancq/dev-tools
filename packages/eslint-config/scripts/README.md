# Scripts

This directory contains utility scripts for the eslint-config package.

## generate-docs.mjs

Generates the ESLint rules documentation in the `docs/rules.md` file.

### Usage

```bash
npm run docs:generate
```

### What it does

This script:

1. Loads all rule configuration files from the `rules/` directory
2. Extracts active rules (those set to 'warn' or 'error')
3. Generates markdown tables for each configuration type
4. Updates the `docs/rules.md` file by replacing content between HTML comment markers
5. Runs Prettier to format the output file

### Template Markers

The script uses HTML comment markers in `docs/rules.md` to determine where to insert the rule tables:

- `<!-- START_BASE_RULES -->` / `<!-- END_BASE_RULES -->` - Base configuration rules
- `<!-- START_REACT_RULES -->` / `<!-- END_REACT_RULES -->` - React configuration rules
- `<!-- START_VITEST_RULES -->` / `<!-- END_VITEST_RULES -->` - Vitest configuration rules
- `<!-- START_PLAYWRIGHT_RULES -->` / `<!-- END_PLAYWRIGHT_RULES -->` - Playwright configuration rules
- `<!-- START_PRETTIER_RULES -->` / `<!-- END_PRETTIER_RULES -->` - Prettier configuration rules

This approach allows you to add custom content to the documentation file without it being overwritten by the script.

### When to run

Run this script whenever:

- A new rule is added or modified in any rule file
- Rule descriptions are updated
- You want to regenerate the documentation

The script should be run before publishing a new version of the package to ensure the documentation is up to date.
