## 🚀 <span id="getting-started">Getting Started</span>

This project was bootstrapped with [@pplancq/create-react-app](https://github.com/pplancq/dev-tools/tree/main/packages/create-react-app).

### 🧾 Prerequisites

- Node.js : [Download here](https://nodejs.org/) (Preferably, use [Volta](https://volta.sh/))
- npm (Node Package Manager)

### 🛠️ Installation

1. Clone this repository to your computer.

```bash
git clone https://github.com/votre-utilisateur/mon-projet-awesome.git mon-projet
cd mon-projet
```

2. Install dependencies.

```bash
npm install 
```


In the project directory, you can run the following commands:

### `npm start`

Launches the application in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload automatically if you make edits.

You will also see lint errors in the console.

### `npm test`

Launches the test runner.

### `npm run test:watch`

Launches the test runner in interactive mode.

### `npm run build`

Builds the application for production in the `build` folder.

It correctly bundles React in production mode and optimizes the build for better performance.

The build is minified, and the filenames include hashes.
Your application is ready to be deployed!

### `npm run lint`

Allows you to see lint errors without fixing them. This command initiates the linting process with three linters: **eslint**, **stylelint**, and **tsc** (TypeScript Compiler).

### `npm run lint:eslint:fix`

Allows you to fix eslint errors.

### `npm run lint:stylelint:fix`

Allows you to fix style lint errors.

### `npm run lint:prettier:fix`

Allows you to fix prettier lint errors.

### `npm run remove:demo`

To remove the demo application.

### `npm run migrate:vite`

To migrate from webpack to vite.

## 🏗 <span id="project-structure">Project Structure</span>

```
📁 my-projet
├── 📁 src
│   ├── 📁 ui
│   │   ├── 📁 Atoms
│   │   ├── 📁 Molecules
│   │   ├── 📁 Organisms
│   │   ├── 📁 Templates
│   ├── 📁 components
│   │   ├── 📁 formFields
│   ├── 📁 providers
│   ├── 📁 pages
│   │   ├── 📁 homePage
│   │   ├── 📁 page1
│   │   │   ├── 📁 sousPage1
│   ├── 📁 forms
│   │   ├── 📁 hooks
│   │   ├── 📁 risk
│   │   ├── 📁 contact
│   ├── 📁 hooks
│   │   ├── 📁 api
│   │   ├── 📁 useCustom1
│   │   ├── 📁 useCustom2
│   ├── 📁 utils
│   │   ├── 📁 services
│   │   ├── 📁 tests
│   │   ├── 📁 helpers
│   ├── 📁 routing
│   ├── 📁 api
│   ├── 📁 types
│   ├── 📁 assets
│   ├── 📁 config
```

### 📚 Folder Definitions

Here is the project folder structure, with a brief description of each folder:

| Folder | Description|
| -------- | -------- |
| **📁 src**  | ***The root directory of the application source code.***
| [**📁 ui**](./src/ui/README.md) | Contains reusable components designed to be used across projects. Components can be basic (Atoms), more complex (Molecules), higher-level components (Organisms), or page templates (Templates).    |
| [**📁&#160;components**](./src/components/README.md)     | Contains project-specific reusable components, for example, form components using React Hook Form.   |
| [**📁 providers**](./src/providers/README.md)   | This folder contains context providers or custom hooks that provide data to the entire application.   |
| [**📁 pages**](./src/pages/README.md)    | Contains the pages of the application. Each subfolder represents a distinct page or view of the application.    |
| [**📁 forms**](./src/forms/README.md)   | Contains the forms of the application, grouping hooks related to forms.    |
| [**📁 hooks**](./src/hooks/README.md)    | Includes custom hooks for various application features, such as API calls with React Query.    |
| [**📁 utils**](./src/utils/README.md)    | Contains utilities and services such as test files, utility functions, etc.    |
| [**📁 routing**](./src/routing/README.md)    | This folder is intended for native API calls using the `fetch`. function. These calls are essential for fetching real-time data from external sources, such as remote servers or web services.    |
| [**📁 types**](./src/types/README.md)     | Provides TypeScript type definitions to enhance the robustness of your code.   |
| [**📁 assets**](./src/assets/README.md)    | Contains static files such as images, fonts, etc., used in the application.    |
| [**📁 config**](./src/config/README.md)   | Contains all the important configurations and utilities needed for our project.    |

## 🏗 <span id="component-structure">React Component Structure</span>

```
📁 ComponentName
├── 📁 __tests__
│   ├── 📄 ComponentName.feature
│   ├── 📄 ComponantName.steps.tsx
│   ├── 📄 ComponentName.test.tsx
├── 📄 index.ts
├── 📄 ComponentName.tsx
├── 📄 ComponentName.hook.ts
├── 📄 ComponentName.module.scss
```

### 📚 Files Definitions

#### 📁 **tests**

The tests folder may contain unit tests specific to the package. The idea is to mainly test through functional tests. However, in some cases, it may be useful to test a component in isolation (for example, when developing a package reused between multiple projects).

#### 📄 index.ts

This file allows exposing the component and avoids having to redo imports if the file implementing the component changes its name.

```typescript
export { ComponentName } from './ComponentName';
```

This will allow importing a component like this:

```typescript
import { ComponentName } from '@Front/ComponentName';
```

#### 📄 ComponentName.tsx

Each file contains a single exported component. It will essentially contain the view and very little logic. If the component needs more logic, it is advisable to use a custom hook.

```typescript
type ComponentNameProps = {
  foo: string;
}

export const ComponentName = ({ foo }) => {
  return (
    <div>{foo}</div>
 );
};
```

#### 📄 ComponentName.hook.ts

A custom hook allows moving the logic specific to a component outside of its view.

```typescript
export type UseComponentNameProps = {
  foo: string;
};

export type UseComponentNameReturn = {
  bar: string;
};

export const useComponentName = ({ foo }: UseComponentNameProps): UseComponentNameReturn => {
  return {
    bar: foo,
  };
};

```

#### 📄 ComponentName.module.scss

The style specific to the component will be written in module form. This allows scoping the style of the component without overriding global style.

```css
.root {
  background-color: red;
}

```

```typescript
import classes from './ComponentName.module.scss'

export const ComponentName = () => {
  return (
    <div className={classes.root}>Foo</div>
 );
};
```
### ❗ Naming Conventions

==> Component names, file names, and folder names should follow the **PascalCase** convention.

## ⚠️ Caution with Environment Variables

The webpack configuration of this project allows for environment variables to be included in the application bundle. This could potentially expose sensitive information if the bundle is publicly accessible.

It is recommended to only include non-sensitive environment variables in the application bundle. Sensitive information should not be exposed even if the bundle is publicly accessible.

Ensure you understand the security implications before including environment variables in your bundle.

Please note that the web configuration pre-filters environment variables via the default prefix ‘FRONT_’. This means that only environment variables starting with ‘FRONT_’ will be included in the bundle. This is an additional layer of security to prevent the accidental exposure of sensitive environment variables.

## 🙇 <span id="learnmore">Learn More</span>

- React & co
  - [React Documentation.](https://react.dev/).
  - [React Router Documentation.](https://reactrouter.com/en/main).
  - [React Query Documentation.](https://tanstack.com/query/v3/).
  - [React Hook Form Documentation.](https://react-hook-form.com/).
- Test
  - [Vitest Documentation.](https://vitest.dev/).
  - [Testing Library Documentation.](https://testing-library.com/).
