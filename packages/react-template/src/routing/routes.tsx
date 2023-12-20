import { demoRoutes } from '@Front/pages/Demo';
import { Error } from '@Front/pages/Error';
import { Layout } from '@Front/pages/Layout';
import type { RouteObject } from 'react-router-dom';

export const routeObject: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [demoRoutes],
    errorElement: <Error />,
  },
];
