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
import { defineConfig } from '@pplancq/eslint-config';

export default defineConfig({
  enableReact: true,
  enableVitest: true,
});
```

### Options

The following options can be passed to the `defineConfig` function. All options are optional. By default, this configuration includes rules for base, import, and TypeScript files.

| Option         | Default                                    | Description                                                                                                                                                                                            |
| -------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| tsFiles        | ['**/*.ts?(x)']                            | Patterns for TypeScript files                                                                                                                                                                          |
| unitTestFiles  | ['**/*.{test,spec,steps}.{js,jsx,ts,tsx}'] | Patterns for unit test files                                                                                                                                                                           |
| enableReact    | false                                      | Enables rules for React and Testing Library files                                                                                                                                                      |
| enableVitest   | false                                      | Enables rules for Vitest files                                                                                                                                                                         |
| enableJest     | false                                      | Enables rules for Jest files                                                                                                                                                                           |
| enablePrettier | 'off'                                      | 'off' disables Prettier rules<br/>'on' enables Prettier rules<br/>'disableStyleOnly' enables Prettier rules but disables the 'prettier/prettier' rule, not using Prettier CLI for formatting your code |
| extendConfig   | []                                         | Extends the ESLint configuration                                                                                                                                                                       |

### Prettier Configuration

If you set `enablePrettier: 'on'`, you will need to install the following packages:

```shell
npm install --save-dev prettier eslint-plugin-prettier
```

## Migration

If you are upgrading from version 3 to version 4 of `@pplancq/eslint-config`, please refer to the [Migration Guide](./MIGRATION.md#migration-guide-pplancqeslint-config-v3-to-v4) for detailed instructions.
