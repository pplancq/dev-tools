## @pplancq/webpack-config [1.5.1](https://github.com/pplancq/dev-tools/compare/@pplancq/webpack-config@1.5.0...@pplancq/webpack-config@1.5.1) (2024-10-15)

### Bug Fixes

* **deps:** update babel packages to ^7.25.7 ([a01c8e1](https://github.com/pplancq/dev-tools/commit/a01c8e1a283c3fe6d333e753591b0c633009a3ef))
* **deps:** update babel packages to ^7.25.8 ([58f2185](https://github.com/pplancq/dev-tools/commit/58f2185eaf0babed2b42a50c14de333d96f3c685))
* **deps:** update dependency babel-loader to ^9.2.1 ([4a26eaa](https://github.com/pplancq/dev-tools/commit/4a26eaa1006047ed4e79850f5b44513bff869a70))
* **deps:** update dependency browserslist to ^4.24.0 ([543b80f](https://github.com/pplancq/dev-tools/commit/543b80f7bbcce2cf98ce94c4594e8f6db1b1f89a))
* **deps:** update dependency dotenv to ^16.4.5 ([c1e2234](https://github.com/pplancq/dev-tools/commit/c1e223458c31557493e250f118b4b4e5ac5d0478))
* **deps:** update dependency html-webpack-plugin to ^5.6.0 ([63d24b6](https://github.com/pplancq/dev-tools/commit/63d24b600fae4c559a52b508e82d604628296de8))
* **deps:** update dependency sass to ^1.79.4 ([6027200](https://github.com/pplancq/dev-tools/commit/6027200ede95cb08a29726498657a97167213629))
* **deps:** update dependency sass-loader to ^16.0.2 ([d2b4e3d](https://github.com/pplancq/dev-tools/commit/d2b4e3d50c537e5b997439d4c8b189512c06c42b))
* **deps:** update dependency terser-webpack-plugin to ^5.3.10 ([fc6ac8d](https://github.com/pplancq/dev-tools/commit/fc6ac8de1774d01882a7537d31cee6b0d67e658b))

## @pplancq/webpack-config [1.5.0](https://github.com/pplancq/dev-tools/compare/@pplancq/webpack-config@1.4.1...@pplancq/webpack-config@1.5.0) (2024-08-16)

### Features

* **webpack-config:** add automatic entry point selection for main.js and main.ts in src directory ([bd9b941](https://github.com/pplancq/dev-tools/commit/bd9b9410d3ed6587c3e99d4ebec2310ddeebda19))
* **webpack-config:** bump sass-loaderfrom 14.2.1 to 16.0.0 ([8f4aba0](https://github.com/pplancq/dev-tools/commit/8f4aba08c529487ea1054581cb25100d1190d661))

## @pplancq/webpack-config [1.4.1](https://github.com/pplancq/dev-tools/compare/@pplancq/webpack-config@1.4.0...@pplancq/webpack-config@1.4.1) (2024-05-23)


### Bug Fixes

* **webpack-config:** merge webpack cli --env param with env var ([557c4ca](https://github.com/pplancq/dev-tools/commit/557c4cac86b1c5e01dc49cdbb9358d3e2a016b0e))

## @pplancq/webpack-config [1.4.0](https://github.com/pplancq/dev-tools/compare/@pplancq/webpack-config@1.3.0...@pplancq/webpack-config@1.4.0) (2024-05-06)


### Features

* **dev-tools:** add minimal nodejs versions for each package ([0d8447a](https://github.com/pplancq/dev-tools/commit/0d8447a6f4e26ff9cb28baac8434020156d5dac0))

## @pplancq/webpack-config [1.3.0](https://github.com/pplancq/dev-tools/compare/@pplancq/webpack-config@1.2.0...@pplancq/webpack-config@1.3.0) (2024-05-02)


### Features

* **webpack-config:** add an environment variable to disable source map generation ([61bf247](https://github.com/pplancq/dev-tools/commit/61bf2476cb59a81d23ac8ade2d370adff58a1730))


### Bug Fixes

* **webpack-config:** fix filename for resource to use "type: 'asset/resource'" ([c44b30e](https://github.com/pplancq/dev-tools/commit/c44b30ec72c841ebd043365c1d278919d411d7e8))

## @pplancq/webpack-config [1.2.0](https://github.com/pplancq/dev-tools/compare/@pplancq/webpack-config@1.1.2...@pplancq/webpack-config@1.2.0) (2024-04-22)


### Features

* **webpack-config:** replace file-loader by asset modules ([42edabe](https://github.com/pplancq/dev-tools/commit/42edabeb59494bfdca13ac901062f3f844790347))

## @pplancq/webpack-config [1.1.2](https://github.com/pplancq/dev-tools/compare/@pplancq/webpack-config@1.1.1...@pplancq/webpack-config@1.1.2) (2024-04-16)


### Bug Fixes

* **webpack-config:** fix css-loader namedExport ([b6eb779](https://github.com/pplancq/dev-tools/commit/b6eb77987d85b04c0649f5ace7e086df7fb4c1b7))
* **webpack-config:** remove include src for file and svg loader ([3591cbd](https://github.com/pplancq/dev-tools/commit/3591cbdfac999315d16196c5478765b8a938ebcd))

## @pplancq/webpack-config [1.1.1](https://github.com/pplancq/dev-tools/compare/@pplancq/webpack-config@1.1.0...@pplancq/webpack-config@1.1.1) (2024-03-20)


### Reverts

* **dev-tool:** add package-lock when execute npm postversion ([1e83fe7](https://github.com/pplancq/dev-tools/commit/1e83fe7ee8d2529ce3b85e1abb56968171ee01ff))

## @pplancq/webpack-config [1.1.0](https://github.com/pplancq/dev-tools/compare/@pplancq/webpack-config@1.0.0...@pplancq/webpack-config@1.1.0) (2024-03-12)


### Features

* **webpack-config:** add note about the inclusion of environment variable ([e6e4e31](https://github.com/pplancq/dev-tools/commit/e6e4e310aa1a631a4e6013939c52a025f548b31d))
* **webpack-config:** replace MD5 Hash in Webpack Cache Versioning ([46deffe](https://github.com/pplancq/dev-tools/commit/46deffef3e0276a6db3b8650db1a3a35cb34fe32))
* **webpack-config:** use require.resolve() for loaders in webpack-config ([d80db4c](https://github.com/pplancq/dev-tools/commit/d80db4c42eee254dca334eeffc49d46d262e10cb))


### Bug Fixes

* **webpack-config:** fix build css from node_modules ([3de54a9](https://github.com/pplancq/dev-tools/commit/3de54a97b61b3303eb9c3865028c6c3dfd3b5116))

## @pplancq/webpack-config 1.0.0 (2024-02-05)


### Features

* **webpack-config:** add default config for webpack ([ae8621a](https://github.com/pplancq/dev-tools/commit/ae8621ae1ce8d7414e664e6932f70fa7a7eee0a1))
* **webpack-config:** add script for init webpack config ([9dcd8b6](https://github.com/pplancq/dev-tools/commit/9dcd8b6fc02d4921944acf8d8467f4a2addc1398))
