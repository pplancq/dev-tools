## @pplancq/stylelint-config [3.0.0](https://github.com/pplancq/dev-tools/compare/@pplancq/stylelint-config@2.1.1...@pplancq/stylelint-config@3.0.0) (2025-01-20)

### ⚠ BREAKING CHANGES

* **stylelint-config:** Bumps stylelint ^16.2.1 to ^16.13.0 the minimum requirements

### Bug Fixes

* **stylelint-config:** bump stylelint from 16.2.1 to 16.13.0 ([d50f38b](https://github.com/pplancq/dev-tools/commit/d50f38bea6b37a887256e185abcbce4e5d5f831c))
* **deps:** update dependency stylelint-config-standard to v37 ([c293137](https://github.com/pplancq/dev-tools/commit/c2931370cd098ebe7576c8a331510f585db8d32c))

## @pplancq/stylelint-config [2.1.1](https://github.com/pplancq/dev-tools/compare/@pplancq/stylelint-config@2.1.0...@pplancq/stylelint-config@2.1.1) (2024-10-15)

### Bug Fixes

* **deps:** update dependency stylelint-config-pretty-order to ^0.7.0 ([875ebd7](https://github.com/pplancq/dev-tools/commit/875ebd731b4393601653f303c4255441254dc04e))

## @pplancq/stylelint-config [2.1.0](https://github.com/pplancq/dev-tools/compare/@pplancq/stylelint-config@2.0.2...@pplancq/stylelint-config@2.1.0) (2024-05-06)


### Features

* **dev-tools:** add minimal nodejs versions for each package ([0d8447a](https://github.com/pplancq/dev-tools/commit/0d8447a6f4e26ff9cb28baac8434020156d5dac0))

## @pplancq/stylelint-config [2.0.2](https://github.com/pplancq/dev-tools/compare/@pplancq/stylelint-config@2.0.1...@pplancq/stylelint-config@2.0.2) (2024-04-16)

## @pplancq/stylelint-config [2.0.1](https://github.com/pplancq/dev-tools/compare/@pplancq/stylelint-config@2.0.0...@pplancq/stylelint-config@2.0.1) (2024-03-20)


### Reverts

* **dev-tool:** add package-lock when execute npm postversion ([1e83fe7](https://github.com/pplancq/dev-tools/commit/1e83fe7ee8d2529ce3b85e1abb56968171ee01ff))

## @pplancq/stylelint-config [2.0.0](https://github.com/pplancq/dev-tools/compare/@pplancq/stylelint-config@1.0.0...@pplancq/stylelint-config@2.0.0) (2024-03-12)


### ⚠ BREAKING CHANGES

* **stylelint-config:** The default configuration no longer supports the stylelint-prettier plugin.\
You must now install prettier and stylelint-prettier separately and use the alternative configuration.\
To use is alternative configuration, replace `"stylelint": { "extends": ["@pplancq/stylelint-config/prettier"] }` to your `package.json`.

### Features

* **stylelint-config:** prettier made fully optional ([984aa69](https://github.com/pplancq/dev-tools/commit/984aa694f0fe41a5293196ca90c640bba83596ec))

## @pplancq/stylelint-config 1.0.0 (2024-02-05)


### Features

* **stylelint-config:** add base css config front standard css ([95e639a](https://github.com/pplancq/dev-tools/commit/95e639aa8776dc2748be58ffb95a0089a6199f76))
* **stylelint-config:** add base scss config front standard scss ([4cde47a](https://github.com/pplancq/dev-tools/commit/4cde47a247531855594947728b9c636dbc79a036))
* **stylelint-config:** add plugin prettier rule ([54aa699](https://github.com/pplancq/dev-tools/commit/54aa6998b44656eeadb2b29e2e03af299a6ffe54))
* **stylelint-config:** add script for init stylelint ([e1e3f96](https://github.com/pplancq/dev-tools/commit/e1e3f961d781c26ea14e6afb32ac3bca38a80abf))
