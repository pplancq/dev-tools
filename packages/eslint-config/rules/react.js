import jestDom from "eslint-plugin-jest-dom";
import reactDomPlugin from "eslint-plugin-react-dom";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactJsxPlugin from "eslint-plugin-react-jsx";
import reactXPlugin from "eslint-plugin-react-x";
import reactYouMightNotNeedAnEffectPlugin from "eslint-plugin-react-you-might-not-need-an-effect";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import stylisticPlugin from "@stylistic/eslint-plugin";
/* eslint-disable import-x/extensions */
import { pplancqReactPlugin } from "./react-custom/index.js";
import { prefix } from "./utils.js";
/* eslint-enable import-x/extensions */

export const reactRules = ({
  import: importNs = "import-x",
  enableAdditionalReactHooksRules = false,
  enableReactYouMightNotNeedAnEffectRules = false,
} = {}) => ({
  plugins: {
    "@stylistic": stylisticPlugin,
    "react-dom": reactDomPlugin,
    "react-hooks": reactHooksPlugin,
    "react-jsx": reactJsxPlugin,
    "react-x": reactXPlugin,
    ...(enableReactYouMightNotNeedAnEffectRules && {
      reactYouMightNotNeedAnEffect: reactYouMightNotNeedAnEffectPlugin,
    }),
    "pplancq-react": pplancqReactPlugin,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: prefix(
    {
      // eslint-plugin-import-x https://github.com/un-ts/eslint-plugin-import-x
      // Enforce file extensions for import declarations
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md
      "import-x/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
        },
      ],

      // eslint-plugin-react-x https://eslint-react.xyz
      // Disallow reading this.state inside setState
      // https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
      "react-x/no-access-state-in-setstate": "error",
      // Disallow mutating this.state directly
      // https://eslint-react.xyz/docs/rules/no-direct-mutation-state
      "react-x/no-direct-mutation-state": "error",
      // Disallow using array indices as keys
      // https://eslint-react.xyz/docs/rules/no-array-index-key
      "react-x/no-array-index-key": "error",
      // Require keys for elements returned from collections
      // https://eslint-react.xyz/docs/rules/no-missing-key
      "react-x/no-missing-key": "error",
      // Require display names for anonymous components
      // https://eslint-react.xyz/docs/rules/no-missing-component-display-name
      "react-x/no-missing-component-display-name": "error",
      // Require display names for React contexts
      // https://eslint-react.xyz/docs/rules/no-missing-context-display-name
      "react-x/no-missing-context-display-name": "error",
      // Disallow component definitions nested inside other components
      // https://eslint-react.xyz/docs/rules/no-nested-component-definitions
      "react-x/no-nested-component-definitions": "error",
      // Disallow setState in componentDidUpdate
      // https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
      "react-x/no-set-state-in-component-did-update": "error",
      // Disallow setState in componentWillUpdate
      // https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
      "react-x/no-set-state-in-component-will-update": "error",
      // Disallow unused class component members
      // https://eslint-react.xyz/docs/rules/no-unused-class-component-members
      "react-x/no-unused-class-component-members": "error",
      // Disallow unused state fields
      // https://eslint-react.xyz/docs/rules/no-unused-state
      "react-x/no-unused-state": "error",
      // Disallow deprecated componentWillMount
      // https://eslint-react.xyz/docs/rules/no-component-will-mount
      "react-x/no-component-will-mount": "error",
      // Disallow deprecated componentWillReceiveProps
      // https://eslint-react.xyz/docs/rules/no-component-will-receive-props
      "react-x/no-component-will-receive-props": "error",
      // Disallow deprecated componentWillUpdate
      // https://eslint-react.xyz/docs/rules/no-component-will-update
      "react-x/no-component-will-update": "error",
      // Disallow unstable values passed to context providers
      // https://eslint-react.xyz/docs/rules/no-unstable-context-value
      "react-x/no-unstable-context-value": "error",

      // eslint-plugin-react-jsx https://eslint-react.xyz
      // Disallow key props after a JSX spread
      // https://eslint-react.xyz/docs/rules/jsx-no-key-after-spread
      "react-jsx/no-key-after-spread": "error",
      // Disallow comments that are rendered as JSX text
      // https://eslint-react.xyz/docs/rules/jsx-no-comment-textnodes
      "react-jsx/no-comment-textnodes": "error",
      // Disallow passing children as a prop
      // https://eslint-react.xyz/docs/rules/jsx-no-children-prop
      "react-jsx/no-children-prop": "error",
      // Disallow unnecessary fragments
      // https://eslint-react.xyz/docs/rules/jsx-no-useless-fragment
      "react-jsx/no-useless-fragment": "error",
      // Disallow namespace syntax in JSX elements
      // https://eslint-react.xyz/docs/rules/jsx-no-namespace
      "react-jsx/no-namespace": "error",

      // eslint-plugin-react-dom https://eslint-react.xyz
      // Disallow dangerous HTML inserted alongside children
      // https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
      "react-dom/no-dangerously-set-innerhtml-with-children": "error",
      // Warn about dangerous HTML insertion
      // https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
      "react-dom/no-dangerously-set-innerhtml": "warn",
      // Disallow deprecated ReactDOM.findDOMNode
      // https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
      "react-dom/no-find-dom-node": "error",
      // Disallow deprecated ReactDOM.hydrate
      // https://eslint-react.xyz/docs/rules/dom-no-hydrate
      "react-dom/no-hydrate": "error",
      // Require explicit button types
      // https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
      "react-dom/no-missing-button-type": "error",
      // Disallow deprecated ReactDOM.render
      // https://eslint-react.xyz/docs/rules/dom-no-render
      "react-dom/no-render": "error",
      // Disallow using the return value of ReactDOM.render
      // https://eslint-react.xyz/docs/rules/dom-no-render-return-value
      "react-dom/no-render-return-value": "error",
      // Disallow javascript: URLs
      // https://eslint-react.xyz/docs/rules/dom-no-script-url
      "react-dom/no-script-url": "error",
      // Require safe rel attributes on links opening a new tab
      // https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
      "react-dom/no-unsafe-target-blank": "error",
      // Disallow unknown DOM properties
      // https://eslint-react.xyz/docs/rules/dom-no-unknown-property
      "react-dom/no-unknown-property": "error",
      // Disallow children on void DOM elements
      // https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
      "react-dom/no-void-elements-with-children": "error",

      // @stylistic/eslint-plugin https://eslint.style
      // Enforce consistent curly brace presence in JSX
      // https://eslint.style/rules/jsx-curly-brace-presence
      "@stylistic/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
      // Require elements without children to be self-closing
      // https://eslint.style/rules/jsx-self-closing-comp
      "@stylistic/jsx-self-closing-comp": "error",

      // eslint-plugin-react-hooks https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
      // Enforce Rules of Hooks
      // https://react.dev/reference/rules/rules-of-hooks
      "react-hooks/rules-of-hooks": "error",
      // Verify dependencies for Hooks such as useEffect
      // https://github.com/facebook/react/issues/14920
      "react-hooks/exhaustive-deps": "warn",

      ...(enableAdditionalReactHooksRules && {
        // Disallow recreating components during render
        // https://react.dev/reference/eslint-plugin-react-hooks/lints/static-components
        "react-hooks/static-components": "error",
        // Validate useMemo usage
        // https://react.dev/reference/eslint-plugin-react-hooks/lints/use-memo
        "react-hooks/use-memo": "error",
        // Preserve existing manual memoization during compilation
        // https://react.dev/reference/eslint-plugin-react-hooks/lints/preserve-manual-memoization
        "react-hooks/preserve-manual-memoization": "error",
        // Disallow mutating props, state, and other immutable values
        // https://react.dev/reference/eslint-plugin-react-hooks/lints/immutability
        "react-hooks/immutability": "error",
        // Disallow mutating global variables during render
        // https://react.dev/reference/eslint-plugin-react-hooks/lints/globals
        "react-hooks/globals": "error",
        // Disallow reading or writing refs during render
        // https://react.dev/reference/eslint-plugin-react-hooks/lints/refs
        "react-hooks/refs": "error",
        // Disallow synchronous state updates in effects
        // https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-effect
        "react-hooks/set-state-in-effect": "error",
        // Require error boundaries instead of try/catch for child errors
        // https://react.dev/reference/eslint-plugin-react-hooks/lints/error-boundaries
        "react-hooks/error-boundaries": "error",
        // Disallow known impure functions during render
        // https://react.dev/reference/eslint-plugin-react-hooks/lints/purity
        "react-hooks/purity": "error",
        // Disallow unconditional state updates during render
        // https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-render
        "react-hooks/set-state-in-render": "error",
        // Validate React Compiler configuration
        // https://react.dev/reference/eslint-plugin-react-hooks/lints/config
        "react-hooks/config": "error",
        // Validate React Compiler gating configuration
        // https://react.dev/reference/eslint-plugin-react-hooks/lints/gating
        "react-hooks/gating": "error",
        // Detect libraries incompatible with memoization
        // https://react.dev/reference/eslint-plugin-react-hooks/lints/incompatible-library
        "react-hooks/incompatible-library": "warn",
        // Detect syntax unsupported by React Compiler
        // https://react.dev/reference/eslint-plugin-react-hooks/lints/unsupported-syntax
        "react-hooks/unsupported-syntax": "warn",
      }),

      // eslint-plugin-react-you-might-not-need-an-effect https://github.com/nickjvandyke/eslint-plugin-react-you-might-not-need-an-effect
      ...(enableReactYouMightNotNeedAnEffectRules && {
        // Disallow storing derived state in an effect
        // https://github.com/nickjvandyke/eslint-plugin-react-you-might-not-need-an-effect#no-derived-state
        "reactYouMightNotNeedAnEffect/no-derived-state": "warn",
        // Disallow chaining state updates in an effect
        // https://github.com/nickjvandyke/eslint-plugin-react-you-might-not-need-an-effect#no-chain-state-updates
        "reactYouMightNotNeedAnEffect/no-chain-state-updates": "warn",
        // Disallow using state and an effect as an event handler
        // https://github.com/nickjvandyke/eslint-plugin-react-you-might-not-need-an-effect#no-event-handler
        "reactYouMightNotNeedAnEffect/no-event-handler": "warn",
        // Disallow adjusting state in an effect when an external value changes
        // https://github.com/nickjvandyke/eslint-plugin-react-you-might-not-need-an-effect#no-adjust-state-on-prop-change
        "reactYouMightNotNeedAnEffect/no-adjust-state-on-prop-change": "warn",
        // Disallow resetting all state in an effect when a prop changes
        // https://github.com/nickjvandyke/eslint-plugin-react-you-might-not-need-an-effect#no-reset-all-state-on-prop-change
        "reactYouMightNotNeedAnEffect/no-reset-all-state-on-prop-change": "warn",
        // Disallow passing live state to parents in an effect
        // https://github.com/nickjvandyke/eslint-plugin-react-you-might-not-need-an-effect#no-pass-live-state-to-parent
        "reactYouMightNotNeedAnEffect/no-pass-live-state-to-parent": "warn",
        // Disallow passing data to parents in an effect
        // https://github.com/nickjvandyke/eslint-plugin-react-you-might-not-need-an-effect#no-pass-data-to-parent
        "reactYouMightNotNeedAnEffect/no-pass-data-to-parent": "warn",
        // Disallow subscribing to an external store in an effect
        // https://github.com/nickjvandyke/eslint-plugin-react-you-might-not-need-an-effect#no-external-store-subscription
        "reactYouMightNotNeedAnEffect/no-external-store-subscription": "warn",
        // Disallow initializing state in an effect
        // https://github.com/nickjvandyke/eslint-plugin-react-you-might-not-need-an-effect#no-initialize-state
        "reactYouMightNotNeedAnEffect/no-initialize-state": "warn",
      }),

      // pplancq-react (local plugin)
      // Prefer shorthand for boolean JSX attributes
      // https://github.com/pplancq/dev-tools/blob/main/packages/eslint-config/README.md#custom-react-rules
      "pplancq-react/jsx-boolean-value": "error",
      // Enforce destructuring assignment for component props, state, and context
      // https://github.com/pplancq/dev-tools/blob/main/packages/eslint-config/README.md#custom-react-rules
      "pplancq-react/destructuring-assignment": "error",
      // Disallow multiple component definitions in a file
      // https://github.com/pplancq/dev-tools/blob/main/packages/eslint-config/README.md#custom-react-rules
      "pplancq-react/no-multi-comp": "error",
    },
    "import-x",
    importNs,
  ),
  settings: {
    "react-x": {
      version: "detect",
      importSource: "react",
      polymorphicPropName: "as",
    },
    "import-x/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
});

