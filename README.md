# @pplancq/dev-tools

This repository aims to provide tools for developing ReactJS applications.\
A React template is available to facilitate the creation of new React projects, particularly for creating micro front-end applications.

## Motivation

With over 6 years of experience in developing React applications, I have always been on the lookout for tools that could streamline and enhance my workflow. When Facebook discontinued its Create React App project, I began searching for a new starter for my React applications.

However, I couldn't find a starter that met my specific needs. For instance, some, like Vite, didn't provide a testing package and had a very light ESLint configuration, which didn't align with my preferences. Moreover, none of the starters I found offered a folder structure that promotes more structured code writing.

This motivated me to create this project, with several specific objectives in mind:

- Provide ready-to-use configurations for **ESLint**, **Rsbuild**, and **Vitest**.
- Include tools like **Husky** and **lint-staged** to control code quality at each commit.
- Install and preconfigure useful packages like **react-router-dom** and **@tanstack/react-query**.
- Provide a folder structure that encourages more organized and structured code writing.

By achieving these objectives, I hope this React application starter will be a valuable tool for all React developers, whether they are beginners or experienced.

## Package Details

| Package Name                                                                       | Version                                                                                                                                  | Changelog                                                    | Description                          |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------ |
| [`@pplancq/commitlint-config`](./packages/commitlint-config/README.md)             | [![](https://img.shields.io/npm/v/%40pplancq%2Fcommitlint-config)](https://www.npmjs.com/package/@pplancq/commitlint-config)             | [Changelog](./packages/commitlint-config/CHANGELOG.md)       | Commitlint configuration             |
| [`@pplancq/create-react-app`](./packages/create-react-app/README.md)               | [![](https://img.shields.io/npm/v/%40pplancq%2Fcreate-react-app)](https://www.npmjs.com/package/@pplancq/create-react-app)               | [Changelog](./packages/create-react-app/CHANGELOG.md)        | Tool for creating React applications |
| [`@pplancq/eslint-config`](./packages/eslint-config/README.md)                     | [![](https://img.shields.io/npm/v/%40pplancq%2Feslint-config)](https://www.npmjs.com/package/@pplancq/eslint-config)                     | [Changelog](./packages/eslint-config/CHANGELOG.md)           | ESLint configuration                 |
| [`@pplancq/postcss-config`](./packages/postcss-config/README.md)                   | [![](https://img.shields.io/npm/v/%40pplancq%2Fpostcss-config)](https://www.npmjs.com/package/@pplancq/postcss-config)                   | [Changelog](./packages/postcss-config/CHANGELOG.md)          | PostCSS configuration                |
| [`@pplancq/prettier-config`](./packages/prettier-config/README.md)                 | [![](https://img.shields.io/npm/v/%40pplancq%2Fprettier-config)](https://www.npmjs.com/package/@pplancq/prettier-config)                 | [Changelog](./packages/prettier-config/CHANGELOG.md)         | Prettier configuration               |
| [`@pplancq/semantic-release-config`](./packages/semantic-release-config/README.md) | [![](https://img.shields.io/npm/v/%40pplancq%2Fsemantic-release-config)](https://www.npmjs.com/package/@pplancq/semantic-release-config) | [Changelog](./packages/semantic-release-config/CHANGELOG.md) | Semantic Release configuration       |
| [`@pplancq/stylelint-config`](./packages/stylelint-config/README.md)               | [![](https://img.shields.io/npm/v/%40pplancq%2Fstylelint-config)](https://www.npmjs.com/package/@pplancq/stylelint-config)               | [Changelog](./packages/stylelint-config/CHANGELOG.md)        | Stylelint configuration              |
| [`@pplancq/webpack-config`](./packages/webpack-config/README.md)                   | [![](https://img.shields.io/npm/v/%40pplancq%2Fwebpack-config)](https://www.npmjs.com/package/@pplancq/webpack-config)                   | [Changelog](./packages/webpack-config/CHANGELOG.md)          | Webpack configuration                |
| [`@pplancq/react-template`](./packages/react-template/README.md)                   | [![](https://img.shields.io/npm/v/%40pplancq%2Freact-template)](https://www.npmjs.com/package/@pplancq/react-template)                   | [Changelog](./packages/react-template/CHANGELOG.md)          | Template for React applications      |

## How to use

To generate a new React project, simply run the following command:

```shell
npm create @pplancq/react-app@latest <project_name>
```

or

```shell
yarn create @pplancq/react-app@latest <project_name>
```

or

```shell
pnpm create @pplancq/react-app@latest <project_name>
```

Replace <project_name> with the name of your new project.

## @pplancq/react-template

The React template @pplancq/react-template provides all the useful preconfigured packages to start a new React project easily. It also provides a folder structure to facilitate and structure the code.

Unlike Facebook's create-react-app, the Webpack configuration remains easily expandable.

## Provided Packages

- **React**: This is a JavaScript library for creating user interfaces. It contains only the functionality necessary to define React components.
- **React Router DOM**: This is an npm package that allows you to implement dynamic routing in a web application. It allows you to display pages and allow users to navigate them.
- **React Query**: This is a library for managing, caching, and synchronizing asynchronous and remote data in React.
- **React Hook Form**: This is a high-performance, flexible, and extensible library for forms with React Hooks.
- **TypeScript**: This is a language for application-scale JavaScript development. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any operating system.
- **ESLint**: This is a tool for identifying and reporting patterns found in ECMAScript/JavaScript code. ESLint uses Espree for JavaScript syntax parsing. It uses an AST to evaluate patterns in the code.
- **Stylelint**: This is a powerful CSS linter that helps you avoid errors and apply conventions. It has over 100 built-in rules for modern CSS syntax and features.
- **Rsbuild**: Rsbuild is a modern and high-performance bundler for front-end applications, designed to replace Webpack or Vite. It offers simple configuration, fast build times, and excellent compatibility with React projects, making development and optimization easier.
- **Vitest**: This is a next-generation testing framework powered by Vite. It is fast and can be configured to match your Vite application's plugins and configuration.

## License

MIT
