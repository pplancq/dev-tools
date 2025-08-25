---
applyTo: '**/*.{tsx,jsx}'
description: 'Instructions for creating and structuring React components.'
---

# React Component Instructions

## Naming and Structure Convention

- Components must always be placed in a folder/file `<ComponentName>/<ComponentName>.tsx`.
- Only one React component should be declared per file.
- The component name must be in PascalCase.
- The component must be a function, preferably an arrow function.
- The component must be exported at the declaration:

  ```tsx
  export const MyComponent = () => {};
  ```

## Typing

- The props type must always be declared before the component.
- The type is named `<ComponentName>Props`.
- Use predefined types (e.g. `PropsWithChildren`) if children are needed.
- The type is used in the arrow function declaration:

  ```tsx
  type MyComponentProps = {};

  export const MyComponent = (props: MyComponentProps) => {};
  ```

- Never use `FC<MyComponentProps>`.
- Export the component type if necessary.

## State Management

- Use `useState` for simple state.
- Use `useReducer` or `useContext` for complex state.
- Avoid using the same hook multiple times in a component.
- Prefer deriving a value rather than multiplying hooks.

  Example:

  ```tsx
  // Bad practice
  const id1 = useId();
  const id2 = useId();
  // Good practice
  const id1 = useId();
  const id2 = `${id1}-id2`;
  ```

## Development Principles

- Follow SOLID, DRY, KISS principles.
- Prefer code simplicity and clarity.
- Factorize common code.
- Do not declare more than one React component per file (`react/no-multi-comp`).
- Do not use conditional rendering that could cause leaked renders (`react/jsx-no-leaked-render`).
- Follow the `react/function-component-definition` rule: always declare components as arrow functions.

## Accessibility

- Follow RGAA 4 and WCAG 2.2 AA instructions (see a11y.instructions.md).
- Use explicit labels for form fields.
- Indicate required fields and input errors.
- Ensure all interactive elements are keyboard accessible.

## Performance

- Optimize rendering and avoid unnecessary re-renders (see performance-optimization.instructions.md).
- Use React.memo, useMemo, useCallback if necessary.

## Examples

### Component Declaration

```tsx
// src/shared/components/MyComponent/MyComponent.tsx

type MyComponentProps = PropsWithChildren<{
  label: string;
  onClick: () => void;
}>;

export const MyComponent = ({ label, onClick, children }: MyComponentProps) => {
  return (
    <button onClick={onClick}>
      {label}
      {children}
    </button>
  );
};
```

### Using useState

```tsx
import { useState } from 'react';

type CounterProps = { initial: number };

export const Counter = ({ initial }: CounterProps) => {
  const [count, setCount] = useState(initial);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
};
```

### Using useReducer

```tsx
import { useReducer } from 'react';

type State = { count: number };
type Action = { type: 'increment' } | { type: 'decrement' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

type CounterReducerProps = { initial: number };

export const CounterReducer = ({ initial }: CounterReducerProps) => {
  const [state, dispatch] = useReducer(reducer, { count: initial });
  return (
    <>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
};
```

### Accessibility Example (Form)

```tsx
import { useForm } from 'react-hook-form';

type FormProps = {};

type FormData = { email: string };

export const Form = ({}: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <label htmlFor="email">Email *</label>
      <input
        id="email"
        type="email"
        {...register('email', { required: 'Email is required' })}
        aria-invalid={!!errors.email}
        aria-describedby={errors.email ? 'email-error' : undefined}
      />
      {errors.email && (
        <span id="email-error" role="alert">
          {errors.email.message}
        </span>
      )}
      <button type="submit">Send</button>
    </form>
  );
};
```

---

These instructions must be followed for all new React components in the project.

Instructions used: [a11y.instructions.md, performance-optimization.instructions.md, follow-up-question.instructions.md, copilot-instructions.md]

> Generated with accessibility, performance, and project conventions in mind. Always manually test accessibility (e.g. with Accessibility Insights).
