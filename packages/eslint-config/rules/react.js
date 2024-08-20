module.exports = {
  extends: ['airbnb', './react-jsx-a11y.js', './base.js', './typescript.js'],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // eslint-plugin-import https://github.com/import-js/eslint-plugin-import
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],

    // eslint-plugin-react https://github.com/jsx-eslint/eslint-plugin-react

    // Enforces consistent naming for boolean props
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': [
      'off',
      {
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        message: '',
      },
    ],

    // Disallow usage of button elements without an explicit type attribute
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    'react/button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: false,
      },
    ],

    // Enforce using onChange or readonly attribute when checked is used
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/checked-requires-onchange-or-readonly.md
    'react/checked-requires-onchange-or-readonly': 'off',

    // Enforce all defaultProps have a corresponding non-required PropType
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],

    // Enforce consistent usage of destructuring assignment of props, state, and context
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': ['error', 'always'],

    // Disallow missing displayName in a React component definition
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': 'error',

    // Disallow certain props on components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    'react/forbid-component-props': ['off', { forbid: [] }],

    // Disallow certain props on DOM Nodes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
    'react/forbid-dom-props': ['off', { forbid: [] }],

    // Disallow certain elements
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
    'react/forbid-elements': ['off', { forbid: [] }],

    // Disallow using another component's propTypes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],

    // Disallow certain propTypes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any', 'array', 'object'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],

    // Enforce a specific function type for function components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function', 'function-expression'],
        unnamedComponents: ['arrow-function', 'function-expression'],
      },
    ],

    // Ensure destructuring and symmetric naming of useState hook value and setter variables
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
    'react/hook-use-state': 'off',

    // Enforce sandbox attribute on iframe elements
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
    'react/iframe-missing-sandbox': 'off',

    // Enforce boolean attributes notation in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],

    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
    'react/jsx-child-element-spacing': 'off',

    // Enforce closing bracket location in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

    // Enforce closing tag location for multiline JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
    'react/jsx-closing-tag-location': 'error',

    // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

    // Enforce consistent linebreaks in curly braces in JSX attributes and expressions
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent',
      },
    ],

    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

    // Enforce or disallow spaces around equal signs in JSX attributes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    'react/jsx-equals-spacing': ['error', 'never'],

    // Disallow file extensions that may contain JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx'],
      },
    ],

    // Enforce proper position of the first property in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

    // Enforce shorthand or standard form for React fragments
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    'react/jsx-fragments': ['error', 'syntax'],

    // Enforce event handler naming conventions in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-handler-names': [
      'off',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],

    // Enforce JSX indentation
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': ['error', 2],

    // Enforce props indentation in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': ['error', 2],

    // Disallow missing key props in iterators/collection literals
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 'error',

    // Enforce JSX maximum depth
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
    'react/jsx-max-depth': 'off',

    // Enforce maximum of props on a single line in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

    // Require or prevent a new line after jsx elements and expressions
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
    'react/jsx-newline': 'off',

    // Disallow .bind() or arrow functions in JSX props
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      },
    ],

    // Disallow comments from being inserted as text nodes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': 'error',

    // Disallows JSX context provider values from taking values that will cause needless rerenders
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
    'react/jsx-no-constructed-context-values': 'error',

    // Disallow duplicate properties in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

    // Disallow problematic leaked values from being rendered
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
    'react/jsx-no-leaked-render': 'off',

    // Disallow usage of string literals in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    'react/jsx-no-literals': ['off', { noStrings: true }],

    // Disallow usage of javascript: URLs
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
    'react/jsx-no-script-url': [
      'error',
      [
        {
          name: 'Link',
          props: ['to'],
        },
      ],
    ],

    // Disallow target="_blank" attribute without rel="noreferrer"
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],

    // Disallow undeclared variables in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': 'error',

    // Disallow unnecessary fragments
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    'react/jsx-no-useless-fragment': 'error',

    // Require one JSX element per line
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],

    // Enforce PascalCase for user-defined JSX components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],

    // Disallow multiple spaces between inline JSX props
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
    'react/jsx-props-no-multi-spaces': 'error',

    // Disallow JSX prop spreading the same identifier multiple times
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spread-multi.md
    'react/jsx-props-no-spread-multi': 'off',

    // Disallow JSX prop spreading
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': 'off',

    // Enforce defaultProps declarations alphabetical sorting
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
    // This rule is deprecated. It was replaced by react/sort-default-props
    'react/jsx-sort-default-props': [
      'off',
      {
        ignoreCase: true,
      },
    ],

    // Enforce props alphabetical sorting
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],

    // Enforce spacing before closing bracket in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
    // This rule is deprecated. It was replaced by react/jsx-tag-spacing
    'react/jsx-space-before-closing': ['off', 'always'],

    // Enforce whitespace in and around the JSX opening and closing brackets
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],

    // Disallow React to be incorrectly marked as unused
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': 'off',

    // Disallow variables used in JSX to be incorrectly marked as unused
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 'error',

    // Disallow missing parentheses around multiline JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],

    // Disallow when this.state is accessed within setState
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': 'error',

    // Disallow adjacent inline elements not separated by whitespace
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
    'react/no-adjacent-inline-elements': 'off',

    // Disallow usage of Array index in keys
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 'error',

    // Lifecycle methods should be methods on the prototype, not class fields
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
    'react/no-arrow-function-lifecycle': 'error',

    // Disallow passing of children as props
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    'react/no-children-prop': 'error',

    // Disallow usage of dangerous JSX properties
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': 'warn',

    // Disallow when a DOM element is using both children and dangerouslySetInnerHTML
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': 'error',

    // Disallow usage of deprecated methods
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': 'error',

    // Disallow usage of setState in componentDidMount
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    'react/no-did-mount-set-state': 'off',

    // Disallow usage of setState in componentDidUpdate
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': 'error',

    // Disallow direct mutation of this.state
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'error',

    // Disallow usage of findDOMNode
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    'react/no-find-dom-node': 'error',

    // Disallow usage of invalid attributes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
    'react/no-invalid-html-attribute': 'error',

    // Disallow usage of isMounted
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    'react/no-is-mounted': 'error',

    // Disallow multiple component definition per file
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': [
      'error',
      {
        ignoreStateless: false,
      },
    ],

    // Enforce that namespaces are not used in React elements
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
    'react/no-namespace': 'error',

    // Disallow usage of referential-type variables as default param in functional component
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md
    'react/no-object-type-as-default-prop': 'off',

    // Disallow usage of shouldComponentUpdate when extending React.PureComponent
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': 'error',

    // Disallow usage of the return value of ReactDOM.render
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/no-render-return-value': 'error',

    // Disallow usage of setState
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
    'react/no-set-state': 'off',

    // Disallow using string references
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-string-refs': 'error',

    // Disallow this from being used in stateless functional components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': 'error',

    // Disallow common typos
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    'react/no-typos': 'error',

    // Disallow unescaped HTML entities from appearing in markup
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': 'off',

    // Disallow usage of unknown DOM property
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 'error',

    // Disallow usage of unsafe lifecycle methods
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
    'react/no-unsafe': 'off',

    // Disallow creating unstable components inside components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
    'react/no-unstable-nested-components': 'error',

    // Disallow declaring unused methods of component class
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
    'react/no-unused-class-component-methods': 'error',

    // Disallow definitions of unused propTypes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],

    // Disallow definitions of unused state
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
    'react/no-unused-state': 'error',

    // Disallow usage of setState in componentWillUpdate
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    'react/no-will-update-set-state': 'error',

    // Enforce ES5 or ES6 class for React Components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    'react/prefer-es6-class': ['error', 'always'],

    // Prefer exact proptype definitions
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
    'react/prefer-exact-props': 'error',

    // Enforce that props are read-only
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
    'react/prefer-read-only-props': 'off',

    // Enforce stateless components to be written as a pure function
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

    // Disallow missing props validation in a React component definition
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': [
      'error',
      {
        ignore: [],
        customValidators: [],
        skipUndeclared: false,
      },
    ],

    // Disallow missing React when using JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 'off',

    // Enforce a defaultProps definition for every prop that is not a required prop
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': [
      'error',
      {
        forbidDefaultForRequired: true,
      },
    ],

    // Enforce React components to have a shouldComponentUpdate method
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
    'react/require-optimization': ['off', { allowDecorators: [] }],

    // Enforce ES5 or ES6 class for returning value in render function
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    'react/require-render-return': 'error',

    // Disallow extra closing tags for components without children
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': 'error',

    // Enforce component methods order
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^handle.+$/',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],

    // Enforce defaultProps declarations alphabetical sorting
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-default-props.md
    'react/sort-default-props': 'off',

    // Enforce propTypes declarations alphabetical sorting
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
    'react/sort-prop-types': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],

    // Enforce class component state initialization style
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
    'react/state-in-constructor': ['error', 'always'],

    // Enforces where React component static properties should be positioned
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
    'react/static-property-placement': ['error', 'property assignment'],

    // Enforce style prop value is an object
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 'error',

    // Disallow void DOM elements (e.g. <img />, <br />) from receiving children
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    'react/void-dom-elements-no-children': 'error',

    // eslint-plugin-react-hooks https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hook

    // Enforce Rules of Hooks
    // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js
    // https://react.dev/reference/rules/rules-of-hooks
    'react-hooks/rules-of-hooks': 'error',

    // Verify the list of the dependencies for Hooks like useEffect and similar
    // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js
    // https://github.com/facebook/react/issues/14920
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
      parserOptions: {
        jsxPragma: null,
      },
      rules: {
        // eslint-plugin-import https://github.com/import-js/eslint-plugin-import
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],

        // eslint-plugin-react https://github.com/jsx-eslint/eslint-plugin-react

        // Enforce a defaultProps definition for every prop that is not a required prop
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
        'react/require-default-props': 'off',

        // Disallow file extensions that may contain JSX
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.jsx', '.tsx'],
          },
        ],
      },
    },
    {
      files: ['*.{test,spec,steps}.{js,jsx,ts,tsx}'],
      plugins: ['testing-library', 'jest-dom'],
      rules: {
        // eslint-plugin-jest-dom https://github.com/testing-library/eslint-plugin-jest-dom

        // Prefer toBeChecked over checking attributes
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-checked.md
        'jest-dom/prefer-checked': 'error',

        // Prefer toBeEmpty over checking innerHTML
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-empty.md
        'jest-dom/prefer-empty': 'error',

        // Prefer toBeDisabled or toBeEnabled over checking attributes
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-enabled-disabled.md
        'jest-dom/prefer-enabled-disabled': 'error',

        // Prefer toHaveFocus over checking document.activeElement
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-focus.md
        'jest-dom/prefer-focus': 'error',

        // Prefer .toBeInTheDocument() for asserting the existence of a DOM node
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-in-document.md
        'jest-dom/prefer-in-document': 'error',

        // Prefer toBeRequired over checking properties
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-required.md
        'jest-dom/prefer-required': 'error',

        // Prefer toHaveAttribute over checking getAttribute/hasAttribute
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-attribute.md
        'jest-dom/prefer-to-have-attribute': 'error',

        // Prefer toHaveClass over checking element className
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-class.md
        'jest-dom/prefer-to-have-class': 'error',

        // Prefer toHaveStyle over checking element style
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-style.md
        'jest-dom/prefer-to-have-style': 'error',

        // Prefer toHaveTextContent over checking element.textContent
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-text-content.md
        'jest-dom/prefer-to-have-text-content': 'error',

        // Prefer toHaveValue over checking element.value
        // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-value.md
        'jest-dom/prefer-to-have-value': 'error',

        // eslint-plugin-testing-library https://github.com/testing-library/eslint-plugin-testing-library

        // Enforce promises from async event methods are handled
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-events.md
        'testing-library/await-async-events': 'off',

        // Enforce promises from async queries to be handled
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-queries.md
        'testing-library/await-async-queries': 'error',

        // Enforce promises from async utils to be awaited properly
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-utils.md
        'testing-library/await-async-utils': 'error',

        // Ensures consistent usage of data-testid
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/consistent-data-testid.md
        'testing-library/consistent-data-testid': 'off',

        // Disallow unnecessary await for sync events
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-events.md
        'testing-library/no-await-sync-events': 'off',

        // Disallow unnecessary await for sync queries
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-queries.md
        'testing-library/no-await-sync-queries': 'error',

        // Disallow the use of container methods
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-container.md
        'testing-library/no-container': 'error',

        // Disallow the use of debugging utilities like debug
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-debugging-utils.md
        'testing-library/no-debugging-utils': 'error',

        // Disallow importing from DOM Testing Library
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-dom-import.md
        'testing-library/no-dom-import': ['error', 'react'],

        // Disallow the use of the global RegExp flag (/g) in queries
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-global-regexp-flag-in-query.md
        'testing-library/no-global-regexp-flag-in-query': 'off',

        // Disallow the use of cleanup
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-manual-cleanup.md
        'testing-library/no-manual-cleanup': 'off',

        // Disallow direct Node access
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-node-access.md
        'testing-library/no-node-access': 'error',

        // Disallow the use of promises passed to a fireEvent method
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-promise-in-fire-event.md
        'testing-library/no-promise-in-fire-event': 'error',

        // Disallow the use of render in testing frameworks setup functions
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-render-in-lifecycle.md
        'testing-library/no-render-in-lifecycle': 'error',

        // Disallow wrapping Testing Library utils or empty callbacks in act
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-unnecessary-act.md
        'testing-library/no-unnecessary-act': 'error',

        // Disallow the use of multiple expect calls inside waitFor
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-multiple-assertions.md
        'testing-library/no-wait-for-multiple-assertions': 'error',

        // Disallow the use of side effects in waitFor
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-side-effects.md
        'testing-library/no-wait-for-side-effects': 'error',

        // Ensures no snapshot is generated inside of a waitFor call
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-snapshot.md
        'testing-library/no-wait-for-snapshot': 'error',

        // Suggest using explicit assertions rather than standalone queries
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-explicit-assert.md
        'testing-library/prefer-explicit-assert': 'off',

        // Suggest using find(All)By* query instead of waitFor + get(All)By* to wait for elements
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-find-by.md
        'testing-library/prefer-find-by': 'error',

        // Suggest using implicit assertions for getBy* & findBy* queries
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-implicit-assert.md
        'testing-library/prefer-implicit-assert': 'off',

        // Ensure appropriate get*/query* queries are used with their respective matchers
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-presence-queries.md
        'testing-library/prefer-presence-queries': 'error',

        // Suggest using queryBy* queries when waiting for disappearance
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-query-by-disappearance.md
        'testing-library/prefer-query-by-disappearance': 'error',

        // Ensure the configured get*/query* query is used with the corresponding matchers
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-query-matchers.md
        'testing-library/prefer-query-matchers': 'error',

        // Suggest using screen while querying
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md
        'testing-library/prefer-screen-queries': 'error',

        // Suggest using userEvent over fireEvent for simulating user interactions
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-user-event.md
        'testing-library/prefer-user-event': 'off',

        // Enforce a valid naming for return value from render
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/render-result-naming-convention.md
        'testing-library/render-result-naming-convention': 'error',
      },
    },
  ],
};
