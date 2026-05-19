import { RouterProvider, createBrowserRouter } from 'react-router';
import { routeObject } from './routes';

type RouterProps = {
  basename?: string;
};

export const Router = ({ basename }: RouterProps = {}) => {
  const router = createBrowserRouter(routeObject, {
    basename,
  });

  return <RouterProvider router={router} />;
};
