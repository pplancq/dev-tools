## 🚀 <span id="getting-started">Getting Started</span>

This project was bootstrapped with [@pplancq/create-react-app](https://github.com/pplancq/dev-tools/tree/main/packages/create-react-app).

### 🧾 Prerequisites

- Node.js : [Download here](https://nodejs.org/) (Preferably, use [mise](https://mise.jdx.dev))
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

Runs all tests (unit and e2e).

> You can add the `--coverage` flag to generate a coverage report for both unit and e2e tests.  
> Example: `npm run test -- --coverage`

### `npm run test:unit`

Runs unit tests using Vitest.

### `npm run test:unit:watch`

Runs unit tests in watch mode using Vitest.

### `npm run test:e2e`

Runs end-to-end tests using Playwright.

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

## 🏗 <span id="project-structure">Project Structure</span>

```text
📁 my-project
├── 📁 src
│   ├── 📄 README.md
│   ├── 📁 app
│   │   ├── 📄 README.md
│   │   ├── 📄 App.tsx
│   │   ├── 📄 AppHTMLElement.tsx
│   │   ├── 📁 assets
│   │   ├── 📁 config
│   │   ├── 📁 providers
│   │   └── 📁 routing
│   ├── 📁 shared
│   │   ├── 📄 README.md
│   │   ├── 📁 application
│   │   │   └── 📄 README.md
│   │   ├── 📁 domain
│   │   │   └── 📄 README.md
│   │   ├── 📁 infrastructure
│   │   │   └── 📄 README.md
│   │   └── 📁 ui
│   │       └── 📄 README.md
│   ├── 📁 demo
│   │   ├── 📄 README.md
│   │   ├── 📁 application
│   │   ├── 📁 domain
│   │   ├── 📁 infrastructure
│   │   ├── 📁 ui
│   │   │   ├── 📁 assets
│   │   │   ├── 📁 components
│   │   │   ├── 📁 forms
│   │   │   ├── 📁 hooks
│   │   │   ├── 📁 layouts
│   │   │   ├── 📁 pages
│   │   │   └── 📁 routing
│   │   ├── 📄 serviceDemo.ts
│   │   └── 📄 serviceIdentifiers.ts
│   ├── 📄 main.ts
│   └── 📄 react-app-env.d.ts
```

### 📚 Folder Definitions

Here is the project folder structure, with a brief description of each folder:

| Folder                                                                | Description                                                                                                                                                |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **📁 src**                                                            | **_The root directory of the application source code._** It also contains [`src/README.md`](./src/README.md), which serves as the documentation index.     |
| [**📁 app**](./src/app/README.md)                                     | Owns the application bootstrap layer: root app composition, custom element entry point, routing, providers, global configuration, and app-wide assets.     |
| [**📁 shared**](./src/shared/README.md)                               | Contains only genuinely reusable cross-context code. In this starter it is intentionally conservative and avoids hosting demo-specific UI.                 |
| [**📁 shared/application**](./src/shared/application/README.md)       | Shared application-layer abstractions, DTO helpers, or orchestration utilities that can be reused by several bounded contexts.                             |
| [**📁 shared/domain**](./src/shared/domain/README.md)                 | Shared pure types and contracts. This folder must stay framework-free and focused on stable, reusable domain-facing definitions.                           |
| [**📁 shared/infrastructure**](./src/shared/infrastructure/README.md) | Shared technical helpers backed by external tools or browser APIs, such as generic HTTP utilities.                                                         |
| [**📁 shared/ui**](./src/shared/ui/README.md)                         | Shared UI-facing helpers with no feature identity. In the current template it mainly exists for common hooks such as DI-to-React integration.              |
| [**📁 demo**](./src/demo/README.md)                                   | The example bounded context included in the starter. It demonstrates how to structure a feature using `application`, `domain`, `infrastructure`, and `ui`. |
| **📁 demo/ui/components**                                             | Demo visual components and building blocks. The structure stays practical and readable instead of exposing `atoms`, `molecules`, or `organisms` folders.   |
| **📁 demo/ui/layouts**                                                | Demo layouts used to compose pages.                                                                                                                        |
| **📁 demo/ui/pages**                                                  | Demo pages such as the overview page and the example feature pages.                                                                                        |
| **📁 demo/ui/forms**                                                  | Demo form composition and form-related UI pieces.                                                                                                          |
| **📁 demo/ui/hooks**                                                  | Demo-specific React hooks, such as query hooks that connect the UI to the application layer.                                                               |
| **📁 demo/ui/routing**                                                | Demo route definitions and route path constants consumed by the app router.                                                                                |

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
import { ComponentName } from '@Demo/ui/components/ComponentName';
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

The build configuration of this project allows for environment variables to be included in the application bundle. This could potentially expose sensitive information if the bundle is publicly accessible.

It is recommended to only include non-sensitive environment variables in the application bundle. Sensitive information should not be exposed even if the bundle is publicly accessible.

Ensure you understand the security implications before including environment variables in your bundle.

Please note that the build configuration pre-filters environment variables via the default prefix `FRONT*`. This means that only environment variables starting with `FRONT*` will be included in the bundle. This is an additional layer of security to prevent the accidental exposure of sensitive environment variables.

## 🙇 <span id="learnmore">Learn More</span>

- React & co
  - [React Documentation.](https://react.dev/).
  - [React Router Documentation.](https://reactrouter.com/en/main).
  - [React Query Documentation.](https://tanstack.com/query/v3/).
  - [React Hook Form Documentation.](https://react-hook-form.com/).
- Test
  - [Vitest Documentation.](https://vitest.dev/).
  - [Testing Library Documentation.](https://testing-library.com/).
