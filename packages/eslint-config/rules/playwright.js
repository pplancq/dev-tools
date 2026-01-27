import playwrightPlugin from 'eslint-plugin-playwright';
import globals from 'globals';

export const playwrightRules = {
  plugins: {
    playwright: playwrightPlugin,
  },
  languageOptions: {
    globals: {
      ...globals['shared-node-browser'],
    },
  },
  settings: {
    playwright: {
      globalAliases: {
        test: ['test', 'it'],
        expect: ['expect'],
      },
    },
  },
  rules: {
    // eslint https://eslint.org
    'no-empty-pattern': 'off',

    // eslint-plugin-playwright https://github.com/playwright-community/eslint-plugin-playwright

    // playwright/expect-expect
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/expect-expect.md
    'playwright/expect-expect': 'warn',

    // playwright/max-expects
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/max-expects.md
    'playwright/max-expects': 'off',

    // playwright/max-nested-describe
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/max-nested-describe.md
    'playwright/max-nested-describe': 'warn',

    // playwright/missing-playwright-await
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/missing-playwright-await.md
    'playwright/missing-playwright-await': 'error',

    // playwright/no-commented-out-tests
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-commented-out-tests.md
    'playwright/no-commented-out-tests': 'off',

    // playwright/no-conditional-expect
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-conditional-expect.md
    'playwright/no-conditional-expect': 'warn',

    // playwright/no-conditional-in-test
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-conditional-in-test.md
    'playwright/no-conditional-in-test': 'warn',

    // playwright/no-duplicate-hooks
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-duplicate-hooks.md
    'playwright/no-duplicate-hooks': 'off',

    // playwright/no-element-handle
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-element-handle.md
    'playwright/no-element-handle': 'warn',

    // playwright/no-eval
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-eval.md
    'playwright/no-eval': 'warn',

    // playwright/no-focused-test
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-focused-test.md
    'playwright/no-focused-test': 'error',

    // playwright/no-force-option
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-force-option.md
    'playwright/no-force-option': 'warn',

    // playwright/no-get-by-title
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-get-by-title.md
    'playwright/no-get-by-title': 'off',

    // playwright/no-hooks
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-hooks.md
    'playwright/no-hooks': 'off',

    // playwright/no-nested-step
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-nested-step.md
    'playwright/no-nested-step': 'warn',

    // playwright/no-networkidle
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-networkidle.md
    'playwright/no-networkidle': 'error',

    // playwright/no-nth-methods
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-nth-methods.md
    'playwright/no-nth-methods': 'off',

    // playwright/no-page-pause
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-page-pause.md
    'playwright/no-page-pause': 'warn',

    // playwright/no-raw-locators
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-raw-locators.md
    'playwright/no-raw-locators': 'off',

    // playwright/no-restricted-matchers
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-restricted-matchers.md
    'playwright/no-restricted-matchers': 'off',

    // playwright/no-skipped-test
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-skipped-test.md
    'playwright/no-skipped-test': 'warn',

    // playwright/no-slowed-test
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-slowed-test.md
    'playwright/no-slowed-test': 'off',

    // playwright/no-standalone-expect
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-standalone-expect.md
    'playwright/no-standalone-expect': 'error',

    // playwright/no-unsafe-references
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-unsafe-references.md
    'playwright/no-unsafe-references': 'error',

    // playwright/no-useless-await
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-useless-await.md
    'playwright/no-useless-await': 'warn',

    // playwright/no-useless-not
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-useless-not.md
    'playwright/no-useless-not': 'warn',

    // playwright/no-wait-for-selector
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-wait-for-selector.md
    'playwright/no-wait-for-selector': 'warn',

    // playwright/no-wait-for-timeout
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/no-wait-for-timeout.md
    'playwright/no-wait-for-timeout': 'warn',

    // playwright/prefer-comparison-matcher
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-comparison-matcher.md
    'playwright/prefer-comparison-matcher': 'off',

    // playwright/prefer-equality-matcher
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-equality-matcher.md
    'playwright/prefer-equality-matcher': 'off',

    // playwright/prefer-hooks-in-order
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-hooks-in-order.md
    'playwright/prefer-hooks-in-order': 'off',

    // playwright/prefer-hooks-on-top
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-hooks-on-top.md
    'playwright/prefer-hooks-on-top': 'off',

    // playwright/prefer-locator
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-locator.md
    'playwright/prefer-locator': 'off',

    // playwright/prefer-lowercase-title
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-lowercase-title.md
    'playwright/prefer-lowercase-title': 'off',

    // playwright/prefer-native-locators
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-native-locators.md
    'playwright/prefer-native-locators': 'off',

    // playwright/prefer-strict-equal
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-strict-equal.md
    'playwright/prefer-strict-equal': 'error',

    // playwright/prefer-to-be
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-be.md
    'playwright/prefer-to-be': 'off',

    // playwright/prefer-to-contain
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-contain.md
    'playwright/prefer-to-contain': 'error',

    // playwright/prefer-to-have-count
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-have-count.md
    'playwright/prefer-to-have-count': 'error',

    // playwright/prefer-to-have-length
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-have-length.md
    'playwright/prefer-to-have-length': 'error',

    // playwright/prefer-web-first-assertions
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-web-first-assertions.md
    'playwright/prefer-web-first-assertions': 'error',

    // playwright/require-hook
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/require-hook.md
    'playwright/require-hook': 'off',

    // playwright/require-soft-assertions
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/require-soft-assertions.md
    'playwright/require-soft-assertions': 'off',

    // playwright/require-to-throw-message
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/require-to-throw-message.md
    'playwright/require-to-throw-message': 'off',

    // playwright/require-top-level-describe
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/require-top-level-describe.md
    'playwright/require-top-level-describe': 'off',

    // playwright/valid-describe-callback
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/valid-describe-callback.md
    'playwright/valid-describe-callback': 'error',

    // playwright/valid-expect
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/valid-expect.md
    'playwright/valid-expect': 'error',

    // playwright/valid-expect-in-promise
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/valid-expect-in-promise.md
    'playwright/valid-expect-in-promise': 'error',

    // playwright/valid-title
    // https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/valid-title.md
    'playwright/valid-title': 'error',
  },
};
