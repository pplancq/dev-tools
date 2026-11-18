# Migration Guide

## v6 to v7

Version 7 replaces `eslint-plugin-react` with the ESLint React forks and the `pplancq-react` custom rules. This is a breaking change: React rule names change, and about fifty rules are no longer enabled by this configuration.

### Requirements

- Node.js `^20.19.0 || ^22.13.0 || >=24`.
- ESLint peer dependency `^9.14.0 || ^10.0.0`.

### Plugin replacements

| v6 plugin             | v7 plugin or rules                                                            |
| --------------------- | ----------------------------------------------------------------------------- |
| `eslint-plugin-react` | `eslint-plugin-react-x`, `eslint-plugin-react-jsx`, `eslint-plugin-react-dom` |
| —                     | `@stylistic/eslint-plugin` for the retained JSX style rules                   |
| —                     | `@eslint-react/kit` for the `pplancq-react` custom rules                      |

These new dependencies are installed with the config; `eslint-plugin-react` is no longer installed. If your own configuration imports `eslint-plugin-react`, keep it as a direct dependency.

### React rule names

React rules always use the v7 namespaces: `react-x/`, `react-dom/`, `react-jsx/`, `@stylistic/`, and `pplancq-react/`. There is no legacy `react/` namespace. The `rulesNaming` option and its `'legacy'` default are unchanged for `import` and `jsx-a11y`; it does not affect React rules.

Update rule overrides in `extendConfig` and `eslint-disable` / `eslint-enable` comments. Search for `react/` references and use this table rather than replacing the prefix globally: the old rules map to multiple plugins.

| v6 rule (`react/`)                  | v7 rule(s)                                                                                                                                                                                                                        | Severity, options, or notes                                                 |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `jsx-key`                           | `react-x/no-missing-key`, `react-jsx/no-key-after-spread`                                                                                                                                                                         | error                                                                       |
| `no-array-index-key`                | `react-x/no-array-index-key`                                                                                                                                                                                                      | error                                                                       |
| `jsx-no-constructed-context-values` | `react-x/no-unstable-context-value`                                                                                                                                                                                               | error                                                                       |
| `jsx-no-leaked-render`              | `react-x/no-leaked-conditional-rendering`                                                                                                                                                                                         | error; type-aware in TypeScript JSX files                                   |
| `no-unstable-nested-components`     | `react-x/no-nested-component-definitions`                                                                                                                                                                                         | error                                                                       |
| `display-name`                      | `react-x/no-missing-component-display-name`, `react-x/no-missing-context-display-name`                                                                                                                                            | error                                                                       |
| `no-access-state-in-setstate`       | `react-x/no-access-state-in-setstate`                                                                                                                                                                                             | error                                                                       |
| `no-direct-mutation-state`          | `react-x/no-direct-mutation-state`                                                                                                                                                                                                | error                                                                       |
| `no-unused-state`                   | `react-x/no-unused-state`                                                                                                                                                                                                         | error; experimental in the fork                                             |
| `no-did-update-set-state`           | `react-x/no-set-state-in-component-did-update`                                                                                                                                                                                    | error                                                                       |
| `no-will-update-set-state`          | `react-x/no-set-state-in-component-will-update`                                                                                                                                                                                   | error                                                                       |
| `no-unused-class-component-methods` | `react-x/no-unused-class-component-members`                                                                                                                                                                                       | error                                                                       |
| `no-deprecated`                     | `react-x/no-component-will-mount`, `react-x/no-component-will-receive-props`, `react-x/no-component-will-update`, `react-dom/no-render`, `react-dom/no-hydrate`, `react-dom/no-find-dom-node`, `react-dom/no-render-return-value` | error; the last two are also mapped separately and are configured only once |
| `jsx-no-comment-textnodes`          | `react-jsx/no-comment-textnodes`                                                                                                                                                                                                  | error                                                                       |
| `no-children-prop`                  | `react-jsx/no-children-prop`                                                                                                                                                                                                      | error                                                                       |
| `jsx-no-useless-fragment`           | `react-jsx/no-useless-fragment`                                                                                                                                                                                                   | error                                                                       |
| `no-namespace`                      | `react-jsx/no-namespace`                                                                                                                                                                                                          | error                                                                       |
| `no-unknown-property`               | `react-dom/no-unknown-property`                                                                                                                                                                                                   | error                                                                       |
| `void-dom-elements-no-children`     | `react-dom/no-void-elements-with-children`                                                                                                                                                                                        | error                                                                       |
| `button-has-type`                   | `react-dom/no-missing-button-type`                                                                                                                                                                                                | error; no `reset: false` option; explicit `type="reset"` remains valid      |
| `jsx-no-script-url`                 | `react-dom/no-script-url`                                                                                                                                                                                                         | error                                                                       |
| `jsx-no-target-blank`               | `react-dom/no-unsafe-target-blank`                                                                                                                                                                                                | error                                                                       |
| `no-danger`                         | `react-dom/no-dangerously-set-innerhtml`                                                                                                                                                                                          | warn                                                                        |
| `no-danger-with-children`           | `react-dom/no-dangerously-set-innerhtml-with-children`                                                                                                                                                                            | error                                                                       |
| `no-find-dom-node`                  | `react-dom/no-find-dom-node`                                                                                                                                                                                                      | error                                                                       |
| `no-render-return-value`            | `react-dom/no-render-return-value`                                                                                                                                                                                                | error                                                                       |
| `jsx-curly-brace-presence`          | `@stylistic/jsx-curly-brace-presence`                                                                                                                                                                                             | error; `{ props: "never", children: "never" }`                              |
| `self-closing-comp`                 | `@stylistic/jsx-self-closing-comp`                                                                                                                                                                                                | error                                                                       |
| `jsx-boolean-value`                 | `pplancq-react/jsx-boolean-value`                                                                                                                                                                                                 | error; fixed `"never"` behavior; autofixes `flag={true}` to `flag`          |
| `destructuring-assignment`          | `pplancq-react/destructuring-assignment`                                                                                                                                                                                          | error; fixed `"always"` behavior                                            |
| `no-multi-comp`                     | `pplancq-react/no-multi-comp`                                                                                                                                                                                                     | error; fixed `ignoreStateless: false` behavior                              |

