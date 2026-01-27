import vitestPlugin from '@vitest/eslint-plugin';

export const vitestRules = {
  plugins: {
    '@vitest': vitestPlugin,
  },
  languageOptions: {
    globals: {
      ...vitestPlugin.environments.env.globals,
    },
  },
  rules: {
    // eslint-plugin-import https://github.com/import-js/eslint-plugin-import

    // import/no-extraneous-dependencies
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': 'off',

    // eslint-plugin-vitest https://github.com/veritem/eslint-plugin-vitest

    // Require `.spec` test file pattern
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename.md
    '@vitest/consistent-test-filename': 'off',

    // Enforce using `test` or `it` but not both
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md
    '@vitest/consistent-test-it': 'off',

    // Enforce having expectation in test body
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md
    '@vitest/expect-expect': 'off',

    // Enforce a maximum number of `expect` per test
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md
    '@vitest/max-expects': 'off',

    // Require `describe` block to be less than set max value or default value
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md
    '@vitest/max-nested-describe': 'off',

    // Disallow alias methods
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md
    '@vitest/no-alias-methods': 'off',

    // Disallow commented out tests
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md
    '@vitest/no-commented-out-tests': 'off',

    // Disallow conditional expects
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md
    '@vitest/no-conditional-expect': 'error',

    // Disallow conditional tests
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md
    '@vitest/no-conditional-in-test': 'off',

    // Disallow conditional tests
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests.md
    '@vitest/no-conditional-tests': 'off',

    // Disallow disabled tests
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md
    '@vitest/no-disabled-tests': 'off',

    // Disallow using a callback in asynchronous tests and hooks
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-done-callback.md
    '@vitest/no-done-callback': 'off',

    // Disallow duplicate hooks and teardown hooks
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md
    '@vitest/no-duplicate-hooks': 'off',

    // Disallow focused tests
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md
    '@vitest/no-focused-tests': 'off',

    // Disallow setup and teardown hooks
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md
    '@vitest/no-hooks': 'off',

    // Disallow identical titles
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md
    '@vitest/no-identical-title': 'error',

    // Disallow importing `node:test`
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test.md
    '@vitest/no-import-node-test': 'off',

    // Disallow string interpolation in snapshots
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md
    '@vitest/no-interpolation-in-snapshots': 'error',

    // Disallow large snapshots
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md
    '@vitest/no-large-snapshots': 'off',

    // Disallow importing from `mocks` directory
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md
    '@vitest/no-mocks-import': 'error',

    // Disallow the use of certain matchers
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-matchers.md
    '@vitest/no-restricted-matchers': 'off',

    // Disallow specific `vi.` methods
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md
    '@vitest/no-restricted-vi-methods': 'off',

    // Disallow using `expect` outside of `it` or `test` blocks
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect.md
    '@vitest/no-standalone-expect': 'off',

    // Disallow using `test` as a prefix
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md
    '@vitest/no-test-prefixes': 'off',

    // Disallow `return` statements in tests
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md
    '@vitest/no-test-return-statement': 'off',

    // Enforce using `toBeCalledWith()` or `toHaveBeenCalledWith()`
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md
    '@vitest/prefer-called-with': 'error',

    // Enforce using the built-in comparison matchers
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md
    '@vitest/prefer-comparison-matcher': 'off',

    // Enforce using `each` rather than manual loops
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md
    '@vitest/prefer-each': 'off',

    // Enforce using the built-in quality matchers
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md
    '@vitest/prefer-equality-matcher': 'off',

    // Enforce using `expect` assertions instead of callbacks
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md
    '@vitest/prefer-expect-assertions': 'off',

    // Enforce using `expect().resolves` over `expect(await ...)` syntax
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md
    '@vitest/prefer-expect-resolves': 'off',

    // Enforce having hooks in consistent order (`vitest/prefer-hooks-in-order`)
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md
    '@vitest/prefer-hooks-in-order': 'off',

    // Enforce having hooks before any test cases
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md
    '@vitest/prefer-hooks-on-top': 'off',

    // Enforce lowercase titles
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md
    '@vitest/prefer-lowercase-title': 'off',

    // Enforce mock resolved/rejected shorthands for promises
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
    '@vitest/prefer-mock-promise-shorthand': 'off',

    // Enforce including a hint with external snapshots
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md
    '@vitest/prefer-snapshot-hint': 'off',

    // Enforce using `vi.spyOn`
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md
    '@vitest/prefer-spy-on': 'off',

    // Enforce strict equal over equal
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md
    '@vitest/prefer-strict-equal': 'error',

    // Enforce using `toBe()`
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md
    '@vitest/prefer-to-be': 'off',

    // Enforce using `toBeFalsy()`
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md
    '@vitest/prefer-to-be-falsy': 'error',

    // Enforce using `toBeObject()`
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md
    '@vitest/prefer-to-be-object': 'error',

    // Enforce using `toBeTruthy`
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md
    '@vitest/prefer-to-be-truthy': 'error',

    // Enforce using `toContain()`
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md
    '@vitest/prefer-to-contain': 'error',

    // Enforce using `toHaveLength()`
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md
    '@vitest/prefer-to-have-length': 'error',

    // Enforce using `test.todo`
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md
    '@vitest/prefer-todo': 'off',

    // Require setup and teardown to be within a hook
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-hook.md
    '@vitest/require-hook': 'off',

    // Require local Test Context for concurrent snapshot tests
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots.md
    '@vitest/require-local-test-context-for-concurrent-snapshots': 'off',

    // Require `toThrow()` to be called with an error message
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message.md
    '@vitest/require-to-throw-message': 'off',

    // Enforce that all tests are in a top-level `describe`
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md
    '@vitest/require-top-level-describe': 'off',

    // Enforce unbound methods are called with their expected scope
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/unbound-method.md
    '@vitest/unbound-method': 'off',

    // Enforce valid `describe` callback
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md
    '@vitest/valid-describe-callback': 'error',

    // Enforce valid `expect()` usage
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md
    '@vitest/valid-expect': 'error',

    // Enforce valid titles
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md
    '@vitest/valid-title': 'warn',
  },
};
