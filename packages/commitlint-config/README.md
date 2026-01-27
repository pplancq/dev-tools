# @pplancq/commitlint-config

This package provides pplancq commitlint as an extensible shared config.

## Usage

We export three commitlint configurations for your usage.

## Install

```shell
npm install --save-dev @pplancq/commitlint-config
```

## commitlint config

Use with command to enable the default configuration.

```shell
npx init-commitlint-config
```

### @pplancq/commitlint-config

This is the default configuration. To use, add `"commitlint": { "extends": ["@pplancq/commitlint-config"] }` to your `package.json`.

## ⚠️ Breaking Change: ESM Only from v3

As of version 3.x, this package is ESM-only. CommonJS (`require`) is no longer supported.

## Migration from CommonJS to ESM

**Old (CommonJS) usage:**

```js
// .commitlintrc.js or commitlint.config.js
module.exports = { extends: ['@pplancq/commitlint-config'] };
```

**New (ESM) usage:**

```js
// commitlint.config.mjs (or commitlint.config.js when using "type": "module")
export default {
  extends: ['@pplancq/commitlint-config'],
};
```

If you are using a `.js` config file, ensure your environment supports ESM (e.g., Node.js >= 18, or set "type": "module" in your package.json).
