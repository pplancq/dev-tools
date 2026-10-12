/* eslint-disable import/extensions */
import importXPlugin from "eslint-plugin-import-x";
import { prefix } from "./utils.js";
/* eslint-enable import/extensions */

export const importRules = ({ import: importNs = "import-x" } = {}) => ({
  plugins: {
    [importNs]: importXPlugin,
  },
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      es6: true,
    },
  },
  rules: prefix(
    {
      // eslint-plugin-import-x https://github.com/un-ts/eslint-plugin-import-x

      // import-x/consistent-type-specifier-style
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/consistent-type-specifier-style.md
      "import-x/consistent-type-specifier-style": "off",

      // import-x/default
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/default.md
      "import-x/default": "off",

      // import-x/dynamic-import-chunkname
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/dynamic-import-chunkname.md
      "import-x/dynamic-import-chunkname": [
        "off",
        {
          importFunctions: [],
          webpackChunknameFormat: "[0-9a-zA-Z-_/.]+",
        },
      ],

      // import-x/export
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/export.md
      "import-x/export": "error",

      // import-x/exports-last
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/exports-last.md
      "import-x/exports-last": "off",

      // import-x/extensions
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md
      "import-x/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          mjs: "never",
          jsx: "never",
        },
      ],

      // import-x/first
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/first.md
      "import-x/first": "error",

      // import-x/group-exports
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/group-exports.md
      "import-x/group-exports": "off",

      // import-x/imports-first
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/imports-first.md
      // This rule is deprecated.
      "import-x/imports-first": "off",

      // import-x/max-dependencies
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/max-dependencies.md
      "import-x/max-dependencies": ["off", { max: 10 }],

      // import-x/named
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/named.md
      "import-x/named": "error",

      // import-x/namespace
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/namespace.md
      "import-x/namespace": "off",

      // import-x/newline-after-import
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/newline-after-import.md
      "import-x/newline-after-import": "error",

      // import-x/no-absolute-path
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-absolute-path.md
      "import-x/no-absolute-path": "error",

      // import-x/no-amd
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-amd.md
      "import-x/no-amd": "error",

      // import-x/no-anonymous-default-export
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-anonymous-default-export.md
      "import-x/no-anonymous-default-export": [
        "off",
        {
          allowArray: false,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowLiteral: false,
          allowObject: false,
        },
      ],

      // import-x/no-commonjs
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-commonjs.md
      "import-x/no-commonjs": "off",

      // import-x/no-cycle
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-cycle.md
      "import-x/no-cycle": ["error", { maxDepth: "∞" }],

      // import-x/no-default-export
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-default-export.md
      "import-x/no-default-export": "error",

      // import-x/no-deprecated
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-deprecated.md
      "import-x/no-deprecated": "off",

      // import-x/no-duplicates
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
      "import-x/no-duplicates": "error",

      // import-x/no-dynamic-require
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-dynamic-require.md
      "import-x/no-dynamic-require": "error",

      // import-x/no-empty-named-blocks
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-empty-named-blocks.md
      "import-x/no-empty-named-blocks": "off",

      // import-x/no-extraneous-dependencies
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md
      "import-x/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "test/**", // tape, common npm pattern
            "tests/**", // also common npm pattern
            "spec/**", // mocha, rspec-like pattern
            "**/__tests__/**", // jest pattern
            "**/__mocks__/**", // jest pattern
            "test.{js,jsx}", // repos with a single test file
            "test-*.{js,jsx}", // repos with multiple top-level test files
            "**/*{.,_}{test,spec}.{js,jsx}", // tests where the extension or filename suffix denotes that it is a test
            "**/jest.config.js", // jest config
            "**/jest.setup.js", // jest setup
            "**/vue.config.js", // vue-cli config
            "**/webpack.config.js", // webpack config
            "**/webpack.config.*.js", // webpack config
            "**/rollup.config.js", // rollup config
            "**/rollup.config.*.js", // rollup config
            "**/gulpfile.js", // gulp config
            "**/gulpfile.*.js", // gulp config
            "**/Gruntfile{,.js}", // grunt config
            "**/protractor.conf.js", // protractor config
            "**/protractor.conf.*.js", // protractor config
            "**/karma.conf.js", // karma config
            "**/.eslintrc.js", // eslint config
          ],
          optionalDependencies: false,
        },
      ],

      // import-x/no-import-module-exports
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-import-module-exports.md
      "import-x/no-import-module-exports": [
        "error",
        {
          exceptions: [],
        },
      ],

      // import-x/no-internal-modules
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-internal-modules.md
      "import-x/no-internal-modules": [
        "off",
        {
          allow: [],
        },
      ],

      // import-x/no-mutable-exports
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-mutable-exports.md
      "import-x/no-mutable-exports": "error",

      // import-x/no-named-as-default
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default.md
      "import-x/no-named-as-default": "error",

      // import-x/no-named-as-default-member
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default-member.md
      "import-x/no-named-as-default-member": "error",

      // import-x/no-named-default
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-default.md
      "import-x/no-named-default": "error",

      // import-x/no-named-export
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-export.md
      "import-x/no-named-export": "off",

      // import-x/no-namespace
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-namespace.md
      "import-x/no-namespace": "off",

      // import-x/no-nodejs-modules
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-nodejs-modules.md
      "import-x/no-nodejs-modules": "off",

      // import-x/no-relative-packages
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-packages.md
      "import-x/no-relative-packages": "error",

      // import-x/no-relative-parent-imports
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-parent-imports.md
      "import-x/no-relative-parent-imports": "off",

      // import-x/no-restricted-paths
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-restricted-paths.md
      "import-x/no-restricted-paths": "off",

      // import-x/no-self-import
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-self-import.md
      "import-x/no-self-import": "error",

      // import-x/no-unassigned-import
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unassigned-import.md
      "import-x/no-unassigned-import": "off",

      // import-x/no-unresolved
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md
      "import-x/no-unresolved": ["error", { commonjs: true, caseSensitive: true }],

      // import-x/no-unused-modules
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unused-modules.md
      "import-x/no-unused-modules": [
        "off",
        {
          ignoreExports: [],
          missingExports: true,
          unusedExports: true,
        },
      ],

      // import-x/no-useless-path-segments
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-useless-path-segments.md
      "import-x/no-useless-path-segments": ["error", { commonjs: true }],

      // import-x/no-webpack-loader-syntax
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-webpack-loader-syntax.md
      "import-x/no-webpack-loader-syntax": "error",

      // import-x/order
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md
      "import-x/order": ["error", { groups: [["builtin", "external", "internal"]] }],

      // import-x/prefer-default-export
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/prefer-default-export.md
      "import-x/prefer-default-export": "off",

      // import-x/unambiguous
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/unambiguous.md
      "import-x/unambiguous": "off",
    },
    "import-x",
    importNs,
  ),
  settings: {
    "import-x/extensions": [".js", ".mjs", ".jsx"],
    "import-x/core-modules": [],
    "import-x/ignore": ["node_modules", String.raw`\.(coffee|scss|css|less|hbs|svg|json)$`],
    "import-x/resolver": {
      node: {
        extensions: [".js"],
      },
    },
  },
});
