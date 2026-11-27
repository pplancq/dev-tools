# ESLint config package conventions

## Rules and documentation

- When adding or changing a rule in `rules/`, place a concise English description and a link to the rule's documentation in consecutive `//` comments immediately above the rule. The documentation generator uses the nearest non-URL comment as the description.
- Configure rules explicitly and preserve existing defaults unless the change intentionally modifies them.
- Document new or changed `defineConfig` options in `main.js` and `README.md`, including defaults, conditions, warnings, and how to override rules with `extendConfig` where relevant.
- After changing rules or their comments, run `npm run docs:generate --workspace=@pplancq/eslint-config` from the repository root and include the resulting `docs/rules.md` changes.
- Check that generated entries have the correct names, severities, descriptions, plugin names, and documentation links. Update `scripts/generate-docs.mjs` when a new namespace or conditional rule set requires it. Put opt-in rules in a clearly labeled section rather than presenting them as defaults.
- Preserve the generated-section markers in `docs/rules.md`. Update `scripts/README.md` when adding or changing markers.

## Verification

- Add or update focused tests in `tests/` for changed configuration behavior and documentation generation.
- Run the relevant tests and the package's ESLint and Prettier checks. The available commands are listed in `package.json`.
