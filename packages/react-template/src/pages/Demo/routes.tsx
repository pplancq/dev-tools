import { reactHookFormDemoRoutes } from '@Front/pages/Demo/ReactHookFormDemo';
import { RouteObject } from 'react-router';
import { Demo } from './Demo';
import { reactQueryDemoRoutes } from './ReactQueryDemo';

export const demoRoutes: RouteObject = {
  children: [{ index: true, element: <Demo /> }, reactQueryDemoRoutes, reactHookFormDemoRoutes],
};
