import type { GetDemoUsersUseCaseInterface } from '@Demo/application/use-cases/GetDemoUsersUseCaseInterface';
import type { DemoUser } from '@Demo/domain/entities/DemoUser';
import type { DemoUserRepositoryInterface } from '@Demo/domain/repositories/DemoUserRepositoryInterface';

export class GetDemoUsersUseCase implements GetDemoUsersUseCaseInterface {
  public constructor(private readonly demoUserRepository: DemoUserRepositoryInterface) {}

  public readonly execute = async (): Promise<DemoUser[]> => {
    return this.demoUserRepository.getAll();
  };
}
