# Migration Guide v3 to v4

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
import { defineConfig } from '@pplancq/eslint-config';

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
