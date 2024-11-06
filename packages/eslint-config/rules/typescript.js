/* eslint-disable import/no-unresolved */
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptEslintParser = require('@typescript-eslint/parser');

const typescriptRules = {
  plugins: {
    '@typescript-eslint': typescriptEslintPlugin,
  },
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: typescriptEslintParser,
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  rules: {
    // disable eslint default rule for ts
    'constructor-super': 'off', // ts(2335) & ts(2377)
    'getter-return': 'off', // ts(2378)
    'no-class-assign': 'off', // ts(2629)
    'no-const-assign': 'off', // ts(2588)
    'no-dupe-args': 'off', // ts(2300)
    'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
    'no-dupe-keys': 'off', // ts(1117)
    'no-func-assign': 'off', // ts(2630)
    'no-import-assign': 'off', // ts(2632) & ts(2540)
    'no-new-symbol': 'off', // ts(7009)
    'no-new-native-nonconstructor': 'off', // ts(7009)
    'no-obj-calls': 'off', // ts(2349)
    'no-setter-return': 'off', // ts(2408)
    'no-this-before-super': 'off', // ts(2376) & ts(17009)
    'no-undef': 'off', // ts(2304) & ts(2552)
    'no-unreachable': 'off', // ts(7027)
    'no-unsafe-negation': 'off', // ts(2365) & ts(2322) & ts(2358)
    'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more

    // eslint-plugin-import https://github.com/import-js/eslint-plugin-import

    // import/extensions
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],

    // @typescript-eslint/eslint-plugin https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/README.md
    // turn off ESLint equivalents

    // Require that function overload signatures be consecutive.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.mdx
    '@typescript-eslint/adjacent-overload-signatures': 'off',

    // Require consistently using either `T[]` or `Array<T>` for arrays.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/array-type.mdx
    '@typescript-eslint/array-type': 'off',

    // Disallow awaiting a value that is not a Thenable.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/await-thenable.mdx
    '@typescript-eslint/await-thenable': 'off',

    // Disallow `@ts-<directive>` comments or require descriptions after directives.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-ts-comment.mdx
    '@typescript-eslint/ban-ts-comment': 'error',

    // Disallow `// tslint:<rule-flag>` comments.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-tslint-comment.mdx
    '@typescript-eslint/ban-tslint-comment': 'off',

    // Enforce that literals on classes are exposed in a consistent style
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/class-literal-property-style.mdx
    '@typescript-eslint/class-literal-property-style': 'off',

    // Enforce that class methods utilize `this`.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/class-methods-use-this.mdx
    // 'class-methods-use-this': 'off',
    '@typescript-eslint/class-methods-use-this': 'off',

    // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-generic-constructors.mdx
    '@typescript-eslint/consistent-generic-constructors': 'off',

    // Require or disallow the `Record` type.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.mdx
    '@typescript-eslint/consistent-indexed-object-style': 'off',

    // Require `return` statements to either always or never specify values.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-return.mdx
    // 'consistent-return': 'off',
    '@typescript-eslint/consistent-return': 'off',

    // Enforce consistent usage of type assertions.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-assertions.mdx
    '@typescript-eslint/consistent-type-assertions': 'warn',

    // Enforce type definitions to consistently use either `interface` or `type`.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-definitions.mdx
    '@typescript-eslint/consistent-type-definitions': 'off',

    // Enforce consistent usage of type exports.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-exports.mdx
    '@typescript-eslint/consistent-type-exports': 'off',

    // Enforce consistent usage of type imports
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.mdx
    '@typescript-eslint/consistent-type-imports': 'off',

    // Enforce default parameters to be last.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/default-param-last.mdx
    '@typescript-eslint/default-param-last': 'off',

    // Enforce dot notation whenever possible.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/dot-notation.mdx
    // 'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'off',

    // Require explicit return types on functions and class methods.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.mdx
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Require explicit accessibility modifiers on class properties and methods.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-member-accessibility.mdx
    '@typescript-eslint/explicit-member-accessibility': 'off',

    // Require explicit return and argument types on exported functions' and classes' public class methods.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.mdx
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Require or disallow initialization in variable declarations.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/init-declarations.mdx
    '@typescript-eslint/init-declarations': 'off',

    // Enforce a maximum number of parameters in function definitions.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/max-params.mdx
    // 'max-params': 'off',
    '@typescript-eslint/max-params': 'off',

    // Require a consistent member declaration order.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/member-ordering.mdx
    '@typescript-eslint/member-ordering': 'off',

    // Enforce using a particular method signature syntax.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/method-signature-style.mdx
    '@typescript-eslint/method-signature-style': 'off',

    // Enforce naming conventions for everything across a codebase.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.mdx
    '@typescript-eslint/naming-convention': 'off',

    // Disallow generic `Array` constructors.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-array-constructor.mdx
    // 'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    // Disallow using the `delete` operator on array values.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-array-delete.mdx
    '@typescript-eslint/no-array-delete': 'off',

    // Require `.toString()` to only be called on objects which provide useful information when stringified.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-base-to-string.mdx
    '@typescript-eslint/no-base-to-string': 'off',

    // Disallow non-null assertion in locations that may be confusing.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.mdx
    '@typescript-eslint/no-confusing-non-null-assertion': 'off',

    // Require expressions of type void to appear in statement position.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-void-expression.mdx
    '@typescript-eslint/no-confusing-void-expression': 'off',

    // Disallow using code marked as `@deprecated`.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-deprecated.mdx
    '@typescript-eslint/no-deprecated': 'off',

    // Disallow duplicate class members.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-dupe-class-members.mdx
    // 'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'off',

    // Disallow duplicate enum member values.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-duplicate-enum-values.mdx
    '@typescript-eslint/no-duplicate-enum-values': 'error',

    // Disallow duplicate constituents of union or intersection types.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-duplicate-type-constituents.mdx
    '@typescript-eslint/no-duplicate-type-constituents': 'off',

    // Disallow using the `delete` operator on computed key expressions.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-dynamic-delete.mdx
    '@typescript-eslint/no-dynamic-delete': 'off',

    // Disallow empty functions.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-function.mdx
    // 'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',

    // Disallow accidentally using the "empty object" type.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-object-type.mdx
    '@typescript-eslint/no-empty-object-type': 'error',

    // Disallow the `any` type.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-explicit-any.mdx
    '@typescript-eslint/no-explicit-any': 'error',

    // Disallow extra non-null assertions.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.mdx
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    // Disallow classes used as namespaces.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-extraneous-class.mdx
    '@typescript-eslint/no-extraneous-class': 'off',

    // Require Promise-like statements to be handled appropriately.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-floating-promises.mdx
    '@typescript-eslint/no-floating-promises': 'off',

    // Disallow iterating over an array with a for-in loop.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-for-in-array.mdx
    '@typescript-eslint/no-for-in-array': 'off',

    // Disallow the use of `eval()`-like methods.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-implied-eval.mdx
    // 'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'off',

    // Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-import-type-side-effects.mdx
    '@typescript-eslint/no-import-type-side-effects': 'off',

    // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-inferrable-types.mdx
    '@typescript-eslint/no-inferrable-types': 'off',

    // Disallow `this` keywords outside of classes or class-like objects.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-invalid-this.mdx
    // 'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'off',

    // Disallow `void` type outside of generic or return types.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-invalid-void-type.mdx
    '@typescript-eslint/no-invalid-void-type': 'off',

    // Disallow function declarations that contain unsafe references inside loop statements.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-loop-func.mdx
    // 'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'off',

    // import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-magic-numbers.mdx
    // 'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',

    // Disallow the `void` operator except when used to discard a value.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-meaningless-void-operator.mdx
    '@typescript-eslint/no-meaningless-void-operator': 'off',

    // Enforce valid definition of `new` and `constructor`.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-new.mdx
    '@typescript-eslint/no-misused-new': 'error',

    // Disallow Promises in places not designed to handle them.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-promises.mdx
    '@typescript-eslint/no-misused-promises': 'off',

    // Disallow enums from having both number and string members.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-mixed-enums.mdx
    '@typescript-eslint/no-mixed-enums': 'off',

    // Disallow TypeScript namespaces.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-namespace.mdx
    '@typescript-eslint/no-namespace': 'error',

    // Disallow non-null assertions in the left operand of a nullish coalescing operator.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.mdx
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off',

    // Disallow non-null assertions after an optional chain expression.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.mdx
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    // Disallow non-null assertions using the `!` postfix operator.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-assertion.mdx
    '@typescript-eslint/no-non-null-assertion': 'off',

    // Disallow variable redeclaration.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-redeclare.mdx
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    // Disallow members of unions and intersections that do nothing or override type information.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-redundant-type-constituents.mdx
    '@typescript-eslint/no-redundant-type-constituents': 'off',

    // Disallow invocation of `require()`.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-require-imports.mdx
    '@typescript-eslint/no-require-imports': 'error',

    // Disallow specified modules when loaded by `import`.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-restricted-imports.mdx
    // 'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': 'off',

    // Disallow certain types.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-restricted-types.mdx
    '@typescript-eslint/no-restricted-types': 'off',

    // Disallow variable declarations from shadowing variables declared in the outer scope.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-shadow.mdx
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    // Disallow aliasing `this`.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-this-alias.mdx
    '@typescript-eslint/no-this-alias': 'error',

    // Disallow unnecessary equality comparisons against boolean literals.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.mdx
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

    // Disallow conditionals where the type is always truthy or always falsy.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-condition.mdx
    '@typescript-eslint/no-unnecessary-condition': 'off',

    // Disallow unnecessary assignment of constructor property parameter.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-parameter-property-assignment.mdx
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'off',

    // Disallow unnecessary namespace qualifiers.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.mdx
    '@typescript-eslint/no-unnecessary-qualifier': 'off',

    // Disallow unnecessary template expressions.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-template-expression.mdx
    '@typescript-eslint/no-unnecessary-template-expression': 'off',

    // Disallow type arguments that are equal to the default.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.mdx
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',

    // Disallow type assertions that do not change the type of an expression.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.mdx
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',

    // Disallow unnecessary constraints on generic types.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.mdx
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    // Disallow type parameters that aren't used multiple times.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-parameters.mdx
    '@typescript-eslint/no-unnecessary-type-parameters': 'off',

    // Disallow calling a function with a value with type `any`.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-argument.mdx
    '@typescript-eslint/no-unsafe-argument': 'off',

    // Disallow assigning a value with type `any` to variables and properties.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-assignment.mdx
    '@typescript-eslint/no-unsafe-assignment': 'off',

    // Disallow calling a value with type `any`.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-call.mdx
    '@typescript-eslint/no-unsafe-call': 'off',

    // Disallow unsafe declaration merging.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-declaration-merging.mdx
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',

    // Disallow comparing an enum value with a non-enum value.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-enum-comparison.mdx
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',

    // Disallow using the unsafe built-in Function type.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-function-type.mdx
    '@typescript-eslint/no-unsafe-function-type': 'error',

    // Disallow member access on a value with type `any`.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-member-access.mdx
    '@typescript-eslint/no-unsafe-member-access': 'off',

    // Disallow returning a value with type `any` from a function.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-return.mdx
    '@typescript-eslint/no-unsafe-return': 'off',

    // Require unary negation to take a number.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-unary-minus.mdx
    '@typescript-eslint/no-unsafe-unary-minus': 'off',

    // Disallow unused expressions.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-expressions.mdx
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',

    // Disallow unused variables.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.mdx
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    // Disallow the use of variables before they are defined.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.mdx
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',

    // Disallow unnecessary constructors.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-useless-constructor.mdx
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // Disallow empty exports that don't change anything in a module file.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-useless-empty-export.mdx
    '@typescript-eslint/no-useless-empty-export': 'off',

    // Disallow using confusing built-in primitive class wrappers.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-wrapper-object-types.mdx
    '@typescript-eslint/no-wrapper-object-types': 'error',

    // Enforce non-null assertions over explicit type casts.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.mdx
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',

    // Disallow throwing non-`Error` values as exceptions.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/only-throw-error.mdx
    // 'no-throw-literal': 'off',
    '@typescript-eslint/only-throw-error': 'off',

    // Require or disallow parameter properties in class constructors.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/parameter-properties.mdx
    '@typescript-eslint/parameter-properties': 'off',

    // Enforce the use of `as const` over literal type.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-as-const.mdx
    '@typescript-eslint/prefer-as-const': 'error',

    // Require destructuring from arrays and/or objects.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-destructuring.mdx
    // 'prefer-destructuring': 'off',
    '@typescript-eslint/prefer-destructuring': 'off',

    // Require each enum member value to be explicitly initialized.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-enum-initializers.mdx
    '@typescript-eslint/prefer-enum-initializers': 'off',

    // Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-find.mdx
    '@typescript-eslint/prefer-find': 'off',

    // Enforce the use of `for-of` loop over the standard `for` loop where possible.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-for-of.mdx
    '@typescript-eslint/prefer-for-of': 'off',

    // Enforce using function types instead of interfaces with call signatures.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-function-type.mdx
    '@typescript-eslint/prefer-function-type': 'off',

    // Enforce `includes` method over `indexOf` method.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-includes.mdx
    '@typescript-eslint/prefer-includes': 'off',

    // Require all enum members to be literal values.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.mdx
    '@typescript-eslint/prefer-literal-enum-member': 'off',

    // Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.mdx
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    // Enforce using the nullish coalescing operator instead of logical assignments or chaining.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.mdx
    '@typescript-eslint/prefer-nullish-coalescing': 'off',

    // Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-optional-chain.mdx
    '@typescript-eslint/prefer-optional-chain': 'off',

    // Require using Error objects as Promise rejection reasons.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-promise-reject-errors.mdx
    // 'prefer-promise-reject-errors': 'off',
    '@typescript-eslint/prefer-promise-reject-errors': 'off',

    // Require private members to be marked as `readonly` if they're never modified outside of the constructor.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-readonly.mdx
    '@typescript-eslint/prefer-readonly': 'off',

    // Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.mdx
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',

    // Enforce using type parameter when calling `Array#reduce` instead of casting.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.mdx
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',

    // Enforce `RegExp#exec` over `String#match` if no global flag is provided.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-regexp-exec.mdx
    '@typescript-eslint/prefer-regexp-exec': 'off',

    // Enforce that `this` is used when only `this` type is returned.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-return-this-type.mdx
    '@typescript-eslint/prefer-return-this-type': 'off',

    // Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.mdx
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',

    // Require any function or method that returns a Promise to be marked async.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/promise-function-async.mdx
    '@typescript-eslint/promise-function-async': 'off',

    // Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/require-array-sort-compare.mdx
    '@typescript-eslint/require-array-sort-compare': 'off',

    // Disallow async functions which do not return promises and have no `await` expression.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/require-await.mdx
    // 'require-await': 'off',
    '@typescript-eslint/require-await': 'off',

    // Require both operands of addition to be the same type and be `bigint`, `number`, or `string`.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/restrict-plus-operands.mdx
    '@typescript-eslint/restrict-plus-operands': 'off',

    // Enforce template literal expressions to be of `string` type.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/restrict-template-expressions.mdx
    '@typescript-eslint/restrict-template-expressions': 'off',

    // Enforce consistent awaiting of returned promises.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/return-await.mdx
    // 'no-return-await': 'off',
    '@typescript-eslint/return-await': 'off',

    // Disallow certain types in boolean expressions.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/strict-boolean-expressions.mdx
    '@typescript-eslint/strict-boolean-expressions': 'off',

    // Require switch-case statements to be exhaustive.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.mdx
    '@typescript-eslint/switch-exhaustiveness-check': 'off',

    // Disallow certain triple slash directives in favor of ES6-style import declarations.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/triple-slash-reference.mdx
    '@typescript-eslint/triple-slash-reference': 'error',

    // Require type annotations in certain places.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/typedef.mdx
    '@typescript-eslint/typedef': 'off',

    // Enforce unbound methods are called with their expected scope.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/unbound-method.mdx
    '@typescript-eslint/unbound-method': 'off',

    // Disallow two overloads that could be unified into one with a union or an optional/rest parameter.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/unified-signatures.mdx
    '@typescript-eslint/unified-signatures': 'off',

    // Enforce typing arguments in Promise rejection callbacks as `unknown`.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/use-unknown-in-catch-callback-variable.mdx
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
  },
};

module.exports = {
  typescriptRules,
};
