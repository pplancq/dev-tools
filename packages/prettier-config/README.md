# @pplancq/prettier-config

This package provides pplancq prettier as an extensible shared config.

## Usage

We export three Prettier configurations for your usage.

## Install

```shell
npm install --save-dev @pplancq/prettier-config
```

## Prettier config

Use with command to enable the default configuration.

```shell
npx init-prettier-config
```

### @pplancq/prettier-config

This is the default configuration. To use, add `"prettier": "@pplancq/prettier-config"` to your `package.json`.

## ⚠️ Breaking Change: ESM Only from v2

As of version 2.x, this package is ESM-only. CommonJS (`require`) is no longer supported.

## Migration from CommonJS to ESM

**Old (CommonJS) usage:**

```js
// .prettierrc.js or prettier.config.js
module.exports = require("@pplancq/prettier-config");
```

**New (ESM) usage:**

```js
// prettier.config.mjs (or prettier.config.js when using "type": "module")
import defaultConfig from "@pplancq/prettier-config";

export default {
  ...defaultConfig,
};
```

If you are using a `.js` config file, ensure your environment supports ESM (e.g., Node.js >= 18, or set "type": "module" in your package.json).

## Migration from v3 to v4

Version 4 aligns the shared config with Prettier's default recommendations. The following options are no longer overridden:

- `singleQuote`: previously set to `true`, now uses Prettier's default (`false`).
- `arrowParens`: previously set to `"avoid"`, now uses Prettier's default (`"always"`).

As a result, strings will be formatted with double quotes and arrow functions with a single argument will include parentheses.

### How to migrate

After upgrading, run Prettier on your codebase to apply the new formatting:

```shell
npx prettier --write .
```
