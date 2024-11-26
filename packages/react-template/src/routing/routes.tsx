import { demoRoutes } from '@Front/pages/Demo';
import { Layout } from '@Front/pages/Layout';
import type { RouteObject } from 'react-router';
import { UnexpectedError } from 'src/pages/UnexpectedError';

export const routeObject: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [demoRoutes],
    errorElement: <UnexpectedError />,
  },
];
