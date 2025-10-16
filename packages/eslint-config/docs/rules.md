# ESLint Rules Documentation

This documentation lists all active ESLint rules in the `@pplancq/eslint-config` configuration.

## Table of Contents

- [Base Configuration](#base-configuration)
- [React Configuration](#react-configuration)
- [Vitest Configuration](#vitest-configuration)
- [Playwright Configuration](#playwright-configuration)
- [Prettier Configuration](#prettier-configuration)

## Base Configuration

Active rules with `defineConfig()` (default configuration).

This configuration includes base rules, import rules, and TypeScript rules.

| Rule | Mode | Description | Plugin |
|------|------|-------------|--------|
| [array-bracket-spacing](https://eslint.org/docs/latest/rules/array-bracket-spacing) | error | - | eslint (core) |
| [array-callback-return](https://eslint.org/docs/latest/rules/array-callback-return) | error | Enforce return statements in callbacks of array methods | eslint (core) |
| [arrow-body-style](https://eslint.org/docs/latest/rules/arrow-body-style) | error | Require braces around arrow function bodies | eslint (core) |
| [arrow-parens](https://eslint.org/docs/latest/rules/arrow-parens) | error | - | eslint (core) |
| [arrow-spacing](https://eslint.org/docs/latest/rules/arrow-spacing) | error | - | eslint (core) |
| [block-scoped-var](https://eslint.org/docs/latest/rules/block-scoped-var) | error | Enforce the use of variables within the scope they are defined | eslint (core) |
| [block-spacing](https://eslint.org/docs/latest/rules/block-spacing) | error | - | eslint (core) |
| [brace-style](https://eslint.org/docs/latest/rules/brace-style) | error | - | eslint (core) |
| [camelcase](https://eslint.org/docs/latest/rules/camelcase) | error | - | eslint (core) |
| [class-methods-use-this](https://eslint.org/docs/latest/rules/class-methods-use-this) | error | Enforce that class methods utilize this | eslint (core) |
| [comma-dangle](https://eslint.org/docs/latest/rules/comma-dangle) | error | - | eslint (core) |
| [comma-spacing](https://eslint.org/docs/latest/rules/comma-spacing) | error | - | eslint (core) |
| [comma-style](https://eslint.org/docs/latest/rules/comma-style) | error | - | eslint (core) |
| [computed-property-spacing](https://eslint.org/docs/latest/rules/computed-property-spacing) | error | - | eslint (core) |
| [consistent-return](https://eslint.org/docs/latest/rules/consistent-return) | error | Require return statements to either always or never specify values | eslint (core) |
| [constructor-super](https://eslint.org/docs/latest/rules/constructor-super) | error | Require super() calls in constructors | eslint (core) |
| [curly](https://eslint.org/docs/latest/rules/curly) | error | - | eslint (core) |
| [default-case](https://eslint.org/docs/latest/rules/default-case) | error | Require default cases in switch statements | eslint (core) |
| [default-case-last](https://eslint.org/docs/latest/rules/default-case-last) | error | Enforce default clauses in switch statements to be last | eslint (core) |
| [default-param-last](https://eslint.org/docs/latest/rules/default-param-last) | error | Enforce default parameters to be last | eslint (core) |
| [dot-location](https://eslint.org/docs/latest/rules/dot-location) | error | - | eslint (core) |
| [dot-notation](https://eslint.org/docs/latest/rules/dot-notation) | error | Enforce dot notation whenever possible | eslint (core) |
| [eol-last](https://eslint.org/docs/latest/rules/eol-last) | error | - | eslint (core) |
| [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq) | error | - | eslint (core) |
| [for-direction](https://eslint.org/docs/latest/rules/for-direction) | error | Enforce "for" loop update clause moving the counter in the right direction | eslint (core) |
| [func-call-spacing](https://eslint.org/docs/latest/rules/func-call-spacing) | error | - | eslint (core) |
| [func-names](https://eslint.org/docs/latest/rules/func-names) | warn | Require or disallow named function expressions | eslint (core) |
| [function-call-argument-newline](https://eslint.org/docs/latest/rules/function-call-argument-newline) | error | - | eslint (core) |
| [function-paren-newline](https://eslint.org/docs/latest/rules/function-paren-newline) | error | - | eslint (core) |
| [generator-star-spacing](https://eslint.org/docs/latest/rules/generator-star-spacing) | error | - | eslint (core) |
| [getter-return](https://eslint.org/docs/latest/rules/getter-return) | error | Enforce return statements in getters | eslint (core) |
| [global-require](https://eslint.org/docs/latest/rules/global-require) | error | - | eslint (core) |
| [grouped-accessor-pairs](https://eslint.org/docs/latest/rules/grouped-accessor-pairs) | error | Require grouped accessor pairs in object literals and classes | eslint (core) |
| [guard-for-in](https://eslint.org/docs/latest/rules/guard-for-in) | error | Require for-in loops to include an if statement | eslint (core) |
| [implicit-arrow-linebreak](https://eslint.org/docs/latest/rules/implicit-arrow-linebreak) | error | - | eslint (core) |
| [indent](https://eslint.org/docs/latest/rules/indent) | error | - | eslint (core) |
| [key-spacing](https://eslint.org/docs/latest/rules/key-spacing) | error | - | eslint (core) |
| [keyword-spacing](https://eslint.org/docs/latest/rules/keyword-spacing) | error | - | eslint (core) |
| [linebreak-style](https://eslint.org/docs/latest/rules/linebreak-style) | error | - | eslint (core) |
| [lines-around-directive](https://eslint.org/docs/latest/rules/lines-around-directive) | error | Replaced by padding-line-between-statements | eslint (core) |
| [lines-between-class-members](https://eslint.org/docs/latest/rules/lines-between-class-members) | error | - | eslint (core) |
| [max-classes-per-file](https://eslint.org/docs/latest/rules/max-classes-per-file) | error | Enforce a maximum number of classes per file | eslint (core) |
| [max-len](https://eslint.org/docs/latest/rules/max-len) | error | - | eslint (core) |
| [new-cap](https://eslint.org/docs/latest/rules/new-cap) | error | Require constructor names to begin with a capital letter | eslint (core) |
| [new-parens](https://eslint.org/docs/latest/rules/new-parens) | error | - | eslint (core) |
| [newline-per-chained-call](https://eslint.org/docs/latest/rules/newline-per-chained-call) | error | - | eslint (core) |
| [no-alert](https://eslint.org/docs/latest/rules/no-alert) | warn | Disallow the use of alert, confirm, and prompt | eslint (core) |
| [no-array-constructor](https://eslint.org/docs/latest/rules/no-array-constructor) | error | Disallow Array constructors | eslint (core) |
| [no-async-promise-executor](https://eslint.org/docs/latest/rules/no-async-promise-executor) | error | Disallow using an async function as a Promise executor | eslint (core) |
| [no-await-in-loop](https://eslint.org/docs/latest/rules/no-await-in-loop) | error | Disallow await inside of loops | eslint (core) |
| [no-bitwise](https://eslint.org/docs/latest/rules/no-bitwise) | error | Disallow bitwise operators | eslint (core) |
| [no-buffer-constructor](https://eslint.org/docs/latest/rules/no-buffer-constructor) | error | - | eslint (core) |
| [no-caller](https://eslint.org/docs/latest/rules/no-caller) | error | Disallow the use of arguments.caller or arguments.callee | eslint (core) |
| [no-case-declarations](https://eslint.org/docs/latest/rules/no-case-declarations) | error | Disallow lexical declarations in case clauses | eslint (core) |
| [no-class-assign](https://eslint.org/docs/latest/rules/no-class-assign) | error | Disallow reassigning class members | eslint (core) |
| [no-compare-neg-zero](https://eslint.org/docs/latest/rules/no-compare-neg-zero) | error | Disallow comparing against -0 | eslint (core) |
| [no-cond-assign](https://eslint.org/docs/latest/rules/no-cond-assign) | error | Disallow assignment operators in conditional expressions | eslint (core) |
| [no-confusing-arrow](https://eslint.org/docs/latest/rules/no-confusing-arrow) | error | - | eslint (core) |
| [no-console](https://eslint.org/docs/latest/rules/no-console) | error | Disallow the use of console | eslint (core) |
| [no-const-assign](https://eslint.org/docs/latest/rules/no-const-assign) | error | Disallow reassigning const variables | eslint (core) |
| [no-constant-condition](https://eslint.org/docs/latest/rules/no-constant-condition) | warn | Disallow constant expressions in conditions | eslint (core) |
| [no-constructor-return](https://eslint.org/docs/latest/rules/no-constructor-return) | error | Disallow returning value from constructor | eslint (core) |
| [no-continue](https://eslint.org/docs/latest/rules/no-continue) | error | Disallow continue statements | eslint (core) |
| [no-control-regex](https://eslint.org/docs/latest/rules/no-control-regex) | error | Disallow control characters in regular expressions | eslint (core) |
| [no-debugger](https://eslint.org/docs/latest/rules/no-debugger) | error | Disallow the use of debugger | eslint (core) |
| [no-delete-var](https://eslint.org/docs/latest/rules/no-delete-var) | error | Disallow deleting variables | eslint (core) |
| [no-dupe-args](https://eslint.org/docs/latest/rules/no-dupe-args) | error | Disallow duplicate arguments in function definitions | eslint (core) |
| [no-dupe-class-members](https://eslint.org/docs/latest/rules/no-dupe-class-members) | error | Disallow duplicate class members | eslint (core) |
| [no-dupe-else-if](https://eslint.org/docs/latest/rules/no-dupe-else-if) | error | Disallow duplicate conditions in if-else-if chains | eslint (core) |
| [no-dupe-keys](https://eslint.org/docs/latest/rules/no-dupe-keys) | error | Disallow duplicate keys in object literals | eslint (core) |
| [no-duplicate-case](https://eslint.org/docs/latest/rules/no-duplicate-case) | error | Disallow duplicate case labels | eslint (core) |
| [no-else-return](https://eslint.org/docs/latest/rules/no-else-return) | error | Disallow else blocks after return statements in if statements | eslint (core) |
| [no-empty](https://eslint.org/docs/latest/rules/no-empty) | error | Disallow empty block statements | eslint (core) |
| [no-empty-character-class](https://eslint.org/docs/latest/rules/no-empty-character-class) | error | Disallow empty character classes in regular expressions | eslint (core) |
| [no-empty-function](https://eslint.org/docs/latest/rules/no-empty-function) | error | Disallow empty functions | eslint (core) |
| [no-empty-pattern](https://eslint.org/docs/latest/rules/no-empty-pattern) | error | Disallow empty destructuring patterns | eslint (core) |
| [no-eval](https://eslint.org/docs/latest/rules/no-eval) | error | Disallow the use of eval() | eslint (core) |
| [no-ex-assign](https://eslint.org/docs/latest/rules/no-ex-assign) | error | Disallow reassigning exceptions in catch clauses | eslint (core) |
| [no-extend-native](https://eslint.org/docs/latest/rules/no-extend-native) | error | Disallow extending native types | eslint (core) |
| [no-extra-bind](https://eslint.org/docs/latest/rules/no-extra-bind) | error | Disallow unnecessary calls to .bind() | eslint (core) |
| [no-extra-boolean-cast](https://eslint.org/docs/latest/rules/no-extra-boolean-cast) | error | Disallow unnecessary boolean casts | eslint (core) |
| [no-extra-label](https://eslint.org/docs/latest/rules/no-extra-label) | error | Disallow unnecessary labels | eslint (core) |
| [no-extra-semi](https://eslint.org/docs/latest/rules/no-extra-semi) | error | - | eslint (core) |
| [no-fallthrough](https://eslint.org/docs/latest/rules/no-fallthrough) | error | Disallow fallthrough of case statements | eslint (core) |
| [no-floating-decimal](https://eslint.org/docs/latest/rules/no-floating-decimal) | error | - | eslint (core) |
| [no-func-assign](https://eslint.org/docs/latest/rules/no-func-assign) | error | Disallow reassigning function declarations | eslint (core) |
| [no-global-assign](https://eslint.org/docs/latest/rules/no-global-assign) | error | Disallow assignments to native objects or read-only global variables | eslint (core) |
| [no-implied-eval](https://eslint.org/docs/latest/rules/no-implied-eval) | error | Disallow the use of eval()-like methods | eslint (core) |
| [no-import-assign](https://eslint.org/docs/latest/rules/no-import-assign) | error | Disallow assigning to imported bindings | eslint (core) |
| [no-inner-declarations](https://eslint.org/docs/latest/rules/no-inner-declarations) | error | Disallow variable or function declarations in nested blocks | eslint (core) |
| [no-invalid-regexp](https://eslint.org/docs/latest/rules/no-invalid-regexp) | error | Disallow invalid regular expression strings in RegExp constructors | eslint (core) |
| [no-irregular-whitespace](https://eslint.org/docs/latest/rules/no-irregular-whitespace) | error | Disallow irregular whitespace | eslint (core) |
| [no-iterator](https://eslint.org/docs/latest/rules/no-iterator) | error | Disallow the use of the __iterator__ property | eslint (core) |
| [no-label-var](https://eslint.org/docs/latest/rules/no-label-var) | error | Disallow labels that share a name with a variable | eslint (core) |
| [no-labels](https://eslint.org/docs/latest/rules/no-labels) | error | Disallow labeled statements | eslint (core) |
| [no-lone-blocks](https://eslint.org/docs/latest/rules/no-lone-blocks) | error | Disallow unnecessary nested blocks | eslint (core) |
| [no-lonely-if](https://eslint.org/docs/latest/rules/no-lonely-if) | error | Disallow if statements as the only statement in else blocks | eslint (core) |
| [no-loop-func](https://eslint.org/docs/latest/rules/no-loop-func) | error | Disallow function declarations that contain unsafe references inside loop statements | eslint (core) |
| [no-loss-of-precision](https://eslint.org/docs/latest/rules/no-loss-of-precision) | error | Disallow literal numbers that lose precision | eslint (core) |
| [no-misleading-character-class](https://eslint.org/docs/latest/rules/no-misleading-character-class) | error | Disallow characters which are made with multiple code points in character class syntax | eslint (core) |
| [no-mixed-operators](https://eslint.org/docs/latest/rules/no-mixed-operators) | error | - | eslint (core) |
| [no-mixed-spaces-and-tabs](https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs) | error | - | eslint (core) |
| [no-multi-assign](https://eslint.org/docs/latest/rules/no-multi-assign) | error | Disallow use of chained assignment expressions | eslint (core) |
| [no-multi-spaces](https://eslint.org/docs/latest/rules/no-multi-spaces) | error | - | eslint (core) |
| [no-multi-str](https://eslint.org/docs/latest/rules/no-multi-str) | error | Disallow multiline strings | eslint (core) |
| [no-multiple-empty-lines](https://eslint.org/docs/latest/rules/no-multiple-empty-lines) | error | - | eslint (core) |
| [no-nested-ternary](https://eslint.org/docs/latest/rules/no-nested-ternary) | error | Disallow nested ternary expressions | eslint (core) |
| [no-new](https://eslint.org/docs/latest/rules/no-new) | error | Disallow new operators outside of assignments or comparisons | eslint (core) |
| [no-new-func](https://eslint.org/docs/latest/rules/no-new-func) | error | Disallow new operators with the Function object | eslint (core) |
| [no-new-object](https://eslint.org/docs/latest/rules/no-new-object) | error | Replaced by no-object-constructor | eslint (core) |
| [no-new-require](https://eslint.org/docs/latest/rules/no-new-require) | error | - | eslint (core) |
| [no-new-symbol](https://eslint.org/docs/latest/rules/no-new-symbol) | error | Disallow new operators with the Symbol object | eslint (core) |
| [no-new-wrappers](https://eslint.org/docs/latest/rules/no-new-wrappers) | error | Disallow new operators with the String, Number, and Boolean objects | eslint (core) |
| [no-nonoctal-decimal-escape](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape) | error | Disallow \8 and \9 escape sequences in string literals | eslint (core) |
| [no-obj-calls](https://eslint.org/docs/latest/rules/no-obj-calls) | error | Disallow calling global object properties as functions | eslint (core) |
| [no-octal](https://eslint.org/docs/latest/rules/no-octal) | error | Disallow octal literals | eslint (core) |
| [no-octal-escape](https://eslint.org/docs/latest/rules/no-octal-escape) | error | Disallow octal escape sequences in string literals | eslint (core) |
| [no-param-reassign](https://eslint.org/docs/latest/rules/no-param-reassign) | error | - | eslint (core) |
| [no-path-concat](https://eslint.org/docs/latest/rules/no-path-concat) | error | - | eslint (core) |
| [no-plusplus](https://eslint.org/docs/latest/rules/no-plusplus) | error | Disallow the unary operators ++ and -- | eslint (core) |
| [no-promise-executor-return](https://eslint.org/docs/latest/rules/no-promise-executor-return) | error | Disallow returning values from Promise executor functions | eslint (core) |
| [no-proto](https://eslint.org/docs/latest/rules/no-proto) | error | Disallow the use of the __proto__ property | eslint (core) |
| [no-prototype-builtins](https://eslint.org/docs/latest/rules/no-prototype-builtins) | error | Disallow calling some Object.prototype methods directly on objects | eslint (core) |
| [no-redeclare](https://eslint.org/docs/latest/rules/no-redeclare) | error | Disallow variable redeclaration | eslint (core) |
| [no-regex-spaces](https://eslint.org/docs/latest/rules/no-regex-spaces) | error | Disallow multiple spaces in regular expressions | eslint (core) |
| [no-restricted-exports](https://eslint.org/docs/latest/rules/no-restricted-exports) | error | Disallow specified names in exports | eslint (core) |
| [no-restricted-globals](https://eslint.org/docs/latest/rules/no-restricted-globals) | error | Disallow specified global variables | eslint (core) |
| [no-restricted-properties](https://eslint.org/docs/latest/rules/no-restricted-properties) | error | Disallow certain properties on certain objects | eslint (core) |
| [no-restricted-syntax](https://eslint.org/docs/latest/rules/no-restricted-syntax) | error | Disallow specified syntax | eslint (core) |
| [no-return-assign](https://eslint.org/docs/latest/rules/no-return-assign) | error | Disallow assignment operators in return statements | eslint (core) |
| [no-return-await](https://eslint.org/docs/latest/rules/no-return-await) | error | - | eslint (core) |
| [no-script-url](https://eslint.org/docs/latest/rules/no-script-url) | error | Disallow javascript: urls | eslint (core) |
| [no-self-assign](https://eslint.org/docs/latest/rules/no-self-assign) | error | Disallow assignments where both sides are exactly the same | eslint (core) |
| [no-self-compare](https://eslint.org/docs/latest/rules/no-self-compare) | error | Disallow comparisons where both sides are exactly the same | eslint (core) |
| [no-sequences](https://eslint.org/docs/latest/rules/no-sequences) | error | Disallow comma operators | eslint (core) |
| [no-setter-return](https://eslint.org/docs/latest/rules/no-setter-return) | error | Disallow returning values from setters | eslint (core) |
| [no-shadow](https://eslint.org/docs/latest/rules/no-shadow) | error | Disallow variable declarations from shadowing variables declared in the outer scope | eslint (core) |
| [no-shadow-restricted-names](https://eslint.org/docs/latest/rules/no-shadow-restricted-names) | error | Disallow identifiers from shadowing restricted names | eslint (core) |
| [no-spaced-func](https://eslint.org/docs/latest/rules/no-spaced-func) | error | Replaced by func-call-spacing | eslint (core) |
| [no-sparse-arrays](https://eslint.org/docs/latest/rules/no-sparse-arrays) | error | Disallow sparse arrays | eslint (core) |
| [no-tabs](https://eslint.org/docs/latest/rules/no-tabs) | error | - | eslint (core) |
| [no-template-curly-in-string](https://eslint.org/docs/latest/rules/no-template-curly-in-string) | error | Disallow template literal placeholder syntax in regular strings | eslint (core) |
| [no-this-before-super](https://eslint.org/docs/latest/rules/no-this-before-super) | error | Disallow this/super before calling super() in constructors | eslint (core) |
| [no-throw-literal](https://eslint.org/docs/latest/rules/no-throw-literal) | error | Disallow throwing literals as exceptions | eslint (core) |
| [no-trailing-spaces](https://eslint.org/docs/latest/rules/no-trailing-spaces) | error | - | eslint (core) |
| [no-undef](https://eslint.org/docs/latest/rules/no-undef) | error | Disallow the use of undeclared variables unless mentioned in /*global */ comments | eslint (core) |
| [no-undef-init](https://eslint.org/docs/latest/rules/no-undef-init) | error | Disallow initializing variables to undefined | eslint (core) |
| [no-underscore-dangle](https://eslint.org/docs/latest/rules/no-underscore-dangle) | error | Disallow dangling underscores in identifiers | eslint (core) |
| [no-unexpected-multiline](https://eslint.org/docs/latest/rules/no-unexpected-multiline) | error | Disallow confusing multiline expressions | eslint (core) |
| [no-unneeded-ternary](https://eslint.org/docs/latest/rules/no-unneeded-ternary) | error | Disallow ternary operators when simpler alternatives exist | eslint (core) |
| [no-unreachable](https://eslint.org/docs/latest/rules/no-unreachable) | error | Disallow unreachable code after return, throw, continue, and break statements | eslint (core) |
| [no-unreachable-loop](https://eslint.org/docs/latest/rules/no-unreachable-loop) | error | Disallow loops with a body that allows only one iteration | eslint (core) |
| [no-unsafe-finally](https://eslint.org/docs/latest/rules/no-unsafe-finally) | error | Disallow control flow statements in finally blocks | eslint (core) |
| [no-unsafe-negation](https://eslint.org/docs/latest/rules/no-unsafe-negation) | error | Disallow negating the left operand of relational operators | eslint (core) |
| [no-unsafe-optional-chaining](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining) | error | Disallow use of optional chaining in contexts where the undefined value is not allowed | eslint (core) |
| [no-unused-expressions](https://eslint.org/docs/latest/rules/no-unused-expressions) | error | no-unused-expressions | eslint (core) |
| [no-unused-labels](https://eslint.org/docs/latest/rules/no-unused-labels) | error | Disallow unused labels | eslint (core) |
| [no-unused-vars](https://eslint.org/docs/latest/rules/no-unused-vars) | error | Disallow unused variables | eslint (core) |
| [no-use-before-define](https://eslint.org/docs/latest/rules/no-use-before-define) | error | Disallow the use of variables before they are defined | eslint (core) |
| [no-useless-backreference](https://eslint.org/docs/latest/rules/no-useless-backreference) | error | Disallow useless backreferences in regular expressions | eslint (core) |
| [no-useless-catch](https://eslint.org/docs/latest/rules/no-useless-catch) | error | Disallow unnecessary catch clauses | eslint (core) |
| [no-useless-computed-key](https://eslint.org/docs/latest/rules/no-useless-computed-key) | error | Disallow unnecessary computed property keys in objects and classes | eslint (core) |
| [no-useless-concat](https://eslint.org/docs/latest/rules/no-useless-concat) | error | Disallow unnecessary concatenation of literals or template literals | eslint (core) |
| [no-useless-constructor](https://eslint.org/docs/latest/rules/no-useless-constructor) | error | Disallow unnecessary constructors | eslint (core) |
| [no-useless-escape](https://eslint.org/docs/latest/rules/no-useless-escape) | error | Disallow unnecessary escape characters | eslint (core) |
| [no-useless-rename](https://eslint.org/docs/latest/rules/no-useless-rename) | error | Disallow renaming import, export, and destructured assignments to the same name | eslint (core) |
| [no-useless-return](https://eslint.org/docs/latest/rules/no-useless-return) | error | Disallow redundant return statements | eslint (core) |
| [no-var](https://eslint.org/docs/latest/rules/no-var) | error | Require let or const instead of var | eslint (core) |
| [no-void](https://eslint.org/docs/latest/rules/no-void) | error | Disallow void operators | eslint (core) |
| [no-whitespace-before-property](https://eslint.org/docs/latest/rules/no-whitespace-before-property) | error | - | eslint (core) |
| [no-with](https://eslint.org/docs/latest/rules/no-with) | error | Disallow with statements | eslint (core) |
| [nonblock-statement-body-position](https://eslint.org/docs/latest/rules/nonblock-statement-body-position) | error | - | eslint (core) |
| [object-curly-newline](https://eslint.org/docs/latest/rules/object-curly-newline) | error | - | eslint (core) |
| [object-curly-spacing](https://eslint.org/docs/latest/rules/object-curly-spacing) | error | - | eslint (core) |
| [object-property-newline](https://eslint.org/docs/latest/rules/object-property-newline) | error | - | eslint (core) |
| [object-shorthand](https://eslint.org/docs/latest/rules/object-shorthand) | error | Require or disallow method and property shorthand syntax for object literals | eslint (core) |
| [one-var](https://eslint.org/docs/latest/rules/one-var) | error | Enforce variables to be declared either together or separately in functions | eslint (core) |
| [one-var-declaration-per-line](https://eslint.org/docs/latest/rules/one-var-declaration-per-line) | error | - | eslint (core) |
| [operator-assignment](https://eslint.org/docs/latest/rules/operator-assignment) | error | Require or disallow assignment operator shorthand where possible | eslint (core) |
| [operator-linebreak](https://eslint.org/docs/latest/rules/operator-linebreak) | error | - | eslint (core) |
| [padded-blocks](https://eslint.org/docs/latest/rules/padded-blocks) | error | - | eslint (core) |
| [prefer-arrow-callback](https://eslint.org/docs/latest/rules/prefer-arrow-callback) | error | Require using arrow functions for callbacks | eslint (core) |
| [prefer-const](https://eslint.org/docs/latest/rules/prefer-const) | error | Require const declarations for variables that are never reassigned after declared | eslint (core) |
| [prefer-destructuring](https://eslint.org/docs/latest/rules/prefer-destructuring) | error | Require destructuring from arrays and/or objects | eslint (core) |
| [prefer-exponentiation-operator](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator) | error | Disallow the use of Math.pow in favor of the ** operator | eslint (core) |
| [prefer-numeric-literals](https://eslint.org/docs/latest/rules/prefer-numeric-literals) | error | Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals | eslint (core) |
| [prefer-object-spread](https://eslint.org/docs/latest/rules/prefer-object-spread) | error | Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead | eslint (core) |
| [prefer-promise-reject-errors](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors) | error | Require using Error objects as Promise rejection reasons | eslint (core) |
| [prefer-regex-literals](https://eslint.org/docs/latest/rules/prefer-regex-literals) | error | Disallow use of the RegExp constructor in favor of regular expression literals | eslint (core) |
| [prefer-rest-params](https://eslint.org/docs/latest/rules/prefer-rest-params) | error | Require rest parameters instead of arguments | eslint (core) |
| [prefer-spread](https://eslint.org/docs/latest/rules/prefer-spread) | error | Require spread operators instead of .apply() | eslint (core) |
| [prefer-template](https://eslint.org/docs/latest/rules/prefer-template) | error | Require template literals instead of string concatenation | eslint (core) |
| [quote-props](https://eslint.org/docs/latest/rules/quote-props) | error | - | eslint (core) |
| [quotes](https://eslint.org/docs/latest/rules/quotes) | error | - | eslint (core) |
| [radix](https://eslint.org/docs/latest/rules/radix) | error | - | eslint (core) |
| [require-yield](https://eslint.org/docs/latest/rules/require-yield) | error | Require generator functions to contain yield | eslint (core) |
| [rest-spread-spacing](https://eslint.org/docs/latest/rules/rest-spread-spacing) | error | - | eslint (core) |
| [semi](https://eslint.org/docs/latest/rules/semi) | error | - | eslint (core) |
| [semi-spacing](https://eslint.org/docs/latest/rules/semi-spacing) | error | - | eslint (core) |
| [semi-style](https://eslint.org/docs/latest/rules/semi-style) | error | - | eslint (core) |
| [space-before-blocks](https://eslint.org/docs/latest/rules/space-before-blocks) | error | - | eslint (core) |
| [space-before-function-paren](https://eslint.org/docs/latest/rules/space-before-function-paren) | error | - | eslint (core) |
| [space-in-parens](https://eslint.org/docs/latest/rules/space-in-parens) | error | - | eslint (core) |
| [space-infix-ops](https://eslint.org/docs/latest/rules/space-infix-ops) | error | - | eslint (core) |
| [space-unary-ops](https://eslint.org/docs/latest/rules/space-unary-ops) | error | - | eslint (core) |
| [spaced-comment](https://eslint.org/docs/latest/rules/spaced-comment) | error | - | eslint (core) |
| [strict](https://eslint.org/docs/latest/rules/strict) | error | - | eslint (core) |
| [switch-colon-spacing](https://eslint.org/docs/latest/rules/switch-colon-spacing) | error | - | eslint (core) |
| [symbol-description](https://eslint.org/docs/latest/rules/symbol-description) | error | Require symbol descriptions | eslint (core) |
| [template-curly-spacing](https://eslint.org/docs/latest/rules/template-curly-spacing) | error | - | eslint (core) |
| [template-tag-spacing](https://eslint.org/docs/latest/rules/template-tag-spacing) | error | - | eslint (core) |
| [unicode-bom](https://eslint.org/docs/latest/rules/unicode-bom) | error | Require or disallow Unicode byte order mark (BOM) | eslint (core) |
| [use-isnan](https://eslint.org/docs/latest/rules/use-isnan) | error | Require calls to isNaN() when checking for NaN | eslint (core) |
| [valid-typeof](https://eslint.org/docs/latest/rules/valid-typeof) | error | Enforce comparing typeof expressions against valid strings | eslint (core) |
| [vars-on-top](https://eslint.org/docs/latest/rules/vars-on-top) | error | Require var declarations be placed at the top of their containing scope | eslint (core) |
| [wrap-iife](https://eslint.org/docs/latest/rules/wrap-iife) | error | - | eslint (core) |
| [yield-star-spacing](https://eslint.org/docs/latest/rules/yield-star-spacing) | error | - | eslint (core) |
| [yoda](https://eslint.org/docs/latest/rules/yoda) | error | - | eslint (core) |
| [import/export](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md) | error | import/export | eslint-plugin-import |
| [import/extensions](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md) | error | import/extensions | eslint-plugin-import |
| [import/first](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md) | error | import/first | eslint-plugin-import |
| [import/named](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md) | error | import/named | eslint-plugin-import |
| [import/newline-after-import](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md) | error | import/newline-after-import | eslint-plugin-import |
| [import/no-absolute-path](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md) | error | import/no-absolute-path | eslint-plugin-import |
| [import/no-amd](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md) | error | import/no-amd | eslint-plugin-import |
| [import/no-cycle](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md) | error | import/no-cycle | eslint-plugin-import |
| [import/no-default-export](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md) | error | import/no-default-export | eslint-plugin-import |
| [import/no-duplicates](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md) | error | import/no-duplicates | eslint-plugin-import |
| [import/no-dynamic-require](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md) | error | import/no-dynamic-require | eslint-plugin-import |
| [import/no-extraneous-dependencies](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md) | error | import/no-extraneous-dependencies | eslint-plugin-import |
| [import/no-import-module-exports](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md) | error | import/no-import-module-exports | eslint-plugin-import |
| [import/no-mutable-exports](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md) | error | import/no-mutable-exports | eslint-plugin-import |
| [import/no-named-as-default](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md) | error | import/no-named-as-default | eslint-plugin-import |
| [import/no-named-as-default-member](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md) | error | import/no-named-as-default-member | eslint-plugin-import |
| [import/no-named-default](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md) | error | import/no-named-default | eslint-plugin-import |
| [import/no-relative-packages](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md) | error | import/no-relative-packages | eslint-plugin-import |
| [import/no-self-import](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md) | error | import/no-self-import | eslint-plugin-import |
| [import/no-unresolved](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md) | error | import/no-unresolved | eslint-plugin-import |
| [import/no-useless-path-segments](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md) | error | import/no-useless-path-segments | eslint-plugin-import |
| [import/no-webpack-loader-syntax](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md) | error | import/no-webpack-loader-syntax | eslint-plugin-import |
| [import/order](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md) | error | import/order | eslint-plugin-import |
| [@typescript-eslint/ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment) | error | Disallow `@ts-<directive>` comments or require descriptions after directives. | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/consistent-type-assertions](https://typescript-eslint.io/rules/consistent-type-assertions) | warn | Enforce consistent usage of type assertions. | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-array-constructor](https://typescript-eslint.io/rules/no-array-constructor) | error | 'no-array-constructor': 'off', | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-duplicate-enum-values](https://typescript-eslint.io/rules/no-duplicate-enum-values) | error | Disallow duplicate enum member values. | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-empty-object-type](https://typescript-eslint.io/rules/no-empty-object-type) | error | Disallow accidentally using the "empty object" type. | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any) | error | Disallow the `any` type. | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-extra-non-null-assertion](https://typescript-eslint.io/rules/no-extra-non-null-assertion) | error | Disallow extra non-null assertions. | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-misused-new](https://typescript-eslint.io/rules/no-misused-new) | error | Enforce valid definition of `new` and `constructor`. | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-namespace](https://typescript-eslint.io/rules/no-namespace) | error | Disallow TypeScript namespaces. | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-non-null-asserted-optional-chain](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain) | error | Disallow non-null assertions after an optional chain expression. | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-redeclare](https://typescript-eslint.io/rules/no-redeclare) | error | - | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-require-imports](https://typescript-eslint.io/rules/no-require-imports) | error | Disallow invocation of `require()`. | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-shadow](https://typescript-eslint.io/rules/no-shadow) | error | - | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-this-alias](https://typescript-eslint.io/rules/no-this-alias) | error | Disallow aliasing `this`. | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-unnecessary-type-constraint](https://typescript-eslint.io/rules/no-unnecessary-type-constraint) | error | Disallow unnecessary constraints on generic types. | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-unsafe-declaration-merging](https://typescript-eslint.io/rules/no-unsafe-declaration-merging) | error | Disallow unsafe declaration merging. | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-unsafe-function-type](https://typescript-eslint.io/rules/no-unsafe-function-type) | error | Disallow using the unsafe built-in Function type. | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-unused-expressions](https://typescript-eslint.io/rules/no-unused-expressions) | error | - | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars) | error | - | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-use-before-define](https://typescript-eslint.io/rules/no-use-before-define) | error | - | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-useless-constructor](https://typescript-eslint.io/rules/no-useless-constructor) | error | - | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/no-wrapper-object-types](https://typescript-eslint.io/rules/no-wrapper-object-types) | error | Disallow using confusing built-in primitive class wrappers. | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const) | error | Enforce the use of `as const` over literal type. | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/prefer-namespace-keyword](https://typescript-eslint.io/rules/prefer-namespace-keyword) | error | Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules. | @typescript-eslint/eslint-plugin |
| [@typescript-eslint/triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference) | error | Disallow certain triple slash directives in favor of ES6-style import declarations. | @typescript-eslint/eslint-plugin |
| [import/extensions](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md) | error | import/extensions | eslint-plugin-import |
| [no-var](https://eslint.org/docs/latest/rules/no-var) | error | - | eslint (core) |

## React Configuration

Additional active rules with `defineConfig({ enableReact: true })`.

This configuration adds React, React Hooks, JSX a11y, and Testing Library rules to the base rules.

| Rule | Mode | Description | Plugin |
|------|------|-------------|--------|
| [import/extensions](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md) | error | import/extensions | eslint-plugin-import |
| [react-hooks/exhaustive-deps](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md#exhaustive-deps) | warn | Verify the list of the dependencies for Hooks like useEffect and similar | eslint-plugin-react |
| [react-hooks/rules-of-hooks](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md#rules-of-hooks) | error | Enforce Rules of Hooks | eslint-plugin-react |
| [react/button-has-type](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md) | error | Disallow usage of button elements without an explicit type attribute | eslint-plugin-react |
| [react/default-props-match-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md) | error | Enforce all defaultProps have a corresponding non-required PropType | eslint-plugin-react |
| [react/destructuring-assignment](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md) | error | Enforce consistent usage of destructuring assignment of props, state, and context | eslint-plugin-react |
| [react/display-name](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md) | error | Disallow missing displayName in a React component definition | eslint-plugin-react |
| [react/forbid-foreign-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md) | warn | Disallow using another component's propTypes | eslint-plugin-react |
| [react/forbid-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md) | error | Disallow certain propTypes | eslint-plugin-react |
| [react/function-component-definition](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md) | error | Enforce a specific function type for function components | eslint-plugin-react |
| [react/jsx-boolean-value](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md) | error | Enforce boolean attributes notation in JSX | eslint-plugin-react |
| [react/jsx-closing-bracket-location](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md) | error | Enforce closing bracket location in JSX | eslint-plugin-react |
| [react/jsx-closing-tag-location](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md) | error | Enforce closing tag location for multiline JSX | eslint-plugin-react |
| [react/jsx-curly-brace-presence](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md) | error | Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes | eslint-plugin-react |
| [react/jsx-curly-newline](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md) | error | Enforce consistent linebreaks in curly braces in JSX attributes and expressions | eslint-plugin-react |
| [react/jsx-curly-spacing](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md) | error | Enforce or disallow spaces inside of curly braces in JSX attributes and expressions | eslint-plugin-react |
| [react/jsx-equals-spacing](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md) | error | Enforce or disallow spaces around equal signs in JSX attributes | eslint-plugin-react |
| [react/jsx-filename-extension](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md) | error | Disallow file extensions that may contain JSX | eslint-plugin-react |
| [react/jsx-first-prop-new-line](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md) | error | Enforce proper position of the first property in JSX | eslint-plugin-react |
| [react/jsx-fragments](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md) | error | Enforce shorthand or standard form for React fragments | eslint-plugin-react |
| [react/jsx-indent](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md) | error | Enforce JSX indentation | eslint-plugin-react |
| [react/jsx-indent-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md) | error | Enforce props indentation in JSX | eslint-plugin-react |
| [react/jsx-key](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md) | error | Disallow missing key props in iterators/collection literals | eslint-plugin-react |
| [react/jsx-max-props-per-line](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md) | error | Enforce maximum of props on a single line in JSX | eslint-plugin-react |
| [react/jsx-no-bind](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md) | error | Disallow .bind() or arrow functions in JSX props | eslint-plugin-react |
| [react/jsx-no-comment-textnodes](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md) | error | Disallow comments from being inserted as text nodes | eslint-plugin-react |
| [react/jsx-no-constructed-context-values](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md) | error | Disallows JSX context provider values from taking values that will cause needless rerenders | eslint-plugin-react |
| [react/jsx-no-duplicate-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md) | error | Disallow duplicate properties in JSX | eslint-plugin-react |
| [react/jsx-no-leaked-render](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md) | error | Disallow problematic leaked values from being rendered | eslint-plugin-react |
| [react/jsx-no-script-url](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md) | error | Disallow usage of javascript: URLs | eslint-plugin-react |
| [react/jsx-no-target-blank](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md) | error | Disallow target="_blank" attribute without rel="noreferrer" | eslint-plugin-react |
| [react/jsx-no-undef](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md) | error | Disallow undeclared variables in JSX | eslint-plugin-react |
| [react/jsx-no-useless-fragment](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md) | error | Disallow unnecessary fragments | eslint-plugin-react |
| [react/jsx-one-expression-per-line](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md) | error | Require one JSX element per line | eslint-plugin-react |
| [react/jsx-pascal-case](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md) | error | Enforce PascalCase for user-defined JSX components | eslint-plugin-react |
| [react/jsx-props-no-multi-spaces](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md) | error | Disallow multiple spaces between inline JSX props | eslint-plugin-react |
| [react/jsx-tag-spacing](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md) | error | Enforce whitespace in and around the JSX opening and closing brackets | eslint-plugin-react |
| [react/jsx-uses-vars](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md) | error | Disallow variables used in JSX to be incorrectly marked as unused | eslint-plugin-react |
| [react/jsx-wrap-multilines](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md) | error | Disallow missing parentheses around multiline JSX | eslint-plugin-react |
| [react/no-access-state-in-setstate](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md) | error | Disallow when this.state is accessed within setState | eslint-plugin-react |
| [react/no-array-index-key](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md) | error | Disallow usage of Array index in keys | eslint-plugin-react |
| [react/no-arrow-function-lifecycle](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md) | error | Lifecycle methods should be methods on the prototype, not class fields | eslint-plugin-react |
| [react/no-children-prop](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md) | error | Disallow passing of children as props | eslint-plugin-react |
| [react/no-danger](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md) | warn | Disallow usage of dangerous JSX properties | eslint-plugin-react |
| [react/no-danger-with-children](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md) | error | Disallow when a DOM element is using both children and dangerouslySetInnerHTML | eslint-plugin-react |
| [react/no-deprecated](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md) | error | Disallow usage of deprecated methods | eslint-plugin-react |
| [react/no-did-update-set-state](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md) | error | Disallow usage of setState in componentDidUpdate | eslint-plugin-react |
| [react/no-direct-mutation-state](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md) | error | Disallow direct mutation of this.state | eslint-plugin-react |
| [react/no-find-dom-node](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md) | error | Disallow usage of findDOMNode | eslint-plugin-react |
| [react/no-invalid-html-attribute](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md) | error | Disallow usage of invalid attributes | eslint-plugin-react |
| [react/no-is-mounted](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md) | error | Disallow usage of isMounted | eslint-plugin-react |
| [react/no-multi-comp](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md) | error | Disallow multiple component definition per file | eslint-plugin-react |
| [react/no-namespace](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md) | error | Enforce that namespaces are not used in React elements | eslint-plugin-react |
| [react/no-redundant-should-component-update](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md) | error | Disallow usage of shouldComponentUpdate when extending React.PureComponent | eslint-plugin-react |
| [react/no-render-return-value](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md) | error | Disallow usage of the return value of ReactDOM.render | eslint-plugin-react |
| [react/no-string-refs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md) | error | Disallow using string references | eslint-plugin-react |
| [react/no-this-in-sfc](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md) | error | Disallow this from being used in stateless functional components | eslint-plugin-react |
| [react/no-typos](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md) | error | Disallow common typos | eslint-plugin-react |
| [react/no-unknown-property](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md) | error | Disallow usage of unknown DOM property | eslint-plugin-react |
| [react/no-unstable-nested-components](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md) | error | Disallow creating unstable components inside components | eslint-plugin-react |
| [react/no-unused-class-component-methods](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md) | error | Disallow declaring unused methods of component class | eslint-plugin-react |
| [react/no-unused-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md) | error | Disallow definitions of unused propTypes | eslint-plugin-react |
| [react/no-unused-state](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md) | error | Disallow definitions of unused state | eslint-plugin-react |
| [react/no-will-update-set-state](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md) | error | Disallow usage of setState in componentWillUpdate | eslint-plugin-react |
| [react/prefer-es6-class](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md) | error | Enforce ES5 or ES6 class for React Components | eslint-plugin-react |
| [react/prefer-exact-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md) | error | Prefer exact proptype definitions | eslint-plugin-react |
| [react/prefer-stateless-function](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md) | error | Enforce stateless components to be written as a pure function | eslint-plugin-react |
| [react/prop-types](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md) | error | Disallow missing props validation in a React component definition | eslint-plugin-react |
| [react/require-default-props](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md) | error | Enforce a defaultProps definition for every prop that is not a required prop | eslint-plugin-react |
| [react/require-render-return](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md) | error | Enforce ES5 or ES6 class for returning value in render function | eslint-plugin-react |
| [react/self-closing-comp](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md) | error | Disallow extra closing tags for components without children | eslint-plugin-react |
| [react/sort-comp](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md) | error | Enforce component methods order | eslint-plugin-react |
| [react/state-in-constructor](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md) | error | Enforce class component state initialization style | eslint-plugin-react |
| [react/static-property-placement](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md) | error | Enforces where React component static properties should be positioned | eslint-plugin-react |
| [react/style-prop-object](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md) | error | Enforce style prop value is an object | eslint-plugin-react |
| [react/void-dom-elements-no-children](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md) | error | Disallow void DOM elements (e.g. <img />, <br />) from receiving children | eslint-plugin-react |
| [import/extensions](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md) | error | import/extensions | eslint-plugin-import |
| [react/jsx-filename-extension](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md) | error | Disallow file extensions that may contain JSX | eslint-plugin-react |
| [jest-dom/prefer-checked](https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-checked.md) | error | Prefer toBeChecked over checking attributes | eslint-plugin-jest-dom |
| [jest-dom/prefer-empty](https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-empty.md) | error | Prefer toBeEmpty over checking innerHTML | eslint-plugin-jest-dom |
| [jest-dom/prefer-enabled-disabled](https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-enabled-disabled.md) | error | Prefer toBeDisabled or toBeEnabled over checking attributes | eslint-plugin-jest-dom |
| [jest-dom/prefer-focus](https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-focus.md) | error | Prefer toHaveFocus over checking document.activeElement | eslint-plugin-jest-dom |
| [jest-dom/prefer-in-document](https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-in-document.md) | error | Prefer .toBeInTheDocument() for asserting the existence of a DOM node | eslint-plugin-jest-dom |
| [jest-dom/prefer-required](https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-required.md) | error | Prefer toBeRequired over checking properties | eslint-plugin-jest-dom |
| [jest-dom/prefer-to-have-attribute](https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-attribute.md) | error | Prefer toHaveAttribute over checking getAttribute/hasAttribute | eslint-plugin-jest-dom |
| [jest-dom/prefer-to-have-class](https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-class.md) | error | Prefer toHaveClass over checking element className | eslint-plugin-jest-dom |
| [jest-dom/prefer-to-have-style](https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-style.md) | error | Prefer toHaveStyle over checking element style | eslint-plugin-jest-dom |
| [jest-dom/prefer-to-have-text-content](https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-text-content.md) | error | Prefer toHaveTextContent over checking element.textContent | eslint-plugin-jest-dom |
| [jest-dom/prefer-to-have-value](https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-value.md) | error | Prefer toHaveValue over checking element.value | eslint-plugin-jest-dom |
| [testing-library/await-async-queries](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-queries.md) | error | Enforce promises from async queries to be handled | eslint-plugin-testing-library |
| [testing-library/await-async-utils](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-utils.md) | error | Enforce promises from async utils to be awaited properly | eslint-plugin-testing-library |
| [testing-library/no-await-sync-queries](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-queries.md) | error | Disallow unnecessary await for sync queries | eslint-plugin-testing-library |
| [testing-library/no-container](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-container.md) | error | Disallow the use of container methods | eslint-plugin-testing-library |
| [testing-library/no-debugging-utils](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-debugging-utils.md) | error | Disallow the use of debugging utilities like debug | eslint-plugin-testing-library |
| [testing-library/no-dom-import](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-dom-import.md) | error | Disallow importing from DOM Testing Library | eslint-plugin-testing-library |
| [testing-library/no-node-access](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-node-access.md) | error | Disallow direct Node access | eslint-plugin-testing-library |
| [testing-library/no-promise-in-fire-event](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-promise-in-fire-event.md) | error | Disallow the use of promises passed to a fireEvent method | eslint-plugin-testing-library |
| [testing-library/no-render-in-lifecycle](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-render-in-lifecycle.md) | error | Disallow the use of render in testing frameworks setup functions | eslint-plugin-testing-library |
| [testing-library/no-unnecessary-act](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-unnecessary-act.md) | error | Disallow wrapping Testing Library utils or empty callbacks in act | eslint-plugin-testing-library |
| [testing-library/no-wait-for-multiple-assertions](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-multiple-assertions.md) | error | Disallow the use of multiple expect calls inside waitFor | eslint-plugin-testing-library |
| [testing-library/no-wait-for-side-effects](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-side-effects.md) | error | Disallow the use of side effects in waitFor | eslint-plugin-testing-library |
| [testing-library/no-wait-for-snapshot](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-snapshot.md) | error | Ensures no snapshot is generated inside of a waitFor call | eslint-plugin-testing-library |
| [testing-library/prefer-find-by](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-find-by.md) | error | Suggest using find(All)By* query instead of waitFor + get(All)By* to wait for elements | eslint-plugin-testing-library |
| [testing-library/prefer-presence-queries](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-presence-queries.md) | error | Ensure appropriate get*/query* queries are used with their respective matchers | eslint-plugin-testing-library |
| [testing-library/prefer-query-by-disappearance](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-query-by-disappearance.md) | error | Suggest using queryBy* queries when waiting for disappearance | eslint-plugin-testing-library |
| [testing-library/prefer-query-matchers](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-query-matchers.md) | error | Ensure the configured get*/query* query is used with the corresponding matchers | eslint-plugin-testing-library |
| [testing-library/prefer-screen-queries](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md) | error | Suggest using screen while querying | eslint-plugin-testing-library |
| [testing-library/render-result-naming-convention](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/render-result-naming-convention.md) | error | Enforce a valid naming for return value from render | eslint-plugin-testing-library |
| [jsx-a11y/alt-text](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md) | error | Enforce all elements that require alternative text have meaningful information to relay back to end user. | eslint-plugin-jsx-a11y |
| [jsx-a11y/anchor-has-content](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md) | error | Enforce all anchors to contain accessible content. | eslint-plugin-jsx-a11y |
| [jsx-a11y/anchor-is-valid](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md) | error | Enforce all anchors are valid, navigable elements. | eslint-plugin-jsx-a11y |
| [jsx-a11y/aria-activedescendant-has-tabindex](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md) | error | Enforce elements with aria-activedescendant are tabbable. | eslint-plugin-jsx-a11y |
| [jsx-a11y/aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md) | error | Enforce all aria-* props are valid. | eslint-plugin-jsx-a11y |
| [jsx-a11y/aria-proptypes](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md) | error | Enforce ARIA state and property values are valid. | eslint-plugin-jsx-a11y |
| [jsx-a11y/aria-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md) | error | Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role. | eslint-plugin-jsx-a11y |
| [jsx-a11y/aria-unsupported-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md) | error | Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes. | eslint-plugin-jsx-a11y |
| [jsx-a11y/click-events-have-key-events](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md) | error | Enforce a clickable non-interactive element has at least one keyboard event listener. | eslint-plugin-jsx-a11y |
| [jsx-a11y/control-has-associated-label](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md) | error | Enforce that a control (an interactive element) has a text label. | eslint-plugin-jsx-a11y |
| [jsx-a11y/heading-has-content](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md) | error | Enforce heading (h1, h2, etc) elements contain accessible content. | eslint-plugin-jsx-a11y |
| [jsx-a11y/html-has-lang](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md) | error | Enforce <html> element has lang prop. | eslint-plugin-jsx-a11y |
| [jsx-a11y/iframe-has-title](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md) | error | Enforce iframe elements have a title attribute. | eslint-plugin-jsx-a11y |
| [jsx-a11y/img-redundant-alt](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md) | error | Enforce <img> alt prop does not contain the word "image", "picture", or "photo". | eslint-plugin-jsx-a11y |
| [jsx-a11y/interactive-supports-focus](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md) | error | Enforce that elements with interactive handlers like onClick must be focusable. | eslint-plugin-jsx-a11y |
| [jsx-a11y/label-has-associated-control](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md) | error | Enforce that a label tag has a text label and an associated control. | eslint-plugin-jsx-a11y |
| [jsx-a11y/lang](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/lang.md) | error | Enforce lang attribute has a valid value. | eslint-plugin-jsx-a11y |
| [jsx-a11y/media-has-caption](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md) | error | Enforces that <audio> and <video> elements must have a <track> for captions. | eslint-plugin-jsx-a11y |
| [jsx-a11y/mouse-events-have-key-events](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md) | error | Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users. | eslint-plugin-jsx-a11y |
| [jsx-a11y/no-access-key](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md) | error | Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screenreader. | eslint-plugin-jsx-a11y |
| [jsx-a11y/no-autofocus](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md) | error | Enforce autoFocus prop is not used. | eslint-plugin-jsx-a11y |
| [jsx-a11y/no-distracting-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-distracting-elements.md) | error | Enforce distracting elements are not used. | eslint-plugin-jsx-a11y |
| [jsx-a11y/no-interactive-element-to-noninteractive-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md) | error | Interactive elements should not be assigned non-interactive roles. | eslint-plugin-jsx-a11y |
| [jsx-a11y/no-noninteractive-element-interactions](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md) | error | Non-interactive elements should not be assigned mouse or keyboard event listeners. | eslint-plugin-jsx-a11y |
| [jsx-a11y/no-noninteractive-element-to-interactive-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md) | error | Non-interactive elements should not be assigned interactive roles. | eslint-plugin-jsx-a11y |
| [jsx-a11y/no-noninteractive-tabindex](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-tabindex.md) | error | tabIndex should only be declared on interactive elements. | eslint-plugin-jsx-a11y |
| [jsx-a11y/no-redundant-roles](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md) | error | Enforce explicit role property is not the same as implicit/default role property on element. | eslint-plugin-jsx-a11y |
| [jsx-a11y/no-static-element-interactions](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md) | error | Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute. | eslint-plugin-jsx-a11y |
| [jsx-a11y/role-has-required-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md) | error | Enforce that elements with ARIA roles must have all required attributes for that role. | eslint-plugin-jsx-a11y |
| [jsx-a11y/role-supports-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md) | error | Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role. | eslint-plugin-jsx-a11y |
| [jsx-a11y/scope](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md) | error | Enforce scope prop is only used on <th> elements. | eslint-plugin-jsx-a11y |
| [jsx-a11y/tabindex-no-positive](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md) | error | Enforce tabIndex value is not greater than zero. | eslint-plugin-jsx-a11y |

## Vitest Configuration

Additional active rules with `defineConfig({ enableVitest: true })`.

| Rule | Mode | Description | Plugin |
|------|------|-------------|--------|
| [@vitest/no-conditional-expect](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md) | error | Disallow conditional expects | @vitest/eslint-plugin |
| [@vitest/no-identical-title](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md) | error | Disallow identical titles | @vitest/eslint-plugin |
| [@vitest/no-interpolation-in-snapshots](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md) | error | Disallow string interpolation in snapshots | @vitest/eslint-plugin |
| [@vitest/no-mocks-import](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md) | error | Disallow importing from mocks directory | @vitest/eslint-plugin |
| [@vitest/prefer-called-with](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md) | error | Enforce using toBeCalledWith() or toHaveBeenCalledWith() | @vitest/eslint-plugin |
| [@vitest/prefer-strict-equal](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md) | error | Enforce strict equal over equal | @vitest/eslint-plugin |
| [@vitest/prefer-to-be-falsy](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md) | error | Enforce using toBeFalsy() | @vitest/eslint-plugin |
| [@vitest/prefer-to-be-object](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md) | error | Enforce using toBeObject() | @vitest/eslint-plugin |
| [@vitest/prefer-to-be-truthy](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md) | error | Enforce using toBeTruthy | @vitest/eslint-plugin |
| [@vitest/prefer-to-contain](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md) | error | Enforce using toContain() | @vitest/eslint-plugin |
| [@vitest/prefer-to-have-length](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md) | error | Enforce using toHaveLength() | @vitest/eslint-plugin |
| [@vitest/valid-describe-callback](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md) | error | Enforce valid describe callback | @vitest/eslint-plugin |
| [@vitest/valid-expect](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md) | error | Enforce valid expect() usage | @vitest/eslint-plugin |
| [@vitest/valid-title](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md) | warn | Enforce valid titles | @vitest/eslint-plugin |

## Playwright Configuration

Additional active rules with `defineConfig({ enablePlaywright: true })`.

| Rule | Mode | Description | Plugin |
|------|------|-------------|--------|
| [playwright/expect-expect](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/expect-expect.md) | warn | playwright/expect-expect | eslint-plugin-playwright |
| [playwright/max-nested-describe](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/max-nested-describe.md) | warn | playwright/max-nested-describe | eslint-plugin-playwright |
| [playwright/missing-playwright-await](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/missing-playwright-await.md) | error | playwright/missing-playwright-await | eslint-plugin-playwright |
| [playwright/no-conditional-expect](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-conditional-expect.md) | warn | playwright/no-conditional-expect | eslint-plugin-playwright |
| [playwright/no-conditional-in-test](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-conditional-in-test.md) | warn | playwright/no-conditional-in-test | eslint-plugin-playwright |
| [playwright/no-element-handle](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-element-handle.md) | warn | playwright/no-element-handle | eslint-plugin-playwright |
| [playwright/no-eval](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-eval.md) | warn | playwright/no-eval | eslint-plugin-playwright |
| [playwright/no-focused-test](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-focused-test.md) | error | playwright/no-focused-test | eslint-plugin-playwright |
| [playwright/no-force-option](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-force-option.md) | warn | playwright/no-force-option | eslint-plugin-playwright |
| [playwright/no-nested-step](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-nested-step.md) | warn | playwright/no-nested-step | eslint-plugin-playwright |
| [playwright/no-networkidle](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-networkidle.md) | error | playwright/no-networkidle | eslint-plugin-playwright |
| [playwright/no-page-pause](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-page-pause.md) | warn | playwright/no-page-pause | eslint-plugin-playwright |
| [playwright/no-skipped-test](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-skipped-test.md) | warn | playwright/no-skipped-test | eslint-plugin-playwright |
| [playwright/no-standalone-expect](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-standalone-expect.md) | error | playwright/no-standalone-expect | eslint-plugin-playwright |
| [playwright/no-unsafe-references](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-unsafe-references.md) | error | playwright/no-unsafe-references | eslint-plugin-playwright |
| [playwright/no-useless-await](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-useless-await.md) | warn | playwright/no-useless-await | eslint-plugin-playwright |
| [playwright/no-useless-not](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-useless-not.md) | warn | playwright/no-useless-not | eslint-plugin-playwright |
| [playwright/no-wait-for-selector](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-wait-for-selector.md) | warn | playwright/no-wait-for-selector | eslint-plugin-playwright |
| [playwright/no-wait-for-timeout](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-wait-for-timeout.md) | warn | playwright/no-wait-for-timeout | eslint-plugin-playwright |
| [playwright/prefer-strict-equal](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-strict-equal.md) | error | playwright/prefer-strict-equal | eslint-plugin-playwright |
| [playwright/prefer-to-contain](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-contain.md) | error | playwright/prefer-to-contain | eslint-plugin-playwright |
| [playwright/prefer-to-have-count](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-have-count.md) | error | playwright/prefer-to-have-count | eslint-plugin-playwright |
| [playwright/prefer-to-have-length](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-have-length.md) | error | playwright/prefer-to-have-length | eslint-plugin-playwright |
| [playwright/prefer-web-first-assertions](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-web-first-assertions.md) | error | playwright/prefer-web-first-assertions | eslint-plugin-playwright |
| [playwright/valid-describe-callback](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/valid-describe-callback.md) | error | playwright/valid-describe-callback | eslint-plugin-playwright |
| [playwright/valid-expect](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/valid-expect.md) | error | playwright/valid-expect | eslint-plugin-playwright |
| [playwright/valid-expect-in-promise](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/valid-expect-in-promise.md) | error | playwright/valid-expect-in-promise | eslint-plugin-playwright |
| [playwright/valid-title](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/valid-title.md) | error | playwright/valid-title | eslint-plugin-playwright |

## Prettier Configuration

Additional active rules with `defineConfig({ enablePrettier: 'on' })`.

This configuration enables Prettier and disables conflicting formatting rules.

| Rule | Mode | Description | Plugin |
|------|------|-------------|--------|
| [prettier/prettier](https://github.com/prettier/eslint-plugin-prettier#prettier) | error | eslint-plugin-prettier https://github.com/prettier/eslint-plugin-prettier | eslint-plugin-prettier |

