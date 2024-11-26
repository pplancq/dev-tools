# 📁routing

The "routing" folder is responsible for managing navigation within the application. We use the `react-router` library to facilitate route creation and navigation between different views of our application.

## 📑 Table of Contents

- [Folder Organization](#folder-organization)
- [Using `react-router`](#react-router)
- [Using `appRoutes.ts`](#using-appRoutes)
- [Learn More](#learn-more)

## <span id="folder-organization">Folder Organization</span>

In the "routing" folder, you can find the following files and components:

1. **`routesObject.tsx`** : This file contains the configuration of our main router. It declares the various routes of the application and defines the components associated with each route.

2. **`routerFactory.ts`** : The `routerFactory.ts` file can contain functions or reusable components related to routing. You can place routing utilities or custom components to facilitate navigation management in our application.

3. **`appRoutes.ts`** It contains a simple structure to define the paths of our application.

## <span id="react-router">🧑🏻‍💻 Using `react-router` </span>

`react-router` is a library that makes it easy to create routes in a React application. You can import it into the appropriate files to define routes and manage navigation between views. Here's a simple example of its usage:

```javascript
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router/dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
```

## <span id="using-appRoutes">Using `appRoutes.ts`</span>

How to define a router with parameters ?

The simplest way is to write it with the parameters as `react-router` requires, and when using it in a `NavLink` call the `generatPath` function from `react-router`.

For example:

```javascript
// appRoutes.ts
export const appRoutes = {
  home: '/',
  post: '/post',
  article: '/post/:id',
};
// component.tsx
import { NavLink, generatePath } from 'react-router/dom';
import { appRoutes } from '@Front/routing/appRoutes';
export const ComponentName = () => {
  return <NavLink to={generatePath(appRoutes.article, { id: 1 })}>link to article 1</NavLink>;
};
```

With the `generatePath` function, it is possible to generate URIs with dynamic parameters.

## <span id="learn-more">🙇 Learn More</span>

- [React Router](https://reactrouter.com/en/main/start/overview)
