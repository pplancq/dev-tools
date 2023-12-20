import { reactHookFormDemoRoutes } from '@Front/pages/Demo/ReactHookFormDemo';
import { RouteObject } from 'react-router-dom';
import { Demo } from './Demo';
import { reactQueryDemoRoutes } from './ReactQueryDemo';

export const demoRoutes: RouteObject = {
  children: [{ index: true, element: <Demo /> }, reactQueryDemoRoutes, reactHookFormDemoRoutes],
};
