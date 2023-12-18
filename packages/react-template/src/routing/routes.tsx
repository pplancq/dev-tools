import { demoRoutes } from '@Front/src/pages/Demo';
import type { RouteObject } from 'react-router-dom';

export const routeObject: RouteObject[] = [
  {
    path: '/',
    children: [demoRoutes],
  },
];
