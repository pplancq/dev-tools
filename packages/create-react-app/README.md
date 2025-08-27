# @pplancq/create-react-app

## 🚀 Introduction

`@pplancq/create-react-app` is a CLI tool designed to help you quickly start a new React application using the [@pplancq/react-template](https://www.npmjs.com/package/@pplancq/react-template). It streamlines the setup process so you can focus on building your app, not on boilerplate.

## 🏁 Quick Start

To create a new React project, run:

```shell
npm create @pplancq/react-app@latest
```

or

```shell
npx @pplancq/create-react-app@latest
```

## 🖥️ Command Line Usage

You can use the starter via the command line to quickly scaffold a new React project with your preferred options.

To display the help menu with all available options:

```shell
npm create @pplancq/react-app -- --help
```

**Usage:**

```
create-react-app [options] [project-name]
```

**Arguments:**

- `[project-name]`  
  The name of your new project directory (optional).

**Options:**

- `--skip-dep-install`  
  Skip installing dependencies (`npm install`).
- `-v, --version`  
  Show the version of the starter.

**Examples:**

- Create a project named `my-project`:
  ```shell
  npm create @pplancq/react-app my-project
  ```
- Use `npx` to create a project and skip dependency installation:
  ```shell
  npx @pplancq/create-react-app --skip-dep-install my-project
  ```

After running the command, follow the interactive prompts if you did not specify all arguments or options.

## 📦 Template

This package uses the [`@pplancq/react-template`](https://www.npmjs.com/package/@pplancq/react-template) to generate a new React project. For more information about this template, please consult its documentation.

## 🧪 How to test locally

To test the starter locally before publishing:

1. In the repository folder, link the package:

   ```shell
   npm link
   npm run start
   ```

2. In another working directory, link and use the starter:

   ```shell
   npm link @pplancq/react-app
   npm create @pplancq/react-app
   ```

3. Once finished, unlink:
   ```shell
   npm unlink @pplancq/react-app
   ```
   And in the repository folder:
   ```shell
   npm unlink
   ```

## 📄 License

This project is under the MIT license.
