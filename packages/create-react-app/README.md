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

- `-t, --template <template>`  
  Specify a template to use (default: `@pplancq/react-template`).
- `--skip-dep-install`  
  Skip installing dependencies (`npm install`).
- `--skip-git-init`  
  Skip initializing a git repository.
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

By default, this package uses the [`@pplancq/react-template`](https://www.npmjs.com/package/@pplancq/react-template) to generate a new React project. For more information about this template, please consult its documentation.

### Using Custom Templates

You can use custom templates by specifying the `--template` option with any template published on the npm registry:

```shell
npm create @pplancq/react-app my-project -- --template my-custom-template
```

#### Custom Template Requirements

To create a custom template that works with this tool:

1. **Publish on npm registry**: Your custom template must be published as an npm package and available for installation via `npm install`.

2. **Optional post-install script**: If your template requires specific configuration or setup, you can provide a post-install script by adding the following to your template's `package.json`:

```json5
// package.json
{
  bin: {
    'template-install': 'bin/template-install.js',
  },
}
```

The post-install script will be executed automatically after the template installation using:

```shell
npx template-install projectName
```

The script will receive the project name as a parameter, allowing you to perform any template-specific configuration or setup tasks.

**Important**: The post-install script must be autonomous and not depend on external libraries, as they may not be installed during the template setup process. If your script requires external dependencies, you must provide a built/bundled version of the script that includes all necessary dependencies.

## 🧪 How to test locally

To test the starter locally before publishing:

1. In the repository folder, link the package:

   ```shell
   npm link
   npm run start
   ```

2. In another working directory, link and use the starter:

   ```shell
   npm link @pplancq/create-react-app
   npm create @pplancq/create-react-app
   ```

3. Once finished, unlink:
   ```shell
   npm unlink @pplancq/create-react-app
   ```
   And in the repository folder:
   ```shell
   npm unlink
   ```

## 📄 License

This project is under the MIT license.
