import type { DemoUser } from '@Demo/domain/entities/DemoUser';

export interface GetDemoUsersUseCaseInterface {
  execute: () => Promise<DemoUser[]>;
}
