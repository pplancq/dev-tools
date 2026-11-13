# React rules to consider after the migration

These rules were intentionally left disabled during the v6-to-v7 migration. Review them after the migration is complete, then enable only the rules that fit your project.

## Recommended candidates

| Rule                                  | Previous rule                        | Why consider it                                                                                                         |
| ------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `react-dom/no-missing-iframe-sandbox` | `react/iframe-missing-sandbox` (off) | Adds a sandbox requirement for embedded iframes. Review existing embeds and their required features before enabling it. |
| `react-x/use-state`                   | `react/hook-use-state` (off)         | Encourages the conventional `[value, setValue]` naming for `useState` values.                                           |

## Optional candidates

- `react-x/no-unstable-default-props` can flag object or function values recreated as component defaults. Its former `react/no-object-type-as-default-prop` rule was already off.
- `react-x/purity` can help detect impure operations during React rendering.
- The `react-web-api/*` rules can help detect leaked browser resources such as timers and event listeners. The `eslint-plugin-react-web-api` package is not installed or registered by this config; add and configure it separately before using those rules.

These are suggestions, not defaults. Enable selected rules through `extendConfig`, review their options, and run them against your project before making them required in CI.
