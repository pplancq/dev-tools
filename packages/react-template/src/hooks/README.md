# 📁 hooks

The "hooks" folder is a directory you can create in your React project to group custom hooks you develop. Hooks are special functions introduced in React 16.8, allowing the management of state and lifecycle in functional components.

## 📑 Table of Contents

- [Why Use a "hooks" Folder](#folder-organization)
- [Usage Example](#usage)
- [React-Query-Folder](#folder-react-query)

## <span id="folder-organization">Why Use a "hooks" Folder?</span>

1. **Code Reusability** : Custom hooks enable reusing state and lifecycle logic across multiple functional components, promoting code reuse and adhering to the DRY (Don't Repeat Yourself) principle.

2. **Separation of Concerns** : By grouping your custom hooks in a distinct folder, you maintain a clear separation between the business logic of your application and the React components themselves.

3. **Code Clarity** : Grouping custom hooks in a "hooks" folder simplifies code maintenance and readability, making it easier to locate and understand specific logic.

## <span id="usage">🧑🏻‍💻 Usage Example</span>

Suppose you have a custom hook "useCustomHook1.js" in the "hooks" folder. You can import it and use it in a functional component like this :

```javascript
import { useCustomHook1 } from './hooks/useCustomHook1';

export const MyComponent = () => {
  const customData = useCustomHook1();

  return <div>{/* Use customData in your component */}</div>;
};
```

## <span id="folder-react-query">"api" Folder for React Query Requests</span>

Under the "hooks" folder, we have included a sub-folder "api" specifically designed to handle requests using React Query. This allows for more efficient organization of API requests, isolating them from component logic and leveraging the power of React Query for state and data caching.

The typical structure of this "api" folder might look like this:

```
📁 hooks
├── 📁 api
│   ├── 📄 useUsers.ts
│   ├── 📄 usePosts.ts
```

Each file, such as "useUsers.ts" or "usePosts.ts," contains logic to perform requests specific to a given resource. You can then use these queries in your components by importing them appropriately.

Using React Query for API request management makes data retrieval, caching, and updating easier while reducing code complexity.

### What is React Query?

React Query is an open-source JavaScript library that simplifies data management in a React application. It provides a simple and powerful way to handle network requests, data caching, error handling, and more. With React Query, you can significantly improve the development experience of your React applications by managing data efficiently.

### Key Features

#### 1. Query Management

- React Query simplifies making API requests by providing hooks for GET, POST, PUT, DELETE, etc.
- You can easily specify query options such as parameters, headers, and more.

#### 2. Data Caching

- Retrieved data is automatically cached, avoiding unnecessary API calls.
- Custom caching rules can be defined for each query.

#### 3. State Management

- React Query automatically manages data state, providing loading, success, and error states for each query.
- You can easily access query states in your components.

#### 4. Automatic Refetching

- React Query offers automatic data refetching, ensuring data is automatically refreshed at regular intervals, improving data freshness.

#### 5. Mutation Management

- The library also facilitates mutation management, such as creating, updating, and deleting data.
- Mutations are easy to define and manage.

---

**_For more information and details, refer to the
[official React Query documentation.](https://tanstack.com/query/v3/)_**
