# 📁 types

The "types" folder: since we are using TypeScript, this folder is intended to contain custom type definition files that enhance type checking and auto-completion in your code.

## 📑 Table of Contents

- [Why use a "types" folder?](#folder-organization)
- [Structure of a "types" folder](#structure)
- [Example of usage](#usage)

## <span id="folder-organization">Why use a "types" folder?</span>

1. **Type Checking** : By defining custom types for our application, we improve type checking, making it easier to detect and prevent typing errors.

2. **Better Auto-Completion** : Custom type definition files allow code editors to provide more accurate auto-completion when working with objects, functions, and components.

3. **Integrated Documentation** : By creating explicit types, you effectively document your code, making it easier for other developers to understand your components, functions, and data.

## <span id="structure">Structure of a "types" folder</span>

The structure of a "types" folder can vary based on need, but here's a typical structure you might adopt :

```
📁 src
📁 types
├── 📄 customTypes.ts
├── 📄 apiTypes.ts
```

In this structure, each file, such as "customTypes.ts" or "apiTypes.ts," contains type definitions specific to your application. For example, you might define types for API data, business objects, or component props.

## <span id="usage">🧑🏻‍💻 Example of usage</span>

Suppose you have defined a custom type in "customTypes.ts":

```typescript
// customTypes.ts
export type User = {
  id: number;
  name: string;
  email?: string;
};
```

You can then use this type in your React components to define props or states, enhancing type checking:

```typescript
import { User } from '@Front/types/customTypes';

type UserProfileProps = {
  user: User;
};

export const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div id={user.id}>
      <h1>{user.name}</h1>
      {user.email && <p>Email: {user.email}</p>}
    </div>
  );
};
```
