# @pplancq/eslint-config

This package provides a simplified and customizable ESLint configuration for your React/Node.js applications. Whether you are a beginner or an experienced developer, this package helps you configure ESLint with strict rules to ensure better code structure. Based on Airbnb’s ESLint configuration, it includes additional rules for TypeScript files and test files.

## Getting Started

### Prerequisites

- Node.js 18.18.0 or higher

### Installation

```shell
npm install --save-dev eslint@9 @pplancq/eslint-config
```

## Usage

### Automatic Configuration

To enable the default configuration automatically, use the following command:

```shell
npx init-eslint-config
```

### Manual Configuration

Alternatively, you can create an `eslint.config.mjs` file in the root of your project:

```javascript
// eslint.config.mjs
import { defineConfig } from "@pplancq/eslint-config";

export default defineConfig({
  enableReact: true,
  enableVitest: true,
});
```

### Options

The following options can be passed to the `defineConfig` function. All options are optional. By default, this configuration includes rules for base, import, and TypeScript files.

| Option           | Default                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tsFiles          | ['**/*.ts?(x)']                            | Patterns for TypeScript files                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| unitTestFiles    | ['**/*.{test,spec,steps}.{js,jsx,ts,tsx}'] | Patterns for unit test files                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| unitE2eFiles     | ['tests/**/*.{test,spec}.{js,jsx,ts,tsx}'] | Patterns for end-to-end (E2E) test files (ex: Playwright)                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| enableReact      | false                                      | Enables rules for React and Testing Library files                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| rulesNaming      | 'legacy'                                   | Naming of the rules of the plugins replaced by a fork (`eslint-plugin-import-x` and `eslint-plugin-jsx-a11y-x`). 'legacy' (default) keeps the historical rule names (`import/xxx`, `jsx-a11y/xxx`)<br/>'modern' uses the forks namespaces (`import-x/xxx`, `jsx-a11y-x/xxx`), as listed in the [rules documentation](./docs/rules.md). See [Rules naming](#rules-naming)                                                                                                                              |
| enableVitest     | false                                      | Enables rules for Vitest files                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| enablePlaywright | false                                      | Enables rules for Playwright E2E test files                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| enablePrettier   | 'off'                                      | 'off' disables Prettier integration (default). Recommended when using Prettier separately; install `eslint-config-prettier` to disable conflicting ESLint formatting rules<br/>'on' enables Prettier as an ESLint rule. **Deprecated**, will be removed in the next major release<br/>'disableStyleOnly' disables conflicting ESLint formatting rules without running Prettier as an ESLint rule. Recommended transition option to keep the same behavior as `'on'` while running Prettier separately |
| extendConfig     | []                                         | Extends the ESLint configuration. With `rulesNaming: 'legacy'`, the `import/*` settings it contains are copied to `import-x/*`                                                                                                                                                                                                                                                                                                                                                                        |

### Rules naming

The `import` and `jsx-a11y` plugins are replaced by their maintained forks, [`eslint-plugin-import-x`](https://github.com/un-ts/eslint-plugin-import-x) and [`eslint-plugin-jsx-a11y-x`](https://github.com/eslint-community/eslint-plugin-jsx-a11y-x), which support ESLint 10. The `rulesNaming` option lets you migrate without breaking your configuration:

| `rulesNaming`        | Rules                            | Settings                 |
| -------------------- | -------------------------------- | ------------------------ |
| `'legacy'` (default) | `import/xxx`, `jsx-a11y/xxx`     | `import-x/*` (see below) |
| `'modern'`           | `import-x/xxx`, `jsx-a11y-x/xxx` | `import-x/*`             |

- The [rules documentation](./docs/rules.md) lists the `modern` names. With `'legacy'`, replace `import-x/` by `import/` and `jsx-a11y-x/` by `jsx-a11y/`.
- `eslint-plugin-import-x` only reads the `import-x/*` settings, whatever the rules namespace. In `legacy` mode, the `import/*` settings found in `extendConfig` (for example `import/resolver`) are copied automatically to `import-x/*` and a warning lists them.
- The default will become `'modern'` in the next major release. See the [Migration Guide](./MIGRATION.md#rules-naming-rulesnaming) to migrate now.

### Prettier Configuration

> ⚠️ **Deprecated:** `enablePrettier: 'on'` is deprecated and will be removed in the next major release.
> It is recommended to use `enablePrettier: 'disableStyleOnly'` and run Prettier separately for formatting.
> This keeps the same behavior as `'on'` without running Prettier as an ESLint rule.

If you use Prettier, install the following package:

```shell
npm install --save-dev prettier
```

Then update your ESLint config:

```javascript
// eslint.config.mjs
import { defineConfig } from "@pplancq/eslint-config";

export default defineConfig({
  enablePrettier: "disableStyleOnly",
});
```

## Rules Documentation

For a complete list of all active ESLint rules in each configuration, please refer to the [Rules Documentation](./docs/rules.md).

## Migration

To switch to the forks naming (`rulesNaming: 'modern'`), please refer to the [Migration Guide](./MIGRATION.md#rules-naming-rulesnaming).

If you are upgrading from version 3 to version 4 of `@pplancq/eslint-config`, please refer to the [Migration Guide](./MIGRATION.md#migration-guide-pplancqeslint-config-v3-to-v4) for detailed instructions.
