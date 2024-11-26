import { createBrowserRouter } from 'react-router';
import { routeObject } from './routes';

interface CreateRouterProps {
  basename?: string;
}

export const createRouter = ({ basename }: CreateRouterProps = {}) => {
  return createBrowserRouter(routeObject, {
    basename,
  });
};
