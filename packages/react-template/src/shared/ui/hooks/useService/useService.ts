import { ServiceContext } from '@App/providers/ServiceProvider/ServiceContext';
import type { ServiceIdentifier } from 'inversify';
import { useContext } from 'react';

export const useService = <T = unknown>(serviceIdentifier: ServiceIdentifier<T>): T => {
  const context = useContext(ServiceContext);

  if (!context) {
    throw new Error('useService must be used within a ServiceProvider');
  }

  return context.container.get<T>(serviceIdentifier);
};
