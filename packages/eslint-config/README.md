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
| enableVitest     | false                                      | Enables rules for Vitest files                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| enablePlaywright | false                                      | Enables rules for Playwright E2E test files                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| enablePrettier   | 'off'                                      | 'off' disables Prettier integration (default). Recommended when using Prettier separately; install `eslint-config-prettier` to disable conflicting ESLint formatting rules<br/>'on' enables Prettier as an ESLint rule. **Deprecated**, will be removed in the next major release<br/>'disableStyleOnly' disables conflicting ESLint formatting rules without running Prettier as an ESLint rule. Recommended transition option to keep the same behavior as `'on'` while running Prettier separately |
| extendConfig     | []                                         | Extends the ESLint configuration                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

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

If you prefer to completely remove the built-in Prettier integration, set `enablePrettier: 'off'` and install `eslint-config-prettier` to disable conflicting ESLint formatting rules:

```shell
npm install --save-dev prettier eslint-config-prettier
```

```javascript
// eslint.config.mjs
import { defineConfig } from "@pplancq/eslint-config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig({
  enablePrettier: "off",
  extendConfig: [eslintConfigPrettier],
});
```

Note that `eslint-config-prettier` only disables formatting rules. Rules such as `arrow-body-style`, `curly` and `prefer-arrow-callback` are not formatting rules and will need to be disabled manually if you want to keep the previous behavior.

If you still set `enablePrettier: 'on'`, you will need to install the following packages:

```shell
npm install --save-dev prettier eslint-plugin-prettier
```

## Rules Documentation

For a complete list of all active ESLint rules in each configuration, please refer to the [Rules Documentation](./docs/rules.md).

## Migration

If you are upgrading from version 3 to version 4 of `@pplancq/eslint-config`, please refer to the [Migration Guide](./MIGRATION.md#migration-guide-pplancqeslint-config-v3-to-v4) for detailed instructions.