`react-hooks/rules-of-hooks` and `react-hooks/exhaustive-deps` are unchanged.

The three `pplancq-react` rules accept severity-only overrides; their behaviors shown above are fixed, not configurable rule options. Remove legacy options when migrating overrides, for example change `["error", "always"]` to `"error"` for `pplancq-react/destructuring-assignment`. Keeping legacy options causes ESLint configuration validation to fail.

**Quick rename tip.** Most one-to-one rules can be renamed with a search and replace across your sources and `extendConfig` overrides. Run it only on the unambiguous rules, then review the diff (macOS `sed` needs `-i ''`):

```bash
grep -rlE "react/(no-array-index-key|no-unstable-nested-components)" src | xargs sed -i \
  -e 's#react/no-array-index-key#react-x/no-array-index-key#g' \
  -e 's#react/no-unstable-nested-components#react-x/no-nested-component-definitions#g'
```

Extend the list with the other rows of the table. Rules that map to several new rules (`jsx-key`, `display-name`, `no-deprecated`) must be renamed by hand.

### Removed rules

These rules are no longer enforced by the default React configuration:

- **Formatting (use Prettier with `eslint-config-prettier`)**: `jsx-closing-bracket-location`, `jsx-closing-tag-location`, `jsx-curly-spacing`, `jsx-curly-newline`, `jsx-equals-spacing`, `jsx-first-prop-new-line`, `jsx-indent`, `jsx-indent-props`, `jsx-max-props-per-line`, `jsx-one-expression-per-line`, `jsx-props-no-multi-spaces`, `jsx-tag-spacing`, `jsx-wrap-multilines`. If you want additional JSX style checks, configure the corresponding `@stylistic` rules yourself.
- **Handled by TypeScript or native ESLint 10**: `jsx-no-duplicate-props` (TypeScript reports duplicate JSX attributes as `TS17001`), `style-prop-object` (TypeScript), `jsx-no-undef`, `jsx-uses-vars`. With ESLint 9 and JavaScript JSX, check whether you need another way to retain the removed undefined-name checks. The core `no-unused-vars` rule can also incorrectly report a component used only in JSX as unused, for example `Child` in `<Child />`; this false positive is not fixed by this configuration.
- **Dropped conventions**: `jsx-fragments`, `jsx-pascal-case`, `jsx-no-bind`, `no-invalid-html-attribute`, `function-component-definition`, `jsx-filename-extension`, `no-typos`. These are no longer enabled by default.
- **Legacy classes and `propTypes`**: `no-string-refs`, `no-is-mounted`, `no-this-in-sfc`, `no-arrow-function-lifecycle`, `no-redundant-should-component-update`, `prefer-stateless-function`, `require-render-return`, `sort-comp`, `state-in-constructor`, `static-property-placement`, `prop-types`, `no-unused-prop-types`, `default-props-match-prop-types`, `forbid-prop-types`, `forbid-foreign-prop-types`, `prefer-exact-props`. Use TypeScript types where they fit your project.

