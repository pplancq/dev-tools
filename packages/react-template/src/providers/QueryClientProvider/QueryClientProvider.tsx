import type { PropsWithChildren } from 'react';
import { type QueryClient, QueryClientProvider as ReactQueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

type ClientProviderProps = {
  client: QueryClient;
};

export const QueryClientProvider = ({ children, client }: PropsWithChildren<ClientProviderProps>) => {
  return (
    <ReactQueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryClientProvider>
  );
};
