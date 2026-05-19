import type { ArchitecturePrinciple } from '@Demo/application/dtos/ArchitecturePrinciple';

export interface GetArchitecturePrinciplesUseCaseInterface {
  execute: () => ArchitecturePrinciple[];
}