Rules that were already `off` remain unenforced.

### Behavior differences

- `react-x/no-missing-key` ignores elements with a spread; `react-jsx/no-key-after-spread` separately catches a `key` placed after the spread.
- `react-x/no-missing-component-display-name` is less strict than the old `display-name` rule. The new `react-x/no-missing-context-display-name` also requires display names on React contexts.
- `react-x/no-missing-context-display-name` can autofix a missing context display name. Whether to assign `displayName` only in development (for example, to avoid including it in production bundles) is a project-specific choice, not a requirement of this rule; the autofixed unconditional assignment is also valid.
- `react-x/no-unused-state` is experimental in the fork.
- `react-x/no-leaked-conditional-rendering` is enabled for TypeScript JSX files with project services to provide type information. JavaScript files do not get this type-aware check.
- Type-aware analysis relies on `parserOptions.projectService: true` for `.tsx` files. Every `.tsx` file must be included in a `tsconfig.json`, otherwise ESLint reports a parsing error for it. If a project cannot meet this requirement, override the block with `extendConfig` (set `languageOptions.parserOptions.projectService` to `false` and `react-x/no-leaked-conditional-rendering` to `"off"`).
- `react-dom/no-missing-button-type` does not accept the old `reset: false` option; a button with `type="reset"` is still valid.

### Deprecated API coverage

The old `no-deprecated` rule is covered by these seven rules:

- `react-x/no-component-will-mount`
- `react-x/no-component-will-receive-props`
- `react-x/no-component-will-update`
- `react-dom/no-render`
- `react-dom/no-hydrate`
- `react-dom/no-find-dom-node`
- `react-dom/no-render-return-value`

`react-dom/no-find-dom-node` and `react-dom/no-render-return-value` also replace individual rules, so each new rule is configured only once. The following React 19-only rules are intentionally excluded to avoid failures in React 18 projects: `react-x/no-forward-ref`, `react-x/no-create-ref`, `react-x/no-context-provider`, and `react-x/no-use-context`.

### Settings

`settings.react` is no longer read. Replace it with `settings["react-x"]`; the old `pragma`, `version`, and `propWrapperFunctions` settings are not carried over. The v7 rules use the `react-x` settings, including `version`, `importSource`, and `polymorphicPropName`.

### Upgrade checklist

1. Upgrade Node.js and ESLint to the supported versions above.
2. Upgrade `@pplancq/eslint-config` to v7 and remove `eslint-plugin-react` from your own dependencies only if you do not use it elsewhere.
3. Replace `settings.react` with `settings["react-x"]`.
4. Rename React rule overrides and `eslint-disable` / `eslint-enable` references using the mapping table; remove references to rules no longer enforced.
5. Run ESLint, review new findings and removed checks, and update any project-specific rules as needed.

## Rules naming (`rulesNaming`)

The `rulesNaming` option affects only `eslint-plugin-import-x` and `eslint-plugin-jsx-a11y-x`. Its default remains `'legacy'` in v7; React rules always use their fork namespaces and are not affected by this option.

| Plugin                     | `legacy` (default) | `modern`           | Settings              |
| -------------------------- | ------------------ | ------------------ | --------------------- |
| `eslint-plugin-import-x`   | `import/xxx`       | `import-x/xxx`     | `import-x/*`          |
| `eslint-plugin-jsx-a11y-x` | `jsx-a11y/xxx`     | `jsx-a11y-x/xxx`   | —                     |
| React rules                | Same in both modes | Same in both modes | `settings["react-x"]` |

### Migrate to `modern`

1. Set the option:

   ```javascript
   // eslint.config.mjs
   import { defineConfig } from "@pplancq/eslint-config";

   export default defineConfig({
     rulesNaming: "modern",
   });
   ```

