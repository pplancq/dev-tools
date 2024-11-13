# @pplancq/webpack-config

This package has been designed to provide a simplified and customisable Webpack configuration for React applications.
Whether you're a beginner or an experienced developer, this package will allow you to configure your development environment quickly and efficiently,
while giving you the flexibility to tailor the configuration to your specific needs.

## Getting Started

### Prerequisites

- node 18.12.0 or higher

### Install

```shell
npm install --save-dev @pplancq/webpack-config webpack webpack-cli webpack-dev-server
```

### Usage

To enable the default configuration, use the following command

```shell
npx init-webpack-config
```

Add an entry point file `src/main.ts` or `src/main.js` and a template HTML file in `public/index.html`.

### Commands

- Starts the development server

```shell
npm run start
```

or

```shell
webpack serve
```

- Build the application

```shell
npm run build
```

or

```shell
webpack --mode production
```

## Functionalities

This configuration includes the following:

- **JavaScript/TypeScript files**: Uses `swc-loader`.
- **CSS files**: Uses `css-loader` and `postcss-loader` with modules option enabled (see [CSS/SCSS Modules](#cssscss-modules)).
- **SCSS/SASS files**: Uses `sass-loader` with modules option enabled (see [CSS/SCSS Modules](#cssscss-modules)).
- **Image or font** files: Uses `asset/resource` type of Webpack 5.
- **SVG files**: Uses `asset/resource` type of Webpack 5 or `@svgr/webpack` (see [SVG Files](#svg-files)).

## CSS/SCSS Modules

This package supports CSS and SCSS modules, allowing you to scope your styles locally to avoid conflicts and ensure maintainability.

### Usage

To use CSS or SCSS modules, follow these steps

1. **Create a CSS/SCSS module file**
   - For CSS: `styles.module.css`
   - For SCSS: `styles.module.scss`
2. `Import the module in your JavaScript/TypeScript file`

```JavaScript
import styles from './styles.module.css';
import styles from './styles.module.scss';
```

3. **Apply the styles to your components**

```JavaScript
export const MyComponent = () => {
  return (
    <div className={styles.myClass}>
      <p className={styles.myParagraph}>Hello, World!</p>
    </div>
  );
};
```

## SVG Files

Two configurations are available for SVG files:

1. **Import as a resource**: This allows you to use SVG files via the `<img/>` tag.

```javascript
import svgFile from './file.svg';

export const MyComponent = () => {
  return <img src={svgFile} />;
};
```

2. **Import as a React component**

```javascript
import SvgComponent from './file.svg?react';

export const MyComponent = () => {
  return <SvgComponent />;
};
```

## Environment Variables

For all environments, the following files are loaded if they exist, with later ones taking precedence over earlier ones:

- `.env` contains default values for environment variables required by the application.
- `.env.local` allows overwriting environment variables **(unversioned file)**.
- `.env.<MODE>` contains environment-specific variables.
- `.env.<MODE>.local` overwrites environment-specific variables **(unversioned file)**.

> `<MODE>` available by default: development, production, or test.

Real system environment variables take precedence over .env files.

### Default environment variables

| Variable                 | Default  | Description                                                                                                                                                                                                |
| ------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BROWSER                  | false    | Enables/disables launching the browser when npm start is run.                                                                                                                                              |
| PORT                     | 3000     | Sets the port for the development web server.                                                                                                                                                              |
| DISABLE_STYLELINT_PLUGIN | false    | Allows you to deactivate the stylelint plugin                                                                                                                                                              |
| DISABLE_ESLINT_PLUGIN    | false    | Allows you to deactivate the eslint plugin                                                                                                                                                                 |
| ESLINT_CONFIG_TYPE       | eslintrc | Specify the type of configuration to use with ESLint.<br/>- 'eslintrc' is the classic configuration format available in most ESLint versions.<br/> - 'flat' is the new format introduced in ESLint 8.21.0. |
| DISABLE_SOURCE_MAP       | false    | Allows you to deactivate the sourcemap                                                                                                                                                                     |
| ENV_PREFIX               | FRONT\_  | Sets the prefix for environment variables that will be passed to the frontend.<br/>Access environment variables using import.meta.env.FRONT_FOO in the code.                                               |

### Caution with Environment Variables

The webpack configuration of this project allows for environment variables to be included in the application bundle. This could potentially expose sensitive information if the bundle is publicly accessible.

It is recommended to only include non-sensitive environment variables in the application bundle. Sensitive information should not be exposed even if the bundle is publicly accessible.

Ensure you understand the security implications before including environment variables in your bundle.

Please note that the web configuration pre-filters environment variables via the default prefix ‘FRONT*’. This means that only environment variables starting with ‘FRONT*’ will be included in the bundle. This is an additional layer of security to prevent the accidental exposure of sensitive environment variables.
