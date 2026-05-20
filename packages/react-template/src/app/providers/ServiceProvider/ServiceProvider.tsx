import { ServiceContext } from '@App/providers/ServiceProvider/ServiceContext';
import type { Container } from 'inversify';
import type { PropsWithChildren } from 'react';
import { useRef } from 'react';

export type ServiceProviderProps = PropsWithChildren<{
  container: Container;
}>;

export const ServiceProvider = ({ container, children }: ServiceProviderProps) => {
  const containerRef = useRef({ container });

  return <ServiceContext.Provider value={containerRef.current}>{children}</ServiceContext.Provider>;
};
