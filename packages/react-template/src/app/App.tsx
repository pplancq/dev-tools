import { queryClient } from '@App/config/queryClientConfig';
import { serviceContainer } from '@App/config/serviceContainer';
import { Providers } from '@App/providers/Providers/Providers';
import { Router } from '@App/routing/Router';

import '@App/assets/css';

type AppProps = {
  basename?: string;
};

export const App = ({ basename }: AppProps) => {
  return (
    <Providers queryClient={queryClient} container={serviceContainer}>
      <Router basename={basename} />
    </Providers>
  );
};
