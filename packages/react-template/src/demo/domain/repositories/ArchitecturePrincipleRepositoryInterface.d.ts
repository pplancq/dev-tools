import type { ArchitecturePrinciple } from '@Demo/application/dtos/ArchitecturePrinciple';

export interface ArchitecturePrincipleRepositoryInterface {
  getAll: () => ArchitecturePrinciple[];
}
