module.exports = {
  overrides: [
    {
      files: ['*.{test,spec,steps}.{js,jsx,ts,tsx}'],
      plugins: ['jest', 'jest-extended'],
      env: {
        'jest/globals': true,
      },
      rules: {
        // eslint-plugin-import https://github.com/import-js/eslint-plugin-import
        'import/no-extraneous-dependencies': 'off',

        // eslint-plugin-jest https://github.com/jest-community/eslint-plugin-jest
        // Enforce test and it usage conventions
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/consistent-test-it.md
        'jest/consistent-test-it': 'off',

        // Enforce assertion to be made in a test body
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/expect-expect.md
        'jest/expect-expect': 'off',

        // Enforces a maximum number assertion calls in a test body
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-expects.md
        'jest/max-expects': 'off',

        // Enforces a maximum depth to nested describe calls
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-nested-describe.md
        'jest/max-nested-describe': 'off',

        // Disallow alias methods
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-alias-methods.md
        'jest/no-alias-methods': 'off',

        // Disallow commented out tests
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-commented-out-tests.md
        'jest/no-commented-out-tests': 'off',

        // Disallow calling expect conditionally
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-expect.md
        'jest/no-conditional-expect': 'error',

        // Disallow conditional logic in tests
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-in-test.md
        'jest/no-conditional-in-test': 'off',

        // Disallow confusing usages of jest.setTimeout
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-confusing-set-timeout.md
        'jest/no-confusing-set-timeout': 'off',

        // Disallow use of deprecated functions
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-deprecated-functions.md
        'jest/no-deprecated-functions': 'off',

        // Disallow disabled tests
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-disabled-tests.md
        'jest/no-disabled-tests': 'off',

        // Disallow using a callback in asynchronous tests and hooks
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-done-callback.md
        'jest/no-done-callback': 'off',

        // Disallow duplicate setup and teardown hooks
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-duplicate-hooks.md
        'jest/no-duplicate-hooks': 'off',

        // Disallow using exports in files containing tests
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-export.md
        'jest/no-export': 'off',

        // Disallow focused tests
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-focused-tests.md
        'jest/no-focused-tests': 'off',

        // Disallow setup and teardown hooks
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-hooks.md
        'jest/no-hooks': 'off',

        // Disallow identical titles
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-identical-title.md
        'jest/no-identical-title': 'error',

        // Disallow string interpolation inside snapshots
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-interpolation-in-snapshots.md
        'jest/no-interpolation-in-snapshots': 'error',

        // Disallow Jasmine globals
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-jasmine-globals.md
        'jest/no-jasmine-globals': 'error',

        // Disallow large snapshots
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md
        'jest/no-large-snapshots': 'off',

        // Disallow manually importing from __mocks__
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-mocks-import.md
        'jest/no-mocks-import': 'error',

        // Disallow specific jest. methods
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-jest-methods.md
        'jest/no-restricted-jest-methods': 'off',

        // Disallow specific matchers & modifiers
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-matchers.md
        'jest/no-restricted-matchers': 'off',

        // Disallow using expect outside of it or test blocks
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-standalone-expect.md
        'jest/no-standalone-expect': 'off',

        // Require using .only and .skip over f and x
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-prefixes.md
        'jest/no-test-prefixes': 'off',

        // Disallow explicitly returning from tests
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-return-statement.md
        'jest/no-test-return-statement': 'off',

        // Disallow using jest.mock() factories without an explicit type parameter
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-untyped-mock-factory.md
        'jest/no-untyped-mock-factory': 'off',

        // Enforce padding around afterAll blocks
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/padding-around-after-all-blocks.md
        'jest/padding-around-after-all-blocks': 'off',

        // Enforce padding around afterEach blocks
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/padding-around-after-each-blocks.md
        'jest/padding-around-after-each-blocks': 'off',

        // Enforce padding around Jest functions
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/padding-around-all.md
        'jest/padding-around-all': 'off',

        // Enforce padding around beforeAll blocks
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/padding-around-before-all-blocks.md
        'jest/padding-around-before-all-blocks': 'off',

        // Enforce padding around beforeEach blocks
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/padding-around-before-each-blocks.md
        'jest/padding-around-before-each-blocks': 'off',

        // Enforce padding around describe blocks
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/padding-around-describe-blocks.md
        'jest/padding-around-describe-blocks': 'off',

        // Enforce padding around expect groups
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/padding-around-expect-groups.md
        'jest/padding-around-expect-groups': 'off',

        // Enforce padding around afterAll blocks
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/padding-around-test-blocks.md
        'jest/padding-around-test-blocks': 'off',

        // Suggest using toBeCalledWith() or toHaveBeenCalledWith()
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-called-with.md
        'jest/prefer-called-with': 'error',

        // Suggest using the built-in comparison matchers
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-comparison-matcher.md
        'jest/prefer-comparison-matcher': 'off',

        // Prefer using .each rather than manual loops
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-each.md
        'jest/prefer-each': 'off',

        // Suggest using the built-in equality matchers
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-equality-matcher.md
        'jest/prefer-equality-matcher': 'off',

        // Suggest using expect.assertions() OR expect.hasAssertions()
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-assertions.md
        'jest/prefer-expect-assertions': 'off',

        // Prefer await expect(...).resolves over expect(await ...) syntax
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-resolves.md
        'jest/prefer-expect-resolves': 'off',

        // Prefer having hooks in a consistent order
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-in-order.md
        'jest/prefer-hooks-in-order': 'off',

        // Suggest having hooks before any test cases
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-on-top.md
        'jest/prefer-hooks-on-top': 'error',

        // Prefer importing Jest globals
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-importing-jest-globals.md
        'jest/prefer-importing-jest-globals': 'off',

        // Prefer jest.mocked() over fn as jest.Mock
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-jest-mocked.md
        'jest/prefer-jest-mocked': 'off',

        // Enforce lowercase test names
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-lowercase-title.md
        'jest/prefer-lowercase-title': 'off',

        // Prefer mock resolved/rejected shorthands for promises
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
        'jest/prefer-mock-promise-shorthand': 'off',

        // Prefer including a hint with external snapshots
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-snapshot-hint.md
        'jest/prefer-snapshot-hint': 'off',

        // Suggest using jest.spyOn()
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-spy-on.md
        'jest/prefer-spy-on': 'off',

        // Suggest using toStrictEqual()
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-strict-equal.md
        'jest/prefer-strict-equal': 'error',

        // Suggest using toBe() for primitive literals
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-be.md
        'jest/prefer-to-be': 'off',

        // Suggest using toContain()
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-contain.md
        'jest/prefer-to-contain': 'error',

        // Suggest using toHaveLength()
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md
        'jest/prefer-to-have-length': 'error',

        // Suggest using test.todo
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-todo.md
        'jest/prefer-todo': 'off',

        // Require setup and teardown code to be within a hook
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-hook.md
        'jest/require-hook': 'off',

        // Require a message for toThrow()
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-to-throw-message.md
        'jest/require-to-throw-message': 'off',

        // Require test cases and hooks to be inside a describe block
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-top-level-describe.md
        'jest/require-top-level-describe': 'off',

        // Enforce unbound methods are called with their expected scope
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
        'jest/unbound-method': 'off',

        // Enforce valid describe() callback
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-describe-callback.md
        'jest/valid-describe-callback': 'error',

        // Enforce valid expect() usage
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect.md
        'jest/valid-expect': 'error',

        // Require promises that have expectations in their chain to be valid
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect-in-promise.md
        'jest/valid-expect-in-promise': 'error',

        // Enforce valid titles
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-title.md
        'jest/valid-title': 'error',

        // eslint-plugin-jest-extended https://github.com/jest-community/eslint-plugin-jest-extended

        // Suggest using toBeArray()
        // https://github.com/jest-community/eslint-plugin-jest-extended/blob/main/docs/rules/prefer-to-be-array.md
        'jest-extended/prefer-to-be-array': 'error',

        // Suggest using toBeFalse()
        // https://github.com/jest-community/eslint-plugin-jest-extended/blob/main/docs/rules/prefer-to-be-false.md
        'jest-extended/prefer-to-be-false': 'error',

        // Suggest using toBeObject()
        // https://github.com/jest-community/eslint-plugin-jest-extended/blob/main/docs/rules/prefer-to-be-object.md
        'jest-extended/prefer-to-be-object': 'error',

        // Suggest using toBeTrue()
        // https://github.com/jest-community/eslint-plugin-jest-extended/blob/main/docs/rules/prefer-to-be-true.md
        'jest-extended/prefer-to-be-true': 'error',

        // Suggest using toHaveBeenCalledOnce()
        // https://github.com/jest-community/eslint-plugin-jest-extended/blob/main/docs/rules/prefer-to-have-been-called-once.md
        'jest-extended/prefer-to-have-been-called-once': 'error',
      },
    },
  ],
};
