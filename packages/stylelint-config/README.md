# @pplancq/stylelint-config

This package provides pplancq stylelint as an extensible shared config.

## Usage

We export three stylelint configurations for your usage.

## Install

```shell
npm install --save-dev @pplancq/stylelint-config
```

## stylelint config

Use with command to enable the default configuration.

```shell
npx init-stylelint-config
```

### @pplancq/stylelint-config

This is the default configuration. To use, add `"stylelint": { "extends": ["@pplancq/stylelint-config"] }` to your `package.json`.

### Alternative configuration

if you use prettier to format your css files, this package provides an alternative configuration that takes prettier directly into account.
To do this, install the following additional packages:

```shell
npm install --save-dev prettier stylelint-prettier
```

To use is alternative configuration, replace `"stylelint": { "extends": ["@pplancq/stylelint-config/prettier"] }` to your `package.json`.

## ⚠️ Breaking Change: ESM Only from v5

As of version 5.x, this package is ESM-only. CommonJS (`require`) is no longer supported.

## Migration from CommonJS to ESM

**Old (CommonJS) usage:**

```js
// .stylelintrc.js or stylelint.config.js
module.exports = { extends: ['@pplancq/stylelint-config'] };
```

**New (ESM) usage:**

```js
// stylelint.config.mjs (or stylelint.config.js when using "type": "module")
export default {
  extends: ['@pplancq/stylelint-config'],
};
```

If you are using a `.js` config file, ensure your environment supports ESM (e.g., Node.js >= 18, or set "type": "module" in your package.json).
