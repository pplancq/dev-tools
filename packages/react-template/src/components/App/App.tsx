import { queryClient } from '@Front/config';
import { withProvider } from '@Front/providers';
import { createRouter } from '@Front/routing/routerFactory';
import { RouterProvider } from 'react-router';

import '@Front/assets/css';

type AppProps = {
  basename?: string;
};

const AppWithProviders = withProvider(RouterProvider);

export const App = ({ basename }: AppProps) => {
  const router = createRouter({ basename });

  return <AppWithProviders queryClient={queryClient} router={router} />;
};
