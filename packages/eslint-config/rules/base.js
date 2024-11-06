const globals = require('globals');
const importConfig = require('./import');

module.exports = [
  ...importConfig,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          generators: false,
          objectLiteralDuplicateProperties: false,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025,
      },
    },
    rules: {
      // eslint https://eslint.org
      // Possible Problems - These rules relate to possible logic errors in code

      // Enforce return statements in callbacks of array methods
      // https://eslint.org/docs/latest/rules/array-callback-return
      'array-callback-return': ['error', { allowImplicit: true }],

      // Require super() calls in constructors
      // https://eslint.org/docs/latest/rules/constructor-super
      'constructor-super': 'error',

      // Enforce "for" loop update clause moving the counter in the right direction
      // https://eslint.org/docs/latest/rules/for-direction
      'for-direction': 'error',

      // Enforce return statements in getters
      // https://eslint.org/docs/latest/rules/getter-return
      'getter-return': ['error', { allowImplicit: true }],

      // Disallow using an async function as a Promise executor
      // https://eslint.org/docs/latest/rules/no-async-promise-executor
      'no-async-promise-executor': 'error',

      // Disallow await inside of loops
      // https://eslint.org/docs/lates/rules/no-await-in-loop
      'no-await-in-loop': 'error',

      // Disallow reassigning class members
      // https://eslint.org/docs/lates/rules/no-class-assign
      'no-class-assign': 'error',

      // Disallow comparing against -0
      // https://eslint.org/docs/lates/rules/no-compare-neg-zero
      'no-compare-neg-zero': 'error',

      // Disallow assignment operators in conditional expressions
      // https://eslint.org/docs/lates/rules/no-cond-assign
      'no-cond-assign': ['error', 'always'],

      // Disallow reassigning const variables
      // https://eslint.org/docs/lates/rules/no-const-assign
      'no-const-assign': 'error',

      // Disallow expressions where the operation doesn't affect the value
      // https://eslint.org/docs/lates/rules/no-constant-binary-expression
      'no-constant-binary-expression': 'off',

      // Disallow constant expressions in conditions
      // https://eslint.org/docs/lates/rules/no-constant-condition
      'no-constant-condition': 'warn',

      // Disallow returning value from constructor
      // https://eslint.org/docs/lates/rules/no-constructor-return
      'no-constructor-return': 'error',

      // Disallow control characters in regular expressions
      // https://eslint.org/docs/lates/rules/no-control-regex
      'no-control-regex': 'error',

      // Disallow the use of debugger
      // https://eslint.org/docs/lates/rules/no-debugger
      'no-debugger': 'error',

      // Disallow duplicate arguments in function definitions
      // https://eslint.org/docs/lates/rules/no-dupe-args
      'no-dupe-args': 'error',

      // Disallow duplicate class members
      // https://eslint.org/docs/lates/rules/no-dupe-class-members
      'no-dupe-class-members': 'error',

      // Disallow duplicate conditions in if-else-if chains
      // https://eslint.org/docs/lates/rules/no-dupe-else-if
      'no-dupe-else-if': 'error',

      // Disallow duplicate keys in object literals
      // https://eslint.org/docs/lates/rules/no-dupe-keys
      'no-dupe-keys': 'error',

      // Disallow duplicate case labels
      // https://eslint.org/docs/latest/rules/no-duplicate-case
      'no-duplicate-case': 'error',

      // Disallow duplicate module imports
      // https://eslint.org/docs/latest/rules/no-duplicate-imports
      'no-duplicate-imports': 'off',

      // Disallow empty character classes in regular expressions
      // https://eslint.org/docs/latest/rules/no-empty-character-class
      'no-empty-character-class': 'error',

      // Disallow empty destructuring patterns
      // https://eslint.org/docs/latest/rules/no-empty-pattern
      'no-empty-pattern': 'error',

      // Disallow reassigning exceptions in catch clauses
      // https://eslint.org/docs/latest/rules/no-ex-assign
      'no-ex-assign': 'error',

      // Disallow fallthrough of case statements
      // https://eslint.org/docs/latest/rules/no-fallthrough
      'no-fallthrough': 'error',

      // Disallow reassigning function declarations
      // https://eslint.org/docs/latest/rules/no-func-assign
      'no-func-assign': 'error',

      // Disallow assigning to imported bindings
      // https://eslint.org/docs/latest/rules/no-import-assign
      'no-import-assign': 'error',

      // Disallow variable or function declarations in nested blocks
      // https://eslint.org/docs/latest/rules/no-inner-declarations
      'no-inner-declarations': 'error',

      // Disallow invalid regular expression strings in RegExp constructors
      // https://eslint.org/docs/latest/rules/no-invalid-regexp
      'no-invalid-regexp': 'error',

      // Disallow irregular whitespace
      // https://eslint.org/docs/latest/rules/no-irregular-whitespace
      'no-irregular-whitespace': 'error',

      // Disallow literal numbers that lose precision
      // https://eslint.org/docs/latest/rules/no-loss-of-precision
      'no-loss-of-precision': 'error',

      // Disallow characters which are made with multiple code points in character class syntax
      // https://eslint.org/docs/latest/rules/no-misleading-character-class
      'no-misleading-character-class': 'error',

      // Disallow new operators with global non-constructor functions
      // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
      'no-new-native-nonconstructor': 'off',

      // Disallow new operators with the Symbol object
      // https://eslint.org/docs/latest/rules/no-new-symbol
      'no-new-symbol': 'error',

      // Disallow calling global object properties as functions
      // https://eslint.org/docs/latest/rules/no-obj-calls
      'no-obj-calls': 'error',

      // Disallow returning values from Promise executor functions
      // https://eslint.org/docs/latest/rules/no-promise-executor-return
      'no-promise-executor-return': 'error',

      // Disallow calling some Object.prototype methods directly on objects
      // https://eslint.org/docs/latest/rules/no-prototype-builtins
      'no-prototype-builtins': 'error',

      // Disallow assignments where both sides are exactly the same
      // https://eslint.org/docs/latest/rules/no-self-assign
      'no-self-assign': [
        'error',
        {
          props: true,
        },
      ],

      // Disallow comparisons where both sides are exactly the same
      // https://eslint.org/docs/latest/rules/no-self-compare
      'no-self-compare': 'error',

      // Disallow returning values from setters
      // https://eslint.org/docs/latest/rules/no-setter-return
      'no-setter-return': 'error',

      // Disallow sparse arrays
      // https://eslint.org/docs/latest/rules/no-sparse-arrays
      'no-sparse-arrays': 'error',

      // Disallow template literal placeholder syntax in regular strings
      // https://eslint.org/docs/latest/rules/no-template-curly-in-string
      'no-template-curly-in-string': 'error',

      // Disallow this/super before calling super() in constructors
      // https://eslint.org/docs/latest/rules/no-this-before-super
      'no-this-before-super': 'error',

      // Disallow the use of undeclared variables unless mentioned in /*global */ comments
      // https://eslint.org/docs/latest/rules/no-undef
      'no-undef': 'error',

      // Disallow confusing multiline expressions
      // https://eslint.org/docs/latest/rules/no-unexpected-multiline
      'no-unexpected-multiline': 'error',

      // Disallow unmodified loop conditions
      // https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
      'no-unmodified-loop-condition': 'off',

      // Disallow unreachable code after return, throw, continue, and break statements
      // https://eslint.org/docs/latest/rules/no-unreachable
      'no-unreachable': 'error',

      // Disallow loops with a body that allows only one iteration
      // https://eslint.org/docs/latest/rules/no-unreachable-loop
      'no-unreachable-loop': [
        'error',
        {
          ignore: [],
        },
      ],

      // Disallow control flow statements in finally blocks
      // https://eslint.org/docs/latest/rules/no-unsafe-finally
      'no-unsafe-finally': 'error',

      // Disallow negating the left operand of relational operators
      // https://eslint.org/docs/latest/rules/no-unsafe-negation
      'no-unsafe-negation': 'error',

      // Disallow use of optional chaining in contexts where the undefined value is not allowed
      // https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
      'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

      // Disallow unused private class members
      // https://eslint.org/docs/latest/rules/no-unused-private-class-members
      'no-unused-private-class-members': 'off',

      // Disallow unused variables
      // https://eslint.org/docs/latest/rules/no-unused-vars
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

      // Disallow the use of variables before they are defined
      // https://eslint.org/docs/latest/rules/no-use-before-define
      'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],

      // Disallow useless backreferences in regular expressions
      // https://eslint.org/docs/latest/rules/no-useless-backreference
      'no-useless-backreference': 'error',

      // Disallow assignments that can lead to race conditions due to usage of await or yield
      // https://eslint.org/docs/latest/rules/require-atomic-updates
      'require-atomic-updates': 'off',

      // Require calls to isNaN() when checking for NaN
      // https://eslint.org/docs/latest/rules/use-isnan
      'use-isnan': 'error',

      // Enforce comparing typeof expressions against valid strings
      // https://eslint.org/docs/latest/rules/valid-typeof
      'valid-typeof': ['error', { requireStringLiterals: true }],

      // Suggestions - These rules suggest alternate ways of doing things

      // Enforce getter and setter pairs in objects and classes
      // https://eslint.org/docs/latest/rules/accessor-pairs
      'accessor-pairs': 'off',

      // Require braces around arrow function bodies
      // https://eslint.org/docs/latest/rules/arrow-body-style
      'arrow-body-style': [
        'error',
        'as-needed',
        {
          requireReturnForObjectLiteral: false,
        },
      ],

      // Enforce the use of variables within the scope they are defined
      // https://eslint.org/docs/latest/rules/block-scoped-var
      'block-scoped-var': 'error',

      // Enforce camelcase naming convention
      // https://eslint.org/docs/latest/rules/camelcase
      camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

      // Enforce or disallow capitalization of the first letter of a comment
      // https://eslint.org/docs/latest/rules/capitalized-comments
      'capitalized-comments': [
        'off',
        'never',
        {
          line: {
            ignorePattern: '.*',
            ignoreInlineComments: true,
            ignoreConsecutiveComments: true,
          },
          block: {
            ignorePattern: '.*',
            ignoreInlineComments: true,
            ignoreConsecutiveComments: true,
          },
        },
      ],

      // Enforce that class methods utilize this
      // https://eslint.org/docs/latest/rules/class-methods-use-this
      'class-methods-use-this': [
        'error',
        {
          exceptMethods: [],
        },
      ],

      // Enforce a maximum cyclomatic complexity allowed in a program
      // https://eslint.org/docs/latest/rules/complexity
      complexity: ['off', 20],

      // Require return statements to either always or never specify values
      // https://eslint.org/docs/latest/rules/consistent-return
      'consistent-return': 'error',

      // Enforce consistent naming when capturing the current execution context
      // https://eslint.org/docs/latest/rules/consistent-this
      'consistent-this': 'off',

      // Enforce consistent brace style for all control statements
      // https://eslint.org/docs/latest/rules/curly
      curly: ['error', 'multi-line'],

      // Require default cases in switch statements
      // https://eslint.org/docs/latest/rules/default-case
      'default-case': ['error', { commentPattern: '^no default$' }],

      // Enforce default clauses in switch statements to be last
      // https://eslint.org/docs/latest/rules/default-case-last
      'default-case-last': 'error',

      // Enforce default parameters to be last
      // https://eslint.org/docs/latest/rules/default-param-last
      'default-param-last': 'error',

      // Enforce dot notation whenever possible
      // https://eslint.org/docs/latest/rules/dot-notation
      'dot-notation': ['error', { allowKeywords: true }],

      // Require the use of === and !==
      // https://eslint.org/docs/latest/rules/eqeqeq
      eqeqeq: ['error', 'always', { null: 'ignore' }],

      // Require function names to match the name of the variable or property to which they are assigned
      // https://eslint.org/docs/latest/rules/func-name-matching
      'func-name-matching': [
        'off',
        'always',
        {
          includeCommonJSModuleExports: false,
          considerPropertyDescriptor: true,
        },
      ],

      // Require or disallow named function expressions
      // https://eslint.org/docs/latest/rules/func-names
      'func-names': 'warn',

      // Enforce the consistent use of either function declarations or expressions
      // https://eslint.org/docs/latest/rules/func-style
      'func-style': ['off', 'expression'],

      // Require grouped accessor pairs in object literals and classes
      // https://eslint.org/docs/latest/rules/grouped-accessor-pairs
      'grouped-accessor-pairs': 'error',

      // Require for-in loops to include an if statement
      // https://eslint.org/docs/latest/rules/guard-for-in
      'guard-for-in': 'error',

      // Disallow specified identifiers
      // https://eslint.org/docs/latest/rules/id-denylist
      'id-denylist': 'off',

      // Enforce minimum and maximum identifier lengths
      // https://eslint.org/docs/latest/rules/id-length
      'id-length': 'off',

      // Require identifiers to match a specified regular expression
      // https://eslint.org/docs/latest/rules/id-match
      'id-match': 'off',

      // Require or disallow initialization in variable declarations
      // https://eslint.org/docs/latest/rules/init-declarations
      'init-declarations': 'off',

      // Require or disallow logical assignment operator shorthand
      // https://eslint.org/docs/latest/rules/logical-assignment-operators
      'logical-assignment-operators': 'off',

      // Enforce a maximum number of classes per file
      // https://eslint.org/docs/latest/rules/max-classes-per-file
      'max-classes-per-file': ['error', 1],

      // Enforce a maximum depth that blocks can be nested
      // https://eslint.org/docs/latest/rules/max-depth
      'max-depth': ['off', 4],

      // Enforce a maximum number of lines per file
      // https://eslint.org/docs/latest/rules/max-lines
      'max-lines': [
        'off',
        {
          max: 300,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      // Enforce a maximum number of lines of code in a function
      // https://eslint.org/docs/latest/rules/max-lines-per-function
      'max-lines-per-function': [
        'off',
        {
          max: 50,
          skipBlankLines: true,
          skipComments: true,
          IIFEs: true,
        },
      ],

      // Enforce a maximum depth that callbacks can be nested
      // https://eslint.org/docs/latest/rules/max-nested-callbacks
      'max-nested-callbacks': 'off',

      // Enforce a maximum number of parameters in function definitions
      // https://eslint.org/docs/latest/rules/max-params
      'max-params': ['off', 3],

      // Enforce a maximum number of statements allowed in function blocks
      // https://eslint.org/docs/latest/rules/max-statements
      'max-statements': ['off', 10],

      // Enforce a particular style for multiline comments
      // https://eslint.org/docs/latest/rules/multiline-comment-style
      'multiline-comment-style': ['off', 'starred-block'],

      // Require constructor names to begin with a capital letter
      // https://eslint.org/docs/latest/rules/new-cap
      'new-cap': [
        'error',
        {
          newIsCap: true,
          newIsCapExceptions: [],
          capIsNew: false,
          capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
        },
      ],

      // Disallow the use of alert, confirm, and prompt
      // https://eslint.org/docs/latest/rules/no-alert
      'no-alert': 'warn',

      // Disallow Array constructors
      // https://eslint.org/docs/latest/rules/no-array-constructor
      'no-array-constructor': 'error',

      // Disallow bitwise operators
      // https://eslint.org/docs/latest/rules/no-bitwise
      'no-bitwise': 'error',

      // Disallow the use of arguments.caller or arguments.callee
      // https://eslint.org/docs/latest/rules/no-caller
      'no-caller': 'error',

      // Disallow lexical declarations in case clauses
      // https://eslint.org/docs/latest/rules/no-case-declarations
      'no-case-declarations': 'error',

      // Disallow the use of console
      // https://eslint.org/docs/latest/rules/no-console
      'no-console': [
        'error',
        {
          allow: ['info', 'warn', 'error'],
        },
      ],

      // Disallow continue statements
      // https://eslint.org/docs/latest/rules/no-continue
      'no-continue': 'error',

      // Disallow deleting variables
      // https://eslint.org/docs/latest/rules/no-delete-var
      'no-delete-var': 'error',

      // Disallow equal signs explicitly at the beginning of regular expressions
      // https://eslint.org/docs/latest/rules/no-div-regex
      'no-div-regex': 'off',

      // Disallow else blocks after return statements in if statements
      // https://eslint.org/docs/latest/rules/no-else-return
      'no-else-return': ['error', { allowElseIf: false }],

      // Disallow empty block statements
      // https://eslint.org/docs/latest/rules/no-empty
      'no-empty': 'error',

      // Disallow empty functions
      // https://eslint.org/docs/latest/rules/no-empty-function
      'no-empty-function': [
        'error',
        {
          allow: ['arrowFunctions', 'functions', 'methods'],
        },
      ],

      // Disallow empty static blocks
      // https://eslint.org/docs/latest/rules/no-empty-static-block
      'no-empty-static-block': 'off',

      // Disallow null comparisons without type-checking operators
      // https://eslint.org/docs/latest/rules/no-eq-null
      'no-eq-null': 'off',

      // Disallow the use of eval()
      // https://eslint.org/docs/latest/rules/no-eval
      'no-eval': 'error',

      // Disallow extending native types
      // https://eslint.org/docs/latest/rules/no-extend-native
      'no-extend-native': 'error',

      // Disallow unnecessary calls to .bind()
      // https://eslint.org/docs/latest/rules/no-extra-bind
      'no-extra-bind': 'error',

      // Disallow unnecessary boolean casts
      // https://eslint.org/docs/latest/rules/no-extra-boolean-cast
      'no-extra-boolean-cast': 'error',

      // Disallow unnecessary labels
      // https://eslint.org/docs/latest/rules/no-extra-label
      'no-extra-label': 'error',

      // Disallow assignments to native objects or read-only global variables
      // https://eslint.org/docs/latest/rules/no-global-assign
      'no-global-assign': ['error', { exceptions: [] }],

      // Disallow shorthand type conversions
      // https://eslint.org/docs/latest/rules/no-implicit-coercion
      'no-implicit-coercion': [
        'off',
        {
          boolean: false,
          number: true,
          string: true,
          allow: [],
        },
      ],

      // Disallow declarations in the global scope
      // https://eslint.org/docs/latest/rules/no-implicit-globals
      'no-implicit-globals': 'off',

      // Disallow the use of eval()-like methods
      // https://eslint.org/docs/latest/rules/no-implied-eval
      'no-implied-eval': 'error',

      // Disallow inline comments after code
      // https://eslint.org/docs/latest/rules/no-inline-comments
      'no-inline-comments': 'off',

      // Disallow use of this in contexts where the value of this is undefined
      // https://eslint.org/docs/latest/rules/no-invalid-this
      'no-invalid-this': 'off',

      // Disallow the use of the __iterator__ property
      // https://eslint.org/docs/latest/rules/no-iterator
      'no-iterator': 'error',

      // Disallow labels that share a name with a variable
      // https://eslint.org/docs/latest/rules/no-label-var
      'no-label-var': 'error',

      // Disallow labeled statements
      // https://eslint.org/docs/latest/rules/no-labels
      'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

      // Disallow unnecessary nested blocks
      // https://eslint.org/docs/latest/rules/no-lone-blocks
      'no-lone-blocks': 'error',

      // Disallow if statements as the only statement in else blocks
      // https://eslint.org/docs/latest/rules/no-lonely-if
      'no-lonely-if': 'error',

      // Disallow function declarations that contain unsafe references inside loop statements
      // https://eslint.org/docs/latest/rules/no-loop-func
      'no-loop-func': 'error',

      // Disallow magic numbers
      // https://eslint.org/docs/latest/rules/no-magic-numbers
      'no-magic-numbers': [
        'off',
        {
          ignore: [],
          ignoreArrayIndexes: true,
          enforceConst: true,
          detectObjects: false,
        },
      ],

      // Disallow use of chained assignment expressions
      // https://eslint.org/docs/latest/rules/no-multi-assign
      'no-multi-assign': ['error'],

      // Disallow multiline strings
      // https://eslint.org/docs/latest/rules/no-multi-str
      'no-multi-str': 'error',

      // Disallow negated conditions
      // https://eslint.org/docs/latest/rules/no-negated-condition
      'no-negated-condition': 'off',

      // Disallow nested ternary expressions
      // https://eslint.org/docs/latest/rules/no-nested-ternary
      'no-nested-ternary': 'error',

      // Disallow new operators outside of assignments or comparisons
      // https://eslint.org/docs/latest/rules/no-new
      'no-new': 'error',

      // Disallow new operators with the Function object
      // https://eslint.org/docs/latest/rules/no-new-func
      'no-new-func': 'error',

      // Disallow new operators with the String, Number, and Boolean objects
      // https://eslint.org/docs/latest/rules/no-new-wrappers
      'no-new-wrappers': 'error',

      // Disallow \8 and \9 escape sequences in string literals
      // https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
      'no-nonoctal-decimal-escape': 'error',

      // Disallow calls to the Object constructor without an argument
      // https://eslint.org/docs/latest/rules/no-object-constructor
      'no-object-constructor': 'off',

      // Disallow octal literals
      // https://eslint.org/docs/latest/rules/no-octal
      'no-octal': 'error',

      // Disallow octal escape sequences in string literals
      // https://eslint.org/docs/latest/rules/no-octal-escape
      'no-octal-escape': 'error',

      //
      //
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: [
            'acc',
            'accumulator',
            'e',
            'ctx',
            'context',
            'req',
            'request',
            'res',
            'response',
            '$scope',
            'staticContext',
          ],
        },
      ],

      // Disallow the unary operators ++ and --
      // https://eslint.org/docs/latest/rules/no-plusplus
      'no-plusplus': [
        'error',
        {
          allowForLoopAfterthoughts: true,
        },
      ],

      // Disallow the use of the __proto__ property
      // https://eslint.org/docs/latest/rules/no-proto
      'no-proto': 'error',

      // Disallow variable redeclaration
      // https://eslint.org/docs/latest/rules/no-redeclare
      'no-redeclare': 'error',

      // Disallow multiple spaces in regular expressions
      // https://eslint.org/docs/latest/rules/no-regex-spaces
      'no-regex-spaces': 'error',

      // Disallow specified names in exports
      // https://eslint.org/docs/latest/rules/no-restricted-exports
      'no-restricted-exports': [
        'error',
        {
          restrictedNamedExports: ['default', 'then'],
        },
      ],

      // Disallow specified global variables
      // https://eslint.org/docs/latest/rules/no-restricted-globals
      'no-restricted-globals': [
        'error',
        {
          name: 'isFinite',
          message: 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
        },
        {
          name: 'isNaN',
          message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
        },
        'addEventListener',
        'blur',
        'close',
        'closed',
        'confirm',
        'defaultStatus',
        'defaultstatus',
        'event',
        'external',
        'find',
        'focus',
        'frameElement',
        'frames',
        'history',
        'innerHeight',
        'innerWidth',
        'length',
        'location',
        'locationbar',
        'menubar',
        'moveBy',
        'moveTo',
        'name',
        'onblur',
        'onerror',
        'onfocus',
        'onload',
        'onresize',
        'onunload',
        'open',
        'opener',
        'opera',
        'outerHeight',
        'outerWidth',
        'pageXOffset',
        'pageYOffset',
        'parent',
        'print',
        'removeEventListener',
        'resizeBy',
        'resizeTo',
        'screen',
        'screenLeft',
        'screenTop',
        'screenX',
        'screenY',
        'scroll',
        'scrollbars',
        'scrollBy',
        'scrollTo',
        'scrollX',
        'scrollY',
        'self',
        'status',
        'statusbar',
        'stop',
        'toolbar',
        'top',
      ],

      // Disallow specified modules when loaded by import
      // https://eslint.org/docs/latest/rules/no-restricted-imports
      'no-restricted-imports': [
        'off',
        {
          paths: [],
          patterns: [],
        },
      ],

      // Disallow certain properties on certain objects
      // https://eslint.org/docs/latest/rules/no-restricted-properties
      'no-restricted-properties': [
        'error',
        {
          object: 'arguments',
          property: 'callee',
          message: 'arguments.callee is deprecated',
        },
        {
          object: 'global',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead',
        },
        {
          object: 'self',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead',
        },
        {
          object: 'window',
          property: 'isFinite',
          message: 'Please use Number.isFinite instead',
        },
        {
          object: 'global',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead',
        },
        {
          object: 'self',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead',
        },
        {
          object: 'window',
          property: 'isNaN',
          message: 'Please use Number.isNaN instead',
        },
        {
          property: '__defineGetter__',
          message: 'Please use Object.defineProperty instead.',
        },
        {
          property: '__defineSetter__',
          message: 'Please use Object.defineProperty instead.',
        },
        {
          object: 'Math',
          property: 'pow',
          message: 'Use the exponentiation operator (**) instead.',
        },
      ],

      // Disallow specified syntax
      // https://eslint.org/docs/latest/rules/no-restricted-syntax
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ForInStatement',
          message:
            'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        },
        {
          selector: 'ForOfStatement',
          message:
            'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
        },
        {
          selector: 'LabeledStatement',
          message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
          selector: 'WithStatement',
          message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
      ],

      // Disallow assignment operators in return statements
      // https://eslint.org/docs/latest/rules/no-return-assign
      'no-return-assign': ['error', 'always'],

      // Disallow javascript: urls
      // https://eslint.org/docs/latest/rules/no-script-url
      'no-script-url': 'error',

      // Disallow comma operators
      // https://eslint.org/docs/latest/rules/no-sequences
      'no-sequences': 'error',

      // Disallow variable declarations from shadowing variables declared in the outer scope
      // https://eslint.org/docs/latest/rules/no-shadow
      'no-shadow': 'error',

      // Disallow identifiers from shadowing restricted names
      // https://eslint.org/docs/latest/rules/no-shadow-restricted-names
      'no-shadow-restricted-names': 'error',

      // Disallow ternary operators
      // https://eslint.org/docs/latest/rules/no-ternary
      'no-ternary': 'off',

      // Disallow throwing literals as exceptions
      // https://eslint.org/docs/latest/rules/no-throw-literal
      'no-throw-literal': 'error',

      // Disallow initializing variables to undefined
      // https://eslint.org/docs/latest/rules/no-undef-init
      'no-undef-init': 'error',

      // Disallow the use of undefined as an identifier
      // https://eslint.org/docs/latest/rules/no-undefined
      'no-undefined': 'off',

      // Disallow dangling underscores in identifiers
      // https://eslint.org/docs/latest/rules/no-underscore-dangle
      'no-underscore-dangle': [
        'error',
        {
          allow: [],
          allowAfterThis: false,
          allowAfterSuper: false,
          enforceInMethodNames: true,
        },
      ],

      // Disallow ternary operators when simpler alternatives exist
      // https://eslint.org/docs/latest/rules/no-unneeded-ternary
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],

      // Disallow unused expressions
      // no-unused-expressions
      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: false,
          allowTernary: false,
          allowTaggedTemplates: false,
        },
      ],

      // Disallow unused labels
      // https://eslint.org/docs/latest/rules/no-unused-labels
      'no-unused-labels': 'error',

      // Disallow unnecessary calls to .call() and .apply()
      // https://eslint.org/docs/latest/rules/no-useless-call
      'no-useless-call': 'off',

      // Disallow unnecessary catch clauses
      // https://eslint.org/docs/latest/rules/no-useless-catch
      'no-useless-catch': 'error',

      // Disallow unnecessary computed property keys in objects and classes
      // https://eslint.org/docs/latest/rules/no-useless-computed-key
      'no-useless-computed-key': 'error',

      // Disallow unnecessary concatenation of literals or template literals
      // https://eslint.org/docs/latest/rules/no-useless-concat
      'no-useless-concat': 'error',

      // Disallow unnecessary constructors
      // https://eslint.org/docs/latest/rules/no-useless-constructor
      'no-useless-constructor': 'error',

      // Disallow unnecessary escape characters
      // https://eslint.org/docs/latest/rules/no-useless-escape
      'no-useless-escape': 'error',

      // Disallow renaming import, export, and destructured assignments to the same name
      // https://eslint.org/docs/latest/rules/no-useless-rename
      'no-useless-rename': [
        'error',
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false,
        },
      ],

      // Require let or const instead of var
      // https://eslint.org/docs/latest/rules/no-var
      'no-var': 'error',

      // Disallow redundant return statements
      // https://eslint.org/docs/latest/rules/no-useless-return
      'no-useless-return': 'error',

      // Disallow void operators
      // https://eslint.org/docs/latest/rules/no-void
      'no-void': 'error',

      // Disallow specified warning terms in comments
      // https://eslint.org/docs/latest/rules/no-warning-comments
      'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

      // Disallow with statements
      // https://eslint.org/docs/latest/rules/no-with
      'no-with': 'error',

      // Require or disallow method and property shorthand syntax for object literals
      // https://eslint.org/docs/latest/rules/object-shorthand
      'object-shorthand': [
        'error',
        'always',
        {
          ignoreConstructors: false,
          avoidQuotes: true,
        },
      ],

      // Enforce variables to be declared either together or separately in functions
      // https://eslint.org/docs/latest/rules/one-var
      'one-var': ['error', 'never'],

      // Require or disallow assignment operator shorthand where possible
      // https://eslint.org/docs/latest/rules/operator-assignment
      'operator-assignment': ['error', 'always'],

      // Require using arrow functions for callbacks
      // https://eslint.org/docs/latest/rules/prefer-arrow-callback
      'prefer-arrow-callback': [
        'error',
        {
          allowNamedFunctions: false,
          allowUnboundThis: true,
        },
      ],

      // Require const declarations for variables that are never reassigned after declared
      // https://eslint.org/docs/latest/rules/prefer-const
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: true,
        },
      ],

      // Require destructuring from arrays and/or objects
      // https://eslint.org/docs/latest/rules/prefer-destructuring
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: true,
            object: false,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],

      // Disallow the use of Math.pow in favor of the ** operator
      // https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
      'prefer-exponentiation-operator': 'error',

      // Enforce using named capture group in regular expression
      // https://eslint.org/docs/latest/rules/prefer-named-capture-group
      'prefer-named-capture-group': 'off',

      // Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
      // https://eslint.org/docs/latest/rules/prefer-numeric-literals
      'prefer-numeric-literals': 'error',

      // Disallow use of Object.prototype.hasOwnProperty.call() and prefer use of Object.hasOwn()
      // https://eslint.org/docs/latest/rules/prefer-object-has-own
      'prefer-object-has-own': 'off',

      // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
      // https://eslint.org/docs/latest/rules/prefer-object-spread
      'prefer-object-spread': 'error',

      // Require using Error objects as Promise rejection reasons
      // https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
      'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

      // Disallow use of the RegExp constructor in favor of regular expression literals
      // https://eslint.org/docs/latest/rules/prefer-regex-literals
      'prefer-regex-literals': [
        'error',
        {
          disallowRedundantWrapping: true,
        },
      ],

      // Require rest parameters instead of arguments
      // https://eslint.org/docs/latest/rules/prefer-rest-params
      'prefer-rest-params': 'error',

      // Require spread operators instead of .apply()
      // https://eslint.org/docs/latest/rules/prefer-spread
      'prefer-spread': 'error',

      // Require template literals instead of string concatenation
      // https://eslint.org/docs/latest/rules/prefer-template
      'prefer-template': 'error',

      // Enforce the consistent use of the radix argument when using parseInt()
      // https://eslint.org/docs/latest/rules/radix
      radix: 'error',

      // Disallow async functions which have no await expression
      // https://eslint.org/docs/latest/rules/require-await
      'require-await': 'off',

      // Enforce the use of u or v flag on RegExp
      // https://eslint.org/docs/latest/rules/require-unicode-regexp
      'require-unicode-regexp': 'off',

      // Require generator functions to contain yield
      // https://eslint.org/docs/latest/rules/require-yield
      'require-yield': 'error',

      // Enforce sorted import declarations within modules
      // https://eslint.org/docs/latest/rules/sort-imports
      'sort-imports': [
        'off',
        {
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],

      // Require object keys to be sorted
      // https://eslint.org/docs/latest/rules/sort-keys
      'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

      // Require variables within the same declaration block to be sorted
      // https://eslint.org/docs/latest/rules/sort-vars
      'sort-vars': 'off',

      // Require or disallow strict mode directives
      // https://eslint.org/docs/latest/rules/strict
      strict: ['error', 'never'],

      // Require symbol descriptions
      // https://eslint.org/docs/latest/rules/symbol-description
      'symbol-description': 'error',

      // Require var declarations be placed at the top of their containing scope
      // https://eslint.org/docs/latest/rules/vars-on-top
      'vars-on-top': 'error',

      // Require or disallow "Yoda" conditions
      // https://eslint.org/docs/latest/rules/yoda
      yoda: 'error',

      // Layout & Formatting - These rules care about how the code looks rather than how it executes

      // Enforce position of line comments
      // https://eslint.org/docs/latest/rules/line-comment-position
      'line-comment-position': [
        'off',
        {
          position: 'above',
          ignorePattern: '',
          applyDefaultPatterns: true,
        },
      ],

      // Require or disallow Unicode byte order mark (BOM)
      // https://eslint.org/docs/latest/rules/unicode-bom
      'unicode-bom': ['error', 'never'],

      // Deprecated - These rules have been deprecated in accordance with the deprecation policy, and replaced by newer rules

      'array-bracket-newline': ['off', 'consistent'],
      'array-bracket-spacing': ['error', 'never'],
      'array-element-newline': ['off', { multiline: true, minItems: 3 }],
      'arrow-parens': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'block-spacing': ['error', 'always'],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'callback-return': 'off',
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'always-multiline',
        },
      ],
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': [
        'error',
        'last',
        {
          exceptions: {
            ArrayExpression: false,
            ArrayPattern: false,
            ArrowFunctionExpression: false,
            CallExpression: false,
            FunctionDeclaration: false,
            FunctionExpression: false,
            ImportDeclaration: false,
            ObjectExpression: false,
            ObjectPattern: false,
            VariableDeclaration: false,
            NewExpression: false,
          },
        },
      ],
      'computed-property-spacing': ['error', 'never'],
      'dot-location': ['error', 'property'],
      'eol-last': ['error', 'always'],
      'func-call-spacing': ['error', 'never'],
      'function-call-argument-newline': ['error', 'consistent'],
      'function-paren-newline': ['error', 'multiline-arguments'],
      'generator-star-spacing': ['error', { before: false, after: true }],
      'global-require': 'error',
      'handle-callback-err': 'off',
      // Replaced by id-denylist
      'id-blacklist': 'off',
      'implicit-arrow-linebreak': ['error', 'beside'],
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          FunctionDeclaration: {
            parameters: 1,
            body: 1,
          },
          FunctionExpression: {
            parameters: 1,
            body: 1,
          },
          CallExpression: {
            arguments: 1,
          },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: false,
          ignoredNodes: [
            'JSXElement',
            'JSXElement > *',
            'JSXAttribute',
            'JSXIdentifier',
            'JSXNamespacedName',
            'JSXMemberExpression',
            'JSXSpreadAttribute',
            'JSXExpressionContainer',
            'JSXOpeningElement',
            'JSXClosingElement',
            'JSXFragment',
            'JSXOpeningFragment',
            'JSXClosingFragment',
            'JSXText',
            'JSXEmptyExpression',
            'JSXSpreadChild',
          ],
          ignoreComments: false,
        },
      ],
      // Replaced by indent
      'indent-legacy': 'off',
      'jsx-quotes': ['off', 'prefer-double'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'keyword-spacing': [
        'error',
        {
          before: true,
          after: true,
          overrides: {
            return: { after: true },
            throw: { after: true },
            case: { after: true },
          },
        },
      ],
      'linebreak-style': ['error', 'unix'],
      'lines-around-comment': 'off',
      // Replaced by padding-line-between-statements
      'lines-around-directive': [
        'error',
        {
          before: 'always',
          after: 'always',
        },
      ],
      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
      'max-len': [
        'error',
        100,
        2,
        {
          ignoreUrls: true,
          ignoreComments: false,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'max-statements-per-line': ['off', { max: 1 }],
      'multiline-ternary': ['off', 'never'],
      'new-parens': 'error',
      // Replaced by padding-line-between-statements
      'newline-after-var': 'off',
      // Replaced by padding-line-between-statements
      'newline-before-return': 'off',
      'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
      'no-buffer-constructor': 'error',
      // Replaced by no-shadow
      'no-catch-shadow': 'off',
      'no-confusing-arrow': [
        'error',
        {
          allowParens: true,
        },
      ],
      'no-extra-parens': [
        'off',
        'all',
        {
          conditionalAssign: true,
          nestedBinaryExpressions: false,
          returnAssign: false,
          ignoreJSX: 'all',
          enforceForArrowConditionals: false,
        },
      ],
      'no-extra-semi': 'error',
      'no-floating-decimal': 'error',
      'no-mixed-operators': [
        'error',
        {
          groups: [
            ['%', '**'],
            ['%', '+'],
            ['%', '-'],
            ['%', '*'],
            ['%', '/'],
            ['/', '*'],
            ['&', '|', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!=='],
            ['&&', '||'],
          ],
          allowSamePrecedence: false,
        },
      ],
      'no-mixed-requires': ['off', false],
      'no-mixed-spaces-and-tabs': 'error',
      'no-multi-spaces': [
        'error',
        {
          ignoreEOLComments: false,
        },
      ],
      'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
      // Replaced by no-global-assign
      'no-native-reassign': 'off',
      // Replaced by no-unsafe-negation
      'no-negated-in-lhs': 'off',
      // Replaced by no-object-constructor
      'no-new-object': 'error',
      'no-new-require': 'error',
      'no-path-concat': 'error',
      'no-process-env': 'off',
      'no-process-exit': 'off',
      'no-restricted-modules': 'off',
      'no-return-await': 'error',
      // Replaced by func-call-spacing
      'no-spaced-func': 'error',
      'no-sync': 'off',
      'no-tabs': 'error',
      'no-trailing-spaces': [
        'error',
        {
          skipBlankLines: false,
          ignoreComments: false,
        },
      ],
      'no-whitespace-before-property': 'error',
      'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
          ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
          ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
          ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
        },
      ],
      'object-curly-spacing': ['error', 'always'],
      'object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      'one-var-declaration-per-line': ['error', 'always'],
      'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
      'padded-blocks': [
        'error',
        {
          blocks: 'never',
          classes: 'never',
          switches: 'never',
        },
        {
          allowSingleLineBlocks: true,
        },
      ],
      'padding-line-between-statements': 'off',
      'prefer-reflect': 'off',
      'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
      quotes: ['error', 'single', { avoidEscape: true }],
      'require-jsdoc': 'off',
      'rest-spread-spacing': ['error', 'never'],
      semi: ['error', 'always'],
      'semi-spacing': ['error', { before: false, after: true }],
      'semi-style': ['error', 'last'],
      'space-before-blocks': 'error',
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'space-unary-ops': [
        'error',
        {
          words: true,
          nonwords: false,
          overrides: {},
        },
      ],
      'spaced-comment': [
        'error',
        'always',
        {
          line: {
            exceptions: ['-', '+'],
            markers: ['=', '!', '/'],
          },
          block: {
            exceptions: ['-', '+'],
            markers: ['=', '!', ':', '::'],
            balanced: true,
          },
        },
      ],
      'switch-colon-spacing': ['error', { after: true, before: false }],
      'template-curly-spacing': 'error',
      'template-tag-spacing': ['error', 'never'],
      'valid-jsdoc': 'off',
      'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
      'wrap-regex': 'off',
      'yield-star-spacing': ['error', 'after'],
    },
  },
];
