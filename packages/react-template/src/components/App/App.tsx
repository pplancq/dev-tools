import { createRouter } from '@Front/routing/routerFactory';
import { RouterProvider } from 'react-router-dom';

import '@Front/assets/css';

type AppProps = {
  basename?: string;
};

export const App = ({ basename }: AppProps) => {
  const router = createRouter({ basename });

  return <RouterProvider router={router} />;
};
