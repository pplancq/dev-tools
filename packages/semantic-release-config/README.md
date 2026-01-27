# @pplancq/semantic-release-config

This package provides pplancq semantic-release as an extensible shared config.

## Usage

We export three semantic-release configurations for your usage.

## Install

```shell
npm install --save-dev @pplancq/semantic-release-config
```

## semantic-release config

Use with command to enable the default configuration.

```shell
npx init-semantic-release-config
```

### @pplancq/semantic-release-config

This is the default configuration. To use, add `"release": { "extends": ["@pplancq/semantic-release-config"] }` to your `package.json`.

## Git environment variables

| Variable                        | Description                                                                                                                                              |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GIT_ASSETS                      | Allows you to add files to be included in the release commit. To add several files, simply separate them with ','.<br/>Example: GIT_ASSETS=foo.js,bar.md |
| GITHUB_DISABLED_SUCCESS_COMMENT | Set to 'true' to disable commenting on issues and pull requests                                                                                          |
| GITHUB_DISABLED_RELEASED_LABELS | Set to 'true' to not add any label.                                                                                                                      |

## ⚠️ Breaking Change: ESM Only from v3

As of version 3.x, this package is ESM-only. CommonJS (`require`) is no longer supported.

## Migration from CommonJS to ESM

**Old (CommonJS) usage:**

```js
// .releaserc.js or release.config.js
module.exports = { extends: ['@pplancq/semantic-release-config'] };
```

**New (ESM) usage:**

```js
// release.config.mjs (or release.config.js when using "type": "module")
import defaultConfig from '@pplancq/semantic-release-config';

export default {
  ...defaultConfig,
};
```

If you are using a `.js` config file, ensure your environment supports ESM (e.g., Node.js >= 18, or set "type": "module" in your package.json).
