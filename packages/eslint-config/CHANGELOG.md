## @pplancq/eslint-config [2.1.0](https://github.com/pplancq/dev-tools/compare/@pplancq/eslint-config@2.0.1...@pplancq/eslint-config@2.1.0) (2024-03-23)


### Features

* **eslint-config:** steps suffix added for test-related overrides ([937fe16](https://github.com/pplancq/dev-tools/commit/937fe16867d435c816f8f395cdd58be3a3f103c8))

## @pplancq/eslint-config [2.0.1](https://github.com/pplancq/dev-tools/compare/@pplancq/eslint-config@2.0.0...@pplancq/eslint-config@2.0.1) (2024-03-20)


### Reverts

* **dev-tool:** add package-lock when execute npm postversion ([1e83fe7](https://github.com/pplancq/dev-tools/commit/1e83fe7ee8d2529ce3b85e1abb56968171ee01ff))

## @pplancq/eslint-config [2.0.0](https://github.com/pplancq/dev-tools/compare/@pplancq/eslint-config@1.0.0...@pplancq/eslint-config@2.0.0) (2024-03-12)


### ⚠ BREAKING CHANGES

* **eslint-config:** The default configuration no longer supports the eslint-plugin-prettier plugin.\
You must now install prettier and eslint-plugin-prettier separately and use the alternative configuration.\
Use prettier configuration, add `"eslintConfig": { "extends": ["@pplancq/eslint-config/prettier"] }` to your `package.json`.
* **eslint-config:** Bumps ESLint ^8.55.0 to ^8.57.0 the minimum requirements
* **eslint-config:** Bumps Prettier ^3.1.1 to ^3.2.5 the minimum requirements

### Features

* **eslint-config:** bump ESLint and Prettier minimum version requirements ([24f920f](https://github.com/pplancq/dev-tools/commit/24f920ff481b05b2c64541e54242adb5f598beb2))
* **eslint-config:** prettier made fully optional ([dff82e3](https://github.com/pplancq/dev-tools/commit/dff82e30a738a65c762e77cc49de8bca15981d08))

## @pplancq/eslint-config 1.0.0 (2024-02-05)


### Features

* **eslint-config:** add base rule for react with jsx-a11y ans testing-library for test ([c70823a](https://github.com/pplancq/dev-tools/commit/c70823a1b457612f744df055d67ef690531c43f9))
* **eslint-config:** add eslint base config for js ([aca46cb](https://github.com/pplancq/dev-tools/commit/aca46cb451343a76a08d3e34d299f7caff75d004))
* **eslint-config:** add eslint base config for ts ([22846cb](https://github.com/pplancq/dev-tools/commit/22846cbd2178304f31e80ae3677b727091f390db))
* **eslint-config:** add plugin prettier rule ([2c2d3a0](https://github.com/pplancq/dev-tools/commit/2c2d3a02a12a128b805b24a19eea47377c006727))
* **eslint-config:** add rule for jest and vitest ([714f323](https://github.com/pplancq/dev-tools/commit/714f323161ab9b7a982207506064fe3a2a676748))
* **eslint-config:** add script for init eslint config ([56ccc72](https://github.com/pplancq/dev-tools/commit/56ccc72f9f0388aa786e5e92b78d16ee4b1b6279))
