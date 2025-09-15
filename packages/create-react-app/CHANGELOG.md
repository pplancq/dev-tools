## @pplancq/create-react-app [2.0.0](https://github.com/pplancq/dev-tools/compare/@pplancq/create-react-app@1.5.1...@pplancq/create-react-app@2.0.0) (2025-09-15)

### ⚠ BREAKING CHANGES

* **create-react-app:** only npm is supported for project creation, yarn and pnpm are no longer compatible

### Features

* **create-react-app:** add interactive project name prompt with cancellation support ([3f1dba7](https://github.com/pplancq/dev-tools/commit/3f1dba752c7aa49cba9eb1b78671a33f94102d32))
* **react-template:** add option --template to use a custom template ([12c0007](https://github.com/pplancq/dev-tools/commit/12c0007f50d1c49941d5923fa0ee92a681ac6dd5))
* **create-react-app:** add option to skip git initialization during project setup ([6deaef9](https://github.com/pplancq/dev-tools/commit/6deaef958b485f6413067eb0dff111fd0c4c16ea))
* **react-template:** add post-install script check and warning ([851defc](https://github.com/pplancq/dev-tools/commit/851defcd935820a863e2efe8bc22c452710ffac6))
* **create-react-app:** add project name validation to interactive prompt ([8d5ac97](https://github.com/pplancq/dev-tools/commit/8d5ac97a69b1f351ffa54234a3f34c3c4a413451))
* **create-react-app:** add skip dependency installation option to interactive prompt ([3b34c55](https://github.com/pplancq/dev-tools/commit/3b34c55f7800b93bd7159649e79278448012b7da))
* **create-react-app:** argument project name is now optional ([a2eee97](https://github.com/pplancq/dev-tools/commit/a2eee976b7ce3d36b3f29110f7e4071b9e392a0d))
* **create-react-app:** enhance interactive prompt with improved logging and user guidance ([49c51e5](https://github.com/pplancq/dev-tools/commit/49c51e505f66fd49c8d954231be90b0a4e2d066b))
* **create-react-app:** implement spinner feedback for all long-running steps ([6392686](https://github.com/pplancq/dev-tools/commit/6392686dff4d70fa0af25b84facd719f56c2f9a4))
* **create-react-app:** migrate build configuration to rslib and typescript ([75ff896](https://github.com/pplancq/dev-tools/commit/75ff896fe524b469c868e3413338f369c25c0a24))
* **create-react-app:** move in project name validation check existing directories ([cf97c03](https://github.com/pplancq/dev-tools/commit/cf97c03144ed08b4683b06b71a8b5945ad62c8ba))
* **create-react-app:** remove yarn and pnpm compatibility ([74707ff](https://github.com/pplancq/dev-tools/commit/74707ff1afa0f18085353b1da1bbbab7f8f550a7))
* **create-react-app:** replace chalk with picocolors for console output ([2f035f4](https://github.com/pplancq/dev-tools/commit/2f035f45adb424d455a3ead478acdac7c6ab2184))
* **react-template:** run post-install template script ([eefbd6e](https://github.com/pplancq/dev-tools/commit/eefbd6e7430b305d90d2efa01ba794705b3570e2))
* **create-react-app:** update npm install template command to use nested strategy ([55dd48d](https://github.com/pplancq/dev-tools/commit/55dd48d7017cfe98f27e145885b2604cec3ecfdc))

### Bug Fixes

* **create-react-app:** remove node_modules directory after template installation ([37ff28a](https://github.com/pplancq/dev-tools/commit/37ff28a3f64e2c503b84c199a5746d562d478a93))
* **create-react-app:** replace console.error with log.error for better logging ([531dd1d](https://github.com/pplancq/dev-tools/commit/531dd1d0eb58f13030d25226e8b05e50d837e991))
* **create-react-app:** runCommand to use execFileSync for improved security ([79f34ef](https://github.com/pplancq/dev-tools/commit/79f34ef09a5549a9e0de47cf4c0dea9310e399aa))
* **deps:** update dependency chalk to ^5.6.0 ([614fe09](https://github.com/pplancq/dev-tools/commit/614fe0955f6b6e445a79d682860ce69810942667))

## @pplancq/create-react-app [1.5.1](https://github.com/pplancq/dev-tools/compare/@pplancq/create-react-app@1.5.0...@pplancq/create-react-app@1.5.1) (2025-08-11)

### Bug Fixes

* **deps:** update dependency chalk to ^5.5.0 ([f03cb23](https://github.com/pplancq/dev-tools/commit/f03cb23cf86b1255552412bcb1e95bc6499e3ea7))

## @pplancq/create-react-app [1.5.0](https://github.com/pplancq/dev-tools/compare/@pplancq/create-react-app@1.4.6...@pplancq/create-react-app@1.5.0) (2025-06-16)

### Features

* **create-react-app:** remove Vite support and update documentation ([6702c40](https://github.com/pplancq/dev-tools/commit/6702c407da239438e6767b06eaa96aac70645996))

## @pplancq/create-react-app [1.4.6](https://github.com/pplancq/dev-tools/compare/@pplancq/create-react-app@1.4.5...@pplancq/create-react-app@1.4.6) (2025-05-26)

### Bug Fixes

* **deps:** update dependency commander to v14 ([c6f2a57](https://github.com/pplancq/dev-tools/commit/c6f2a5721309220f8ee75eccbdf5bce51d122160))

## @pplancq/create-react-app [1.4.5](https://github.com/pplancq/dev-tools/compare/@pplancq/create-react-app@1.4.4...@pplancq/create-react-app@1.4.5) (2025-04-23)

### Bug Fixes

* **create-react-app:** remove engines field from package.json ([ec33b6b](https://github.com/pplancq/dev-tools/commit/ec33b6b803e6a34f14f7eaedc70485af3249cb9b))

## @pplancq/create-react-app [1.4.4](https://github.com/pplancq/dev-tools/compare/@pplancq/create-react-app@1.4.3...@pplancq/create-react-app@1.4.4) (2025-01-27)

### Bug Fixes

* **deps:** update dependency commander to v13 ([9e94956](https://github.com/pplancq/dev-tools/commit/9e949560000970854e0906dd2c19fe8d86198b00))

## @pplancq/create-react-app [1.4.3](https://github.com/pplancq/dev-tools/compare/@pplancq/create-react-app@1.4.2...@pplancq/create-react-app@1.4.3) (2025-01-06)

### Bug Fixes

* **react-template:** fix postinstall script ([330af19](https://github.com/pplancq/dev-tools/commit/330af1987fc8ab9a8f9b7125ef69da25897ddb07))

## @pplancq/create-react-app [1.4.2](https://github.com/pplancq/dev-tools/compare/@pplancq/create-react-app@1.4.1...@pplancq/create-react-app@1.4.2) (2025-01-06)

### Bug Fixes

* **deps:** update dependency chalk to v5 ([d954398](https://github.com/pplancq/dev-tools/commit/d954398e2b95b5a4edfdad42ff112636902a436b))
* **deps:** update dependency commander to v13 ([0b4a3d6](https://github.com/pplancq/dev-tools/commit/0b4a3d6ff1ce0f9229904776a88db0ec6e514789))

## @pplancq/create-react-app [1.4.1](https://github.com/pplancq/dev-tools/compare/@pplancq/create-react-app@1.4.0...@pplancq/create-react-app@1.4.1) (2024-11-18)

### Bug Fixes

* **create-react-app:** fix change version in package.json ([85cad87](https://github.com/pplancq/dev-tools/commit/85cad879a03490e51a24a09396cae0301a55633f))

## @pplancq/create-react-app [1.4.0](https://github.com/pplancq/dev-tools/compare/@pplancq/create-react-app@1.3.0...@pplancq/create-react-app@1.4.0) (2024-08-27)

### Features

* **eslint-config:** replace eslint-plugin-vitest recommended config with specific rules ([1c8cf9c](https://github.com/pplancq/dev-tools/commit/1c8cf9cce9d6e9df414b73a7cd2a9f7d4019fdcb))

## @pplancq/create-react-app [1.3.0](https://github.com/pplancq/dev-tools/compare/@pplancq/create-react-app@1.2.1...@pplancq/create-react-app@1.3.0) (2024-05-06)


### Features

* **dev-tools:** add minimal nodejs versions for each package ([0d8447a](https://github.com/pplancq/dev-tools/commit/0d8447a6f4e26ff9cb28baac8434020156d5dac0))

## @pplancq/create-react-app [1.2.1](https://github.com/pplancq/dev-tools/compare/@pplancq/create-react-app@1.2.0...@pplancq/create-react-app@1.2.1) (2024-04-16)

## @pplancq/create-react-app [1.2.0](https://github.com/pplancq/dev-tools/compare/@pplancq/create-react-app@1.1.0...@pplancq/create-react-app@1.2.0) (2024-03-18)


### Features

* **create-react-app:** update documentation for create new project ([3af363f](https://github.com/pplancq/dev-tools/commit/3af363f5c3e436fdbf346af3f19a33d4f17cecac))


### Reverts

* **dev-tool:** add package-lock when execute npm postversion ([1e83fe7](https://github.com/pplancq/dev-tools/commit/1e83fe7ee8d2529ce3b85e1abb56968171ee01ff))

## @pplancq/create-react-app [1.1.0](https://github.com/pplancq/dev-tools/compare/@pplancq/create-react-app@1.0.0...@pplancq/create-react-app@1.1.0) (2024-03-12)


### Features

* **create-react-app:** add check to prevent command injection ([65de337](https://github.com/pplancq/dev-tools/commit/65de33787a4a6eed7588234be6bae1ace5503fb4))
* **create-react-app:** add option to use vite on new project ([337a6f1](https://github.com/pplancq/dev-tools/commit/337a6f191db3c6aa474e6f9904d22b53ccb58577))
* **create-react-app:** add remove CHANGELOG.md during create new project ([27d8e7b](https://github.com/pplancq/dev-tools/commit/27d8e7bd246664ec372dd34cedebff274031341b))
* **create-react-app:** add support for yarn and pnpm ([eafc39d](https://github.com/pplancq/dev-tools/commit/eafc39d972b178ca21ed307166a9ba394161803f))
* **react-template:** update readme ([3aa2543](https://github.com/pplancq/dev-tools/commit/3aa2543948a697f6604f4984884184d3f285d297))

## @pplancq/create-react-app 1.0.0 (2024-02-05)


### Features

* **create-react-app:** add create-react-app script ([6ac21f7](https://github.com/pplancq/dev-tools/commit/6ac21f7e8148822a31b61fb618a5dfccedf20a3c))
