# Migration Guide

## Rules naming (`rulesNaming`)

`eslint-plugin-import` and `eslint-plugin-jsx-a11y` are replaced by their forks `eslint-plugin-import-x` and `eslint-plugin-jsx-a11y-x`, which support ESLint 10. This is **not a breaking change**: the default `rulesNaming: 'legacy'` keeps the historical rule names. The default will become `'modern'` in the next major release.

| Plugin                     | `legacy` (default) | `modern`         |
| -------------------------- | ------------------ | ---------------- |
| `eslint-plugin-import-x`   | `import/xxx`       | `import-x/xxx`   |
| `eslint-plugin-jsx-a11y-x` | `jsx-a11y/xxx`     | `jsx-a11y-x/xxx` |

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

### `legacy` mode and settings

`eslint-plugin-import-x` only reads the `import-x/*` settings, whatever the namespace the rules are registered under. To avoid a breaking change, with `rulesNaming: 'legacy'` the `import/*` settings found in `extendConfig` are copied to `import-x/*` (the original keys are kept, an existing `import-x/*` setting always wins) and a warning lists them. Rename them to `import-x/*` to remove the warning.

### Things to check

- **Module resolution**: `eslint-plugin-import-x` resolves packages that only expose ESM `exports`, which the former resolver could not resolve. Rules such as `no-extraneous-dependencies` may now report these packages (for example a package listed in `devDependencies` and imported by a script that is not a test or a config file). Move it to `dependencies`, or turn the rule off for those files.
- **Plugin registered twice**: if your configuration registers `eslint-plugin-import` yourself under the `import` namespace, ESLint fails with `Cannot redefine plugin "import"`. Remove your own registration and rely on `defineConfig`, or register it under another namespace.
- **Direct dependency**: `@pplancq/eslint-config` no longer installs `eslint-plugin-import`. If your own configuration imports it, install it yourself.
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
