import { QueryClientProvider } from '@App/providers/QueryClientProvider/QueryClientProvider';
import { ServiceProvider } from '@App/providers/ServiceProvider/ServiceProvider';
import type { QueryClient } from '@tanstack/react-query';
import type { Container } from 'inversify';
import type { PropsWithChildren } from 'react';

type ProvidersProps = PropsWithChildren<{
  queryClient: QueryClient;
  container: Container;
}>;

export const Providers = ({ queryClient, container, children }: ProvidersProps) => {
  return (
    <ServiceProvider container={container}>
      <QueryClientProvider queryClient={queryClient}>{children}</QueryClientProvider>
    </ServiceProvider>
  );
};
