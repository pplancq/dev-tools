---
applyTo: '**/*.test.{ts,tsx,js,jsx}'
description: Instructions for writing unit and integration tests with Vitest in the front-end project.
---

# Vitest Testing Instructions (Front)

## Purpose

Ensure the quality, readability, maintainability, and accessibility of unit and integration tests in the front-end with Vitest, following the project's best practices.

## Structure and Organization

- Tests must be placed in the `tests` folder at the same level as `src`, following the same directory structure as the source code. For example, if a component is located at `src/components/Button.tsx`, its test must be placed at `tests/components/Button.test.tsx`.
- The test file name must follow the format: `<ComponentOrFunctionName>.test.ts(x)`.
- Tests must always be grouped in a `describe`, with sub-`describe` blocks if needed (maximum 2 levels).
- Each test must use the format: `it('should ...', () => { ... })`.
- Tests and examples must always be written in English.

## Imports and Tools

- Always explicitly import Vitest functions (`describe`, `it`, `expect`, etc.).
- Always use `userEvent` from Testing Library to simulate user interactions.
- Always prefer `getByRole` queries with the associated label name to target elements.
- Always use available accessibility assertions (`toHaveAccessibleName`, `toBeInTheDocument`, `toBeVisible`, `toHaveAccessibleDescription`, `toHaveAccessibleErrorMessage`, etc.) to check element accessibility.
- Always use `toHaveAccessibleName` to check accessibility links if available.

## Accessibility (a11y)

- Systematically check accessibility points (a11y): presence of roles, labels, accessible error messages, etc.
- Check the visibility, validity, and accessibility of interactive elements.
- Tests must cover error and validation cases, ensuring messages are accessible (`aria-describedby`, `aria-invalid`, etc.).
- Always test keyboard navigation and the presence of landmarks (`banner`, `main`, `contentinfo`, etc.).
- Refer to RGAA and WCAG 2.2 instructions (see `.github/instructions/a11y.instructions.md`).

## API and Mocks

- For API calls, exclusively use MSW (Mock Service Worker).
- API mocks are placed in the folder: `<front project root>/mocks`.
- Only mock external dependencies (hooks, browser, etc.) when relevant for test isolation or stability. Avoid over-mocking.

## Best Practices

- Tests must be clear, concise, and isolated.
- Prioritize readability and maintainability of test code.
- Tests must cover main use cases, edge cases, and errors.
- A test must always contain at least one `expect`.
- Use patterns present in project examples (use of `renderRoute`, `userEvent`, `screen`, mocks, etc.).
- Always check the presence and accessibility of key elements (buttons, headings, field groups, etc.).
- Test user interactions (clicks, input, navigation) and their expected effects.

## Good and Bad Test Examples

### Good Example

```tsx
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { MyButton } from '../MyButton';

describe('MyButton', () => {
  it('should render the button with accessible name', () => {
    render(<MyButton label="Submit" />);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toHaveAccessibleName('Submit');
  });

  it('should call onClick when clicked', async () => {
    const onClick = vi.fn();
    render(<MyButton label="Submit" onClick={onClick} />);
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: 'Submit' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
```

### Bad Example

```tsx
import { render } from '@testing-library/react';
import { MyButton } from '../MyButton';

test('renders', () => {
  render(<MyButton label="Submit" />);
  // No use of getByRole or accessibility assertion
});

it('should click', () => {
  // No use of userEvent, no effect verification
});
```

**Explanations:**

- Good tests use `describe`, `it should ...`, `userEvent`, accessible queries (`getByRole`), and check accessibility.
- Bad tests do not use best practices (no accessible queries, no assertions, no structure, no accessibility).

## References

- [Testing Library Docs](https://testing-library.com/docs/)
- [Vitest Docs](https://vitest.dev/guide/)
- [MSW Docs](https://mswjs.io/docs/)
- [RGAA 4](https://accessibilite.numerique.gouv.fr/)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Project a11y instructions](../../.github/instructions/a11y.instructions.md)
