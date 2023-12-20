import { QueryClientProvider } from '@Front/providers/QueryClientProvider';
import type { ComponentProps, ComponentType } from 'react';

type WithRootProps = {
  queryClient: ComponentProps<typeof QueryClientProvider>['client'];
};

export const withProvider = <P extends object>(Component: ComponentType<P>) => {
  const WithProvider = ({ queryClient, ...props }: P & WithRootProps) => (
    <QueryClientProvider client={queryClient}>
      <Component {...(props as P)} />
    </QueryClientProvider>
  );

  WithProvider.displayName = `withProvider(${Component.displayName || Component.name})`;

  return WithProvider;
};
