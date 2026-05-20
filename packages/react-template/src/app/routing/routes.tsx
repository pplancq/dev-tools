import { demoRoutes } from '@Demo/ui/routing/demoRoutes';
import type { RouteObject } from 'react-router';

export const routeObject: RouteObject[] = [
  {
    path: '/',
    children: [demoRoutes],
  },
];
