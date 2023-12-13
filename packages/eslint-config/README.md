# @pplancq/eslint-config

This package provides pplancq eslint as an extensible shared config.

## Usage

We export three eslint configurations for your usage.

## Install

```shell
npm install --save-dev @pplancq/eslint-config
```

## eslint config

Use with command to enable the default configuration.

```shell
npx init-eslint-config
```

### @pplancq/eslint-config/react

To use, add `"eslintConfig": { "extends": ["@pplancq/eslint-config/react"] }` to your `package.json`.\
This configuration enables the rules of base, typescript, prettier, react and testing-library files.

### @pplancq/eslint-config/node

To use, add `"eslintConfig": { "extends": ["@pplancq/eslint-config/node"] }` to your `package.json`.\
This configuration enables the rules of base, typescript and prettier files.

### @pplancq/eslint-config/vitest

To use, add `"eslintConfig": { "extends": ["@pplancq/eslint-config/vitest"] }` to your `package.json`.\
This configuration enables the rules of vitest file.

### @pplancq/eslint-config/jest

To use, add `"eslintConfig": { "extends": ["@pplancq/eslint-config/jest"] }` to your `package.json`.\
This configuration enables the rules of jest file.
