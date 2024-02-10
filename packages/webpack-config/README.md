# @pplancq/webpack-config

This package provides pplancq webpack as an extensible shared config.

## Usage

We export three stylelint configurations for your usage.

## Install

```shell
npm install --save-dev @pplancq/webpack-config
```

## webpack config

Use with command to enable the default configuration.

```shell
npx init-webpack-config
```

## Usage

Entrypoint file is `src/main.ts`\
Template html is `public/index.html`

## Caution with Environment Variables

The webpack configuration of this project allows for environment variables to be included in the application bundle. This could potentially expose sensitive information if the bundle is publicly accessible.

It is recommended to only include non-sensitive environment variables in the application bundle. Sensitive information should not be exposed even if the bundle is publicly accessible.

Ensure you understand the security implications before including environment variables in your bundle.

Please note that the web configuration pre-filters environment variables via the default prefix ‘FRONT*’. This means that only environment variables starting with ‘FRONT*’ will be included in the bundle. This is an additional layer of security to prevent the accidental exposure of sensitive environment variables.
