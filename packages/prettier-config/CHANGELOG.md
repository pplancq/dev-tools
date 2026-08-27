## 4.0.2 (2026-08-27)

### 📦 Dependencies

- Updated @pplancq/eslint-config to 6.1.1

## 4.0.1 (2026-08-14)

### 📦 Dependencies

- Updated @pplancq/eslint-config to 6.1.0

# 4.0.0 (2026-08-03)

### 🎉 Features

- ⚠️  **prettier-config:** bump minimum prettier peer dependency to 3.9.6 ([84807d8](https://github.com/pplancq/dev-tools/commit/84807d8))
- ⚠️  **prettier-config:** use Prettier default arrow parentheses ([9b2be04](https://github.com/pplancq/dev-tools/commit/9b2be04))
- ⚠️  **prettier-config:** switch to Prettier default double quotes ([027f9a7](https://github.com/pplancq/dev-tools/commit/027f9a7))
- **prettier-config:** add additional Dockerfile patterns for formatting ([c1725e4](https://github.com/pplancq/dev-tools/commit/c1725e4))
- **prettier-config:** remove nginx plugin and clean configuration ([fdfd2c3](https://github.com/pplancq/dev-tools/commit/fdfd2c3))

### ♻️ Code Refactoring

- **dev-tools:** update quotes to double quotes for consistency ([6b2d557](https://github.com/pplancq/dev-tools/commit/6b2d557))

### 📚 Documentation

- **prettier-config:** update README for migration from v3 to v4 ([1e8f0f5](https://github.com/pplancq/dev-tools/commit/1e8f0f5))

### ⚠️  Breaking Changes

- **prettier-config:** bump minimum prettier peer dependency to 3.9.6  ([84807d8](https://github.com/pplancq/dev-tools/commit/84807d8))
  the package now requires prettier >= 3.9.6
- **prettier-config:** use Prettier default arrow parentheses  ([9b2be04](https://github.com/pplancq/dev-tools/commit/9b2be04))
  consumers upgrading to this version will see arrow functions with a single argument reformatted with parentheses.
- **prettier-config:** switch to Prettier default double quotes  ([027f9a7](https://github.com/pplancq/dev-tools/commit/027f9a7))
  consumers upgrading to this version will see their strings reformatted from single to double quotes.

### 📦 Dependencies

- Updated @pplancq/eslint-config to 6.0.19

### ❤️ Thank You

- Paul PLANCQ

## 3.0.1 (2026-07-28)

### 📦 Dependencies

- **deps:** update dependency prettier-plugin-sh to ^0.19.0 ([#1812](https://github.com/pplancq/dev-tools/pull/1812))

## @pplancq/prettier-config [3.0.0](https://github.com/pplancq/dev-tools/compare/@pplancq/prettier-config@2.0.2...@pplancq/prettier-config@3.0.0) (2026-05-19)

### ⚠ BREAKING CHANGES

* **prettier-config:** End of support for Node versions < 20.9.0.

### Features

* **prettier-config:** update Node engine requirement to >= 20.9.0 ([844ab9b](https://github.com/pplancq/dev-tools/commit/844ab9be24a366c386c3419b9f3a7b44f5df3ae1))

### Bug Fixes

* **deps:** update dependency prettier-plugin-gherkin to v4 ([522f9b2](https://github.com/pplancq/dev-tools/commit/522f9b22abb94b0f69692faa85e92d39f67b2f5c))

## @pplancq/prettier-config [2.0.2](https://github.com/pplancq/dev-tools/compare/@pplancq/prettier-config@2.0.1...@pplancq/prettier-config@2.0.2) (2026-05-12)

### Bug Fixes

* **deps:** update dependency prettier-plugin-gherkin to ^3.1.4 ([#1720](https://github.com/pplancq/dev-tools/issues/1720)) ([040ae4a](https://github.com/pplancq/dev-tools/commit/040ae4adc3061e1a8f9ec58b4e5e089af01225fa))

## @pplancq/prettier-config [2.0.1](https://github.com/pplancq/dev-tools/compare/@pplancq/prettier-config@2.0.0...@pplancq/prettier-config@2.0.1) (2026-04-13)

### Bug Fixes

* **deps:** update dependency prettier-plugin-sh to ^0.18.1 ([#1655](https://github.com/pplancq/dev-tools/issues/1655)) ([d7a22ce](https://github.com/pplancq/dev-tools/commit/d7a22ce5eb3e1a20710b676de12db0bbaccb5067))

## @pplancq/prettier-config [2.0.0](https://github.com/pplancq/dev-tools/compare/@pplancq/prettier-config@1.2.9...@pplancq/prettier-config@2.0.0) (2026-01-29)

### ⚠ BREAKING CHANGES

* **prettier-config:** Drop CommonJS support. See the [README](https://github.com/pplancq/dev-tools/blob/main/packages/prettier-config/README.md) for migration instructions.

### Features

* **prettier-config:** migrate to ESM and update configuration files ([616a0c0](https://github.com/pplancq/dev-tools/commit/616a0c0103222ba01e07479f29532fae6827d616))

## @pplancq/prettier-config [1.2.9](https://github.com/pplancq/dev-tools/compare/@pplancq/prettier-config@1.2.8...@pplancq/prettier-config@1.2.9) (2026-01-05)

### Bug Fixes

* **deps:** update dependency prettier-plugin-properties to ^0.3.1 ([e85a6b3](https://github.com/pplancq/dev-tools/commit/e85a6b33d419a8f98bacb1b406becd5575d23a38))

## @pplancq/prettier-config [1.2.8](https://github.com/pplancq/dev-tools/compare/@pplancq/prettier-config@1.2.7...@pplancq/prettier-config@1.2.8) (2025-10-20)

### Bug Fixes

* **deps:** update dependency prettier-plugin-gherkin to ^3.1.3 ([992ff7b](https://github.com/pplancq/dev-tools/commit/992ff7b59f05be0b25cc9f9591e7c4491ff87bac))

## @pplancq/prettier-config [1.2.7](https://github.com/pplancq/dev-tools/compare/@pplancq/prettier-config@1.2.6...@pplancq/prettier-config@1.2.7) (2025-06-30)

### Bug Fixes

* **deps:** update dependency prettier-plugin-sh to ^0.18.0 ([4613e05](https://github.com/pplancq/dev-tools/commit/4613e0594d1214c0930c397a0d65e2ea04d93954))

## @pplancq/prettier-config [1.2.6](https://github.com/pplancq/dev-tools/compare/@pplancq/prettier-config@1.2.5...@pplancq/prettier-config@1.2.6) (2025-05-19)

### Bug Fixes

* **deps:** update dependency prettier-plugin-sh to ^0.17.4 ([6576bc8](https://github.com/pplancq/dev-tools/commit/6576bc869480901c5ae91a862b4f91dcd54cd225))

## @pplancq/prettier-config [1.2.5](https://github.com/pplancq/dev-tools/compare/@pplancq/prettier-config@1.2.4...@pplancq/prettier-config@1.2.5) (2025-05-13)

### Bug Fixes

* **deps:** update dependency prettier-plugin-sh to ^0.17.3 ([19f95d7](https://github.com/pplancq/dev-tools/commit/19f95d748c545baf43b1a8d8482fddc8bffa97f6))

## @pplancq/prettier-config [1.2.4](https://github.com/pplancq/dev-tools/compare/@pplancq/prettier-config@1.2.3...@pplancq/prettier-config@1.2.4) (2025-04-14)

### Bug Fixes

* **deps:** update dependency prettier-plugin-sh to ^0.17.2 ([a5f1006](https://github.com/pplancq/dev-tools/commit/a5f10060867d6d63ee38f997a668756882fd31b1))

## @pplancq/prettier-config [1.2.3](https://github.com/pplancq/dev-tools/compare/@pplancq/prettier-config@1.2.2...@pplancq/prettier-config@1.2.3) (2025-03-17)

### Bug Fixes

* **deps:** update dependency prettier-plugin-gherkin to ^3.1.2 ([600e6e4](https://github.com/pplancq/dev-tools/commit/600e6e405e585919edc76356bf7a4908ca5ddd50))

## @pplancq/prettier-config [1.2.2](https://github.com/pplancq/dev-tools/compare/@pplancq/prettier-config@1.2.1...@pplancq/prettier-config@1.2.2) (2025-02-24)

### Bug Fixes

* **deps:** update dependency prettier-plugin-sh to ^0.15.0 ([26500ee](https://github.com/pplancq/dev-tools/commit/26500eeb80a7adf02dcb9eaa94c3c1dcb4f0e950))

## @pplancq/prettier-config [1.2.1](https://github.com/pplancq/dev-tools/compare/@pplancq/prettier-config@1.2.0...@pplancq/prettier-config@1.2.1) (2024-12-16)

### Bug Fixes

* **deps:** update dependency prettier-plugin-gherkin to ^3.1.1 ([f02543c](https://github.com/pplancq/dev-tools/commit/f02543c2927283278567305bcaf3709ee7a270ee))

## @pplancq/prettier-config [1.2.0](https://github.com/pplancq/dev-tools/compare/@pplancq/prettier-config@1.1.0...@pplancq/prettier-config@1.2.0) (2024-08-19)

### Features

* **prettier-config:** add plugin for gherkin, nginx and properties files ([037c908](https://github.com/pplancq/dev-tools/commit/037c9081ca212979a3c053ce8c84ea18da016756))

## @pplancq/prettier-config [1.1.0](https://github.com/pplancq/dev-tools/compare/@pplancq/prettier-config@1.0.2...@pplancq/prettier-config@1.1.0) (2024-05-06)


### Features

* **dev-tools:** add minimal nodejs versions for each package ([0d8447a](https://github.com/pplancq/dev-tools/commit/0d8447a6f4e26ff9cb28baac8434020156d5dac0))

## @pplancq/prettier-config [1.0.2](https://github.com/pplancq/dev-tools/compare/@pplancq/prettier-config@1.0.1...@pplancq/prettier-config@1.0.2) (2024-04-16)

## @pplancq/prettier-config [1.0.1](https://github.com/pplancq/dev-tools/compare/@pplancq/prettier-config@1.0.0...@pplancq/prettier-config@1.0.1) (2024-03-20)


### Reverts

* **dev-tool:** add package-lock when execute npm postversion ([1e83fe7](https://github.com/pplancq/dev-tools/commit/1e83fe7ee8d2529ce3b85e1abb56968171ee01ff))

## @pplancq/prettier-config 1.0.0 (2024-02-05)


### Features

* **prettier-config:** add default prettier config ([20b0651](https://github.com/pplancq/dev-tools/commit/20b0651a9cde368afa09fe5c4871a3eea1bcf8ec))
* **prettier-config:** add prettier rule for Dockerfile ([fb33607](https://github.com/pplancq/dev-tools/commit/fb33607e4a11119a79142d3cebb3da54bac5530d))
* **prettier-config:** add script for init prettier config ([b1e2fa4](https://github.com/pplancq/dev-tools/commit/b1e2fa4e9110950c762634e2d1bf3f8e1b18a68e))