export const reactTypescriptRules = ({ files, import: importNs = "import-x" } = {}) => ({
  settings: {
    "import-x/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  languageOptions: {
    parserOptions: {
      jsxPragma: null,
    },
  },
  rules: prefix(
    {
      // eslint-plugin-import-x https://github.com/un-ts/eslint-plugin-import-x
      // Enforce file extensions for import declarations
      // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md
      "import-x/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
    },
    "import-x",
    importNs,
  ),
  files,
});

export const reactTypeCheckedRules = ({ files } = {}) => ({
  files,
  ignores: ["**/*.ts"],
  languageOptions: {
    parserOptions: {
      projectService: true,
    },
  },
  rules: {
    // This rule requires type information and only applies to TypeScript JSX files.
    "react-x/no-leaked-conditional-rendering": "error",
  },
});

export const reactTestRules = ({ files } = {}) => ({
  plugins: {
    "testing-library": testingLibraryPlugin,
    "jest-dom": jestDom,
  },
  rules: {
    // eslint-plugin-jest-dom https://github.com/testing-library/eslint-plugin-jest-dom
    // Prefer toBeChecked over checking attributes
    "jest-dom/prefer-checked": "error",
    // Prefer toBeEmpty over checking innerHTML
    "jest-dom/prefer-empty": "error",
    // Prefer toBeDisabled or toBeEnabled over checking attributes
    "jest-dom/prefer-enabled-disabled": "error",
    // Prefer toHaveFocus over checking document.activeElement
    "jest-dom/prefer-focus": "error",
    // Prefer .toBeInTheDocument() for asserting the existence of a DOM node
    "jest-dom/prefer-in-document": "error",
    // Prefer toBeRequired over checking properties
    "jest-dom/prefer-required": "error",
    // Prefer toHaveAttribute over checking getAttribute/hasAttribute
    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-attribute.md
    "jest-dom/prefer-to-have-attribute": "error",
    // Prefer toHaveClass over checking element className
    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-class.md
    "jest-dom/prefer-to-have-class": "error",
    // Prefer toHaveStyle over checking element style
    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-style.md
    "jest-dom/prefer-to-have-style": "error",
    // Prefer toHaveTextContent over checking element.textContent
    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-text-content.md
    "jest-dom/prefer-to-have-text-content": "error",
    // Prefer toHaveValue over checking element.value
    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-value.md
    "jest-dom/prefer-to-have-value": "error",

    // eslint-plugin-testing-library https://github.com/testing-library/eslint-plugin-testing-library
    // Enforce promises from async event methods are handled
    "testing-library/await-async-events": "off",
    // Enforce promises from async queries to be handled
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-queries.md
    "testing-library/await-async-queries": "error",
    // Enforce promises from async utils to be awaited properly
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-utils.md
    "testing-library/await-async-utils": "error",
    // Ensures consistent usage of data-testid
    "testing-library/consistent-data-testid": "off",
    // Disallow unnecessary await for sync events
    "testing-library/no-await-sync-events": "off",
    // Disallow unnecessary await for sync queries
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-queries.md
    "testing-library/no-await-sync-queries": "error",
    // Disallow the use of container methods
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-container.md
    "testing-library/no-container": "error",
    // Disallow the use of debugging utilities like debug
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-debugging-utils.md
    "testing-library/no-debugging-utils": "error",
    // Disallow importing from DOM Testing Library
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-dom-import.md
    "testing-library/no-dom-import": ["error", "react"],
    // Disallow the use of the global RegExp flag (/g) in queries
    "testing-library/no-global-regexp-flag-in-query": "off",
    // Disallow the use of cleanup
    "testing-library/no-manual-cleanup": "off",
    // Disallow direct Node access
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-node-access.md
    "testing-library/no-node-access": "error",
    // Disallow the use of promises passed to a fireEvent method
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-promise-in-fire-event.md
    "testing-library/no-promise-in-fire-event": "error",
    // Disallow the use of render in testing framework setup functions
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-render-in-lifecycle.md
    "testing-library/no-render-in-lifecycle": "error",
    // Disallow wrapping Testing Library utils or empty callbacks in act
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-unnecessary-act.md
    "testing-library/no-unnecessary-act": "error",
    // Disallow multiple expect calls inside waitFor
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-multiple-assertions.md
    "testing-library/no-wait-for-multiple-assertions": "error",
    // Disallow side effects in waitFor
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-side-effects.md
    "testing-library/no-wait-for-side-effects": "error",
    // Disallow snapshots inside waitFor
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-snapshot.md
    "testing-library/no-wait-for-snapshot": "error",
    // Suggest explicit assertions rather than standalone queries
    "testing-library/prefer-explicit-assert": "off",
    // Prefer findBy queries over waitFor and getBy
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-find-by.md
    "testing-library/prefer-find-by": "error",
    // Suggest implicit assertions for getBy and findBy queries
    "testing-library/prefer-implicit-assert": "off",
    // Ensure appropriate queries are used with their respective matchers
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-presence-queries.md
    "testing-library/prefer-presence-queries": "error",
    // Suggest queryBy when waiting for disappearance
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-query-by-disappearance.md
    "testing-library/prefer-query-by-disappearance": "error",
    // Ensure configured queries use their corresponding matchers
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-query-matchers.md
    "testing-library/prefer-query-matchers": "error",
    // Suggest using screen while querying
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md
    "testing-library/prefer-screen-queries": "error",
    // Suggest userEvent over fireEvent
    "testing-library/prefer-user-event": "off",
    // Enforce valid render result names
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/render-result-naming-convention.md
    "testing-library/render-result-naming-convention": "error",
  },
  files,
});
