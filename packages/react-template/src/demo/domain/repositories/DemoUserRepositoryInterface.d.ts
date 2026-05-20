import type { DemoUser } from '@Demo/domain/entities/DemoUser';

export interface DemoUserRepositoryInterface {
  getAll: () => Promise<DemoUser[]>;
}