2. Rename everything that references the old namespaces:
   - the rules in your configuration (`extendConfig`) and in `eslint-disable` / `eslint-enable` comments: `import/xxx` → `import-x/xxx`, `jsx-a11y/xxx` → `jsx-a11y-x/xxx`;
   - the `import/*` settings: `import/resolver` → `import-x/resolver`, `import/core-modules` → `import-x/core-modules`, etc.

   In `modern` mode the `import/*` settings are **not** copied: `eslint-plugin-import-x` ignores them.

React rules do not use either namespace mode; use the v7 mapping table above for every `react/xxx` reference.

### `legacy` mode and settings

`eslint-plugin-import-x` only reads the `import-x/*` settings, whatever the namespace the rules are registered under. To avoid a breaking change, with `rulesNaming: 'legacy'` the `import/*` settings found in `extendConfig` are copied to `import-x/*` (the original keys are kept, an existing `import-x/*` setting always wins) and a warning lists them. Rename them to `import-x/*` to remove the warning.

### Things to check

- **Module resolution**: `eslint-plugin-import-x` resolves packages that only expose ESM `exports`, which the former resolver could not resolve. Rules such as `no-extraneous-dependencies` may now report these packages (for example a package listed in `devDependencies` and imported by a script that is not a test or a config file). Move it to `dependencies`, or turn the rule off for those files.
- **Plugin registered twice**: if your configuration registers `eslint-plugin-import` yourself under the `import` namespace, ESLint fails with `Cannot redefine plugin "import"`. Remove your own registration and rely on `defineConfig`, or register it under another namespace.
- **Direct dependency**: `@pplancq/eslint-config` no longer installs `eslint-plugin-import`. If your own configuration imports it, install it yourself. For the v7 React changes, see [Plugin replacements](#plugin-replacements).
- **Rule options**: the options of the rules defined by this configuration are validated against `eslint-plugin-import-x`. If you override a rule with custom options, check them against the [eslint-plugin-import-x documentation](https://github.com/un-ts/eslint-plugin-import-x#rules).
- **Messages**: the only difference noticed on the rules enabled by this configuration is cosmetic (`no-extraneous-dependencies` suggests `npm i xxx` instead of `npm i -S xxx`).

---

## v5 to v6

### ⚠️ Breaking Change: ESM Only from v6

As of version 6.x, this package is **ESM-only**. CommonJS (`require`) is no longer supported.

#### Migration from CommonJS to ESM

**Old (CommonJS) usage:**

```javascript
// eslint.config.js
const { defineConfig } = require("@pplancq/eslint-config");

module.exports = defineConfig({
  // your options here
});
```

**New (ESM) usage:**

```javascript
// eslint.config.mjs (or eslint.config.js when using "type": "module")
import { defineConfig } from "@pplancq/eslint-config";

export default defineConfig({
  // your options here
});
```

If you are using a `.js` config file, ensure your environment supports ESM (e.g., Node.js >= 18, or set `"type": "module"` in your `package.json`).

---

## v3 to v4

This guide will help you migrate from version 3 to version 4 of the `@pplancq/eslint-config` package, which now supports ESLint 9 and the new flat configuration.

## Steps to Migrate

### 1. Update ESLint and Install the New Configuration

First, update ESLint to version 9 and install the new version of the configuration package:

```shell
npm install --save-dev eslint@9 @pplancq/eslint-config@4
```

### 2. Remove Legacy Configuration

Remove the legacy ESLint configuration from your `package.json` or `.eslintrc` file. For example, if you have the following in your `package.json`:

```json
{
  "eslintConfig": {
    "extends": ["@pplancq/eslint-config/react"]
  }
}
```

Remove this section entirely.

### 3. Create New Configuration File

Create a new `eslint.config.mjs` file in the root of your project:

```javascript
// eslint.config.mjs
import { defineConfig } from "@pplancq/eslint-config";

export default defineConfig({
  enableReact: true,
});
```

### 4. Adjust Configuration Options

Review and adjust the configuration options as needed. For detailed information on all available options, please refer to the [README](./README.md).

### Configuration Equivalents

- `@pplancq/eslint-config/node` is equivalent to `defineConfig()`.
- To use `@pplancq/eslint-config/react`, set the `enableReact` option to `true`.
- To use `@pplancq/eslint-config/vitest`, set the `enableVitest` option to `true`.
- To use `@pplancq/eslint-config/jest`, set the `enableJest` option to `true`.
- To use `@pplancq/eslint-config/prettier`, set the `enablePrettier` option to `'on'`.
