## @pplancq/eslint-config [3.0.0](https://github.com/pplancq/dev-tools/compare/@pplancq/eslint-config@2.3.0...@pplancq/eslint-config@3.0.0) (2024-09-16)

### ⚠ BREAKING CHANGES

* **eslint-config:** Node.js engine requirement to >=18.18.0 or >=20.9.0 or >=21.1.0

### Features

* **eslint-config:** bump @typescript-eslint/eslint-plugin and @typescript-eslint/parser 7.17.0 to 8.3.0 ([61beba7](https://github.com/pplancq/dev-tools/commit/61beba79c480f2fd5dce39559b301194b8b6efa5))
* **eslint-config:** bump eslint-plugin-vitest 0.5.4 to @vitest/eslint-plugin 1.1.4 ([9a1af23](https://github.com/pplancq/dev-tools/commit/9a1af239bdcf249bec444ce757babf478fdbd900))
* **eslint-config:** update Node.js engine requirement to >=18.18.0 or >=20.9.0 or >=21.1.0 ([4239b0d](https://github.com/pplancq/dev-tools/commit/4239b0dd419c8eb1cfbd9ad881ed64c9dd56894a))

## @pplancq/eslint-config [2.3.0](https://github.com/pplancq/dev-tools/compare/@pplancq/eslint-config@2.2.0...@pplancq/eslint-config@2.3.0) (2024-08-27)

### Features

* **eslint-config:** replace @typescript-eslint/eslint-plugin recommended config with specific rules ([fc781a5](https://github.com/pplancq/dev-tools/commit/fc781a5dcc5495b66242da60f8b16ec8292ed037))
* **eslint-config:** replace eslint-config-airbnb config with specific rules ([113d046](https://github.com/pplancq/dev-tools/commit/113d046f93173f29348eed8fa988f7671490dceb))
* **eslint-config:** replace eslint-plugin-import recommended config with specific rules ([f425c62](https://github.com/pplancq/dev-tools/commit/f425c62338990cebbaf0a5e2198731de39d3883a))
* **eslint-config:** replace eslint-plugin-jest and eslint-plugin-jest-extended recommended config with specific rules ([a1c0705](https://github.com/pplancq/dev-tools/commit/a1c0705a641614c915e0629121f62a93d82408fb))
* **eslint-config:** replace eslint-plugin-jest-dom recommended config with specific rules ([8ec4083](https://github.com/pplancq/dev-tools/commit/8ec4083d6791d17e746bb916c97ae45fc4692e6e))
* **eslint-config:** replace eslint-plugin-jsx-a11y recommended config with specific rules ([19f1994](https://github.com/pplancq/dev-tools/commit/19f1994e1be4d41ab6cca98c28824595c4e8e45e))
* **eslint-config:** replace eslint-plugin-prettier recommended config with specific rules and remove eslint-config-prettier ([46e36f3](https://github.com/pplancq/dev-tools/commit/46e36f3cc2e21d3c5885943c91aeac38f4014654))
* **eslint-config:** replace eslint-plugin-react recommended config with specific rules ([ef29e01](https://github.com/pplancq/dev-tools/commit/ef29e0177793b8391e65f8df15424b9cd977bec3))
* **eslint-config:** replace eslint-plugin-react-hooks recommended config with specific rules ([237905e](https://github.com/pplancq/dev-tools/commit/237905e364a155e3ccc9581fa38c266bc8d4ce57))
* **eslint-config:** replace eslint-plugin-testing-library recommended config with specific rules ([160e7bc](https://github.com/pplancq/dev-tools/commit/160e7bc6443aa5d25361065874e32803ffd236ec))
* **eslint-config:** replace eslint-plugin-vitest recommended config with specific rules ([1c8cf9c](https://github.com/pplancq/dev-tools/commit/1c8cf9cce9d6e9df414b73a7cd2a9f7d4019fdcb))

## @pplancq/eslint-config [2.2.0](https://github.com/pplancq/dev-tools/compare/@pplancq/eslint-config@2.1.1...@pplancq/eslint-config@2.2.0) (2024-05-06)


### Features

* **dev-tools:** add minimal nodejs versions for each package ([0d8447a](https://github.com/pplancq/dev-tools/commit/0d8447a6f4e26ff9cb28baac8434020156d5dac0))

## @pplancq/eslint-config [2.1.1](https://github.com/pplancq/dev-tools/compare/@pplancq/eslint-config@2.1.0...@pplancq/eslint-config@2.1.1) (2024-04-16)

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
