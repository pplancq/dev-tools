import { type QueryClient, QueryClientProvider as ReactQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { PropsWithChildren } from 'react';

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
