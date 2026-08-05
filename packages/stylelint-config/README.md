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

> ⚠️ **Deprecated:** `@pplancq/stylelint-config/prettier` is deprecated and will be removed in the next major release. Stylelint no longer handles formatting; use the default `@pplancq/stylelint-config` configuration and run Prettier separately for formatting.

if you use prettier to format your css files, this package provides an alternative configuration that takes prettier directly into account.
To do this, install the following additional packages:

```shell
npm install --save-dev prettier stylelint-prettier
```

To use is alternative configuration, replace `"stylelint": { "extends": ["@pplancq/stylelint-config/prettier"] }` to your `package.json`.

## Configuration details

This shared config extends and combines the following community configurations and custom rules.

### Base configs

- [`stylelint-config-standard-scss`](https://github.com/stylelint-scss/stylelint-config-standard-scss) – Standard CSS/SCSS rules from Stylelint.
- [`stylelint-config-recess-order`](https://github.com/stormwarning/stylelint-config-recess-order) – Opinionated property ordering based on the RECESS convention.

### Naming conventions

The config enforces consistent naming across CSS, SCSS and CSS modules.

#### Standard class selectors — BEM

For regular `.css` and `.scss` files, class selectors must follow BEM:

```text
block
block-name
block__element
block__element-name
block--modifier
block--modifier-name
block__element--modifier
```

Examples of valid selectors: `.button`, `.button--primary`, `.button__icon`.
Invalid examples: `.Button`, `.button__element__subelement`, `.button--Primary`.

#### CSS Modules class selectors — camelCase

For `*.module.css` and `*.module.scss` files, class selectors must be camelCase:

```text
.button
.primaryButton
.buttonPrimary
```

This convention aligns with JavaScript imports of CSS Modules.

#### SCSS identifiers — camelCase

The following SCSS identifiers must be camelCase:

- Variables (`$myVariable`)
- Mixins (`@mixin myMixin`)
- Functions (`@function myFunction`)
- Placeholders (`%myPlaceholder`)

#### CSS Modules pseudo-class

`:global(...)` is allowed in CSS Modules files to escape module scoping.

### Auto-fix support

Most issues reported by this config can be fixed automatically:

```shell
npx stylelint "**/*.{css,scss}" --fix
```

However, **class selector naming cannot be auto-fixed**:

- Standard files must be renamed to BEM manually.
- CSS Module files must be renamed to camelCase manually.

## Migration from v5 to v6

Version 6 is a major refactor of the shared config. The main changes are:

### 1. Base SCSS config replaced

The previous combination of `stylelint-config-standard` + `stylelint-config-recommended-scss` has been replaced by a single `stylelint-config-standard-scss` dependency.

### 2. Local property order replaced

The 400+ line local ordering file has been removed in favor of `stylelint-config-recess-order`.
Property order rules are now maintained by the community package.

### 3. Class selector naming now enforced

Class selectors in standard `.css`/`.scss` files must follow BEM.
In CSS Modules files (`*.module.css`, `*.module.scss`) class selectors must be camelCase.
This is the main manual migration work.

### 4. SCSS identifiers now camelCase

Variables, mixins, functions and placeholders in SCSS must now be camelCase.

### Migration steps

1. Upgrade the package:

   ```shell
   npm install --save-dev @pplancq/stylelint-config@^6.0.0
   ```

2. Run the automatic fix:

   ```shell
   npx stylelint "**/*.{css,scss}" --fix
   ```

3. Manually review and fix any remaining `selector-class-pattern` errors.
   - Standard files: rename classes to BEM.
   - CSS Module files: rename classes to camelCase.

## ⚠️ Breaking Change: ESM Only from v5

As of version 5.x, this package is ESM-only. CommonJS (`require`) is no longer supported.

## Migration from CommonJS to ESM

**Old (CommonJS) usage:**

```js
// .stylelintrc.js or stylelint.config.js
module.exports = { extends: ["@pplancq/stylelint-config"] };
```

**New (ESM) usage:**

```js
// stylelint.config.mjs (or stylelint.config.js when using "type": "module")
export default {
  extends: ["@pplancq/stylelint-config"],
};
```

If you are using a `.js` config file, ensure your environment supports ESM (e.g., Node.js >= 18, or set "type": "module" in your package.json).
