# 📁 providers

The "providers" folder is designed to expose service handlers and custom contexts that provide shared functionality across our entire application. It serves as a centralized way to manage services such as authentication, authorization, translation management, and many others.

## 📑 Table of Contents

- [Why Use a "providers" Folder?](#folder-organization)
- [Structure of a "providers" Folder](#structure)
- [Usage Example](#usage)
- [Best Practice](#best-practice)

## <span id="folder-organization">Why Use a "providers" Folder?</span>

1. **Centralization** : By grouping all our service handlers in a "providers" folder, we centralize the management of these services, making configuration and usage simpler.

2. **Reusability** : Service handlers and custom contexts exposed in this folder can be reused across different components of our application, promoting code reuse.

3. **Better Separation of Concerns** : By separating services from the user interface, we improve code readability and adhere to the separation of concerns principle.

## <span id="structure">Structure of a "providers" Folder</span>

The structure of a "providers" folder can vary based on your project's needs, but here is a typical structure you might adopt :

```
📁 providers
├── 📁 AuthProvider
├── 📁 AuthorizationProvider
├── 📁 TranslationProvider
├── 📁 CustomRouterProvider
├── 📁 CustomContextProvider
├── 📁 ...
```

Each file, such as "AuthProvider.ts" or "TranslationProvider.ts," contains a service handler or custom context intended to be used throughout your application.

## <span id="usage">🧑🏻‍💻Usage Example </span>

Suppose we have an authentication service handler "AuthProvider" in our "providers" folder:

```javascript
// AuthProvider.js
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};
```

We can then use this authentication service provider in our components by wrapping our components in the provided context:

```javascript
import { AuthProvider } from '@Front/Providers/AuthProvider';

export const App = () => {
  return <AuthProvider>{/* Vos composants React ici */}</AuthProvider>;
};
```

## <span id="best-practice">🎖️ Best Practice</span>

A good practice is to set up a Higher Order Component (HOC) "withProvider" that allows injecting all providers at
once.

Example:

```typescript
import { ComponentType } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { AuthProvider } from '@Front/Providers/AuthProvider';
import { QueryClientProvider }  from '@Front/Providers/QueryClientProvider ';

export interface WithRootProps {
  queryClient: QueryClient;
}

export const withProvider = <P extends object>(Component: ComponentType<P>) => {
  const WithProvider = ({ queryClient, ...props }: P & WithRootProps) => (
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Component {...props as P} />
        </AuthProvider>
    </QueryClientProvider>
  );
  WithProvider.displayName = `withProvider(${Component.displayName || Component.name})`

  return WithProvider

}
```

```javascript
import { withProvider } from '@Front/Providers/withProvider';
import { App } from '@Front/components/App';

const Root = withProvider(App);
```

---

**_By using a "providers" folder, we centralize the management of services and custom contexts, enhancing code reuse and ease of maintenance._**
