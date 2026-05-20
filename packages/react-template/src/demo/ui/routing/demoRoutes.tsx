import { demoAppRoutes } from '@Demo/ui/routing/demoAppRoutes';
import { DemoLayout } from '@Demo/ui/layouts/DemoLayout/DemoLayout';
import { DemoHome } from '@Demo/ui/pages/DemoHome/DemoHome';
import { DependencyInjectionDemo } from '@Demo/ui/pages/DependencyInjectionDemo/DependencyInjectionDemo';
import { ReactHookFormDemo } from '@Demo/ui/pages/ReactHookFormDemo/ReactHookFormDemo';
import { ReactQueryDemo } from '@Demo/ui/pages/ReactQueryDemo/ReactQueryDemo';
import type { RouteObject } from 'react-router';

const toRelativePath = (path: string) => path.replace(/^\//, '');

export const demoRoutes: RouteObject = {
  element: <DemoLayout />,
  children: [
    {
      index: true,
      element: <DemoHome />,
    },
    {
      path: toRelativePath(demoAppRoutes.reactQuery),
      element: <ReactQueryDemo />,
    },
    {
      path: toRelativePath(demoAppRoutes.reactHookForm),
      element: <ReactHookFormDemo />,
    },
    {
      path: toRelativePath(demoAppRoutes.dependencyInjection),
      element: <DependencyInjectionDemo />,
    },
  ],
};
