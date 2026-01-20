# @pplancq/postcss-config

This package provides pplancq postcss as an extensible shared config.

## Usage

We export three postcss configurations for your usage.

## Install

```shell
npm install --save-dev @pplancq/postcss-config
```

## postcss config

Use with command to enable the default configuration.

```shell
npx init-postcss-config
```

### @pplancq/postcss-config

This is the default configuration. To use it, see the ESM migration section below for the correct syntax.

## ⚠️ Breaking Change: ESM Only from v2

As of version 2.x, this package is ESM-only. CommonJS (`require`) is no longer supported.

## Migration from CommonJS to ESM

**Old (CommonJS) usage:**

```js
// .postcssrc.js or postcss.config.js
module.exports = require('@pplancq/postcss-config');
```

**New (ESM) usage:**

```js
// postcss.config.mjs (or postcss.config.js when using "type": "module")
import defaultConfig from '@pplancq/postcss-config';

export default {
  ...defaultConfig,
};
```

If you are using a `.js` config file, ensure your environment supports ESM (e.g., Node.js >= 18, or set "type": "module" in your package.json).
