import type { Container } from 'inversify';
import { createContext } from 'react';

export type ServiceContextValue = {
  container: Container;
};

export const ServiceContext = createContext<ServiceContextValue | null>(null);
