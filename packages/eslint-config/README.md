# @pplancq/eslint-config

This package has been designed to provide a simplified and customizable ESLint configuration for your React/Node.js applications. Whether you are a beginner or an experienced developer, this package will help you configure ESLint with strict rules to ensure better code structure. Based on Airbnb’s ESLint configuration, this package includes additional rules for TypeScript files and test files.

## Getting Started

### Prerequisites

- Node.js 18.18.0 or higher

### Installation

```shell
npm install --save-dev eslint@8 @pplancq/eslint-config
```

## ESLint Configuration

Use the following command to enable the default configuration:

```shell
npx init-eslint-config
```

### @pplancq/eslint-config/react

To use, add the following to your `package.json`:

```json
{
  "eslintConfig": { "extends": ["@pplancq/eslint-config/react"] }
}
```

This configuration enables the rules for base, TypeScript, React, and Testing Library files.

### @pplancq/eslint-config/node

To use, add the following to your `package.json`:

```json
{
  "eslintConfig": { "extends": ["@pplancq/eslint-config/node"] }
}
```

This configuration enables the rules for base and TypeScript files.

### @pplancq/eslint-config/vitest

To use, add the following to your `package.json`:

```json
{
  "eslintConfig": { "extends": ["@pplancq/eslint-config/vitest"] }
}
```

This configuration enables the rules for Vitest files.

### @pplancq/eslint-config/jest

To use, add the following to your `package.json`:

```json
{
  "eslintConfig": { "extends": ["@pplancq/eslint-config/jest"] }
}
```

This configuration enables the rules for Jest files.

### @pplancq/eslint-config/prettier

To use, add the following to your `package.json`:

```json
{
  "eslintConfig": { "extends": ["@pplancq/eslint-config/prettier"] }
}
```

This configuration enables the rules for Prettier files.

You will need to install the following packages:

```shell
npm install --save-dev prettier eslint-plugin-prettier
```
