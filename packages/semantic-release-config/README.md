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

| Variable   | Description                                                                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GIT_ASSETS | Allows you to add files to be included in the release commit. To add several files, simply separate them with ','.<br/>Example: GIT_ASSETS=foo.js,bar.md |
