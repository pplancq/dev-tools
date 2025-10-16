# Scripts

This directory contains utility scripts for the eslint-config package.

## generate-docs.js

Generates the ESLint rules documentation in the `docs/rules.md` file.

### Usage

```bash
npm run docs:generate
```

### What it does

This script:

1. Loads all rule configuration files from the `rules/` directory
2. Extracts active rules (those set to 'warn' or 'error')
3. Generates a markdown documentation file with:
   - A table of contents
   - Separate sections for each configuration type (base, react, vitest, playwright, prettier)
   - For each rule: name (with link to official docs), activation mode, description, and plugin name
4. Saves the generated documentation to `docs/rules.md`

### When to run

Run this script whenever:

- A new rule is added or modified in any rule file
- Rule descriptions are updated
- You want to regenerate the documentation

The script should be run before publishing a new version of the package to ensure the documentation is up to date.
