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
module.exports = require('@pplancq/prettier-config');
```

**New (ESM) usage:**

```js
// prettier.config.mjs (or prettier.config.js when using "type": "module")
import defaultConfig from '@pplancq/prettier-config';

export default {
  ...defaultConfig,
};
```

If you are using a `.js` config file, ensure your environment supports ESM (e.g., Node.js >= 18, or set "type": "module" in your package.json).
