import type { ArchitecturePrinciple } from '@Demo/application/dtos/ArchitecturePrinciple';
import type { GetArchitecturePrinciplesUseCaseInterface } from '@Demo/application/use-cases/GetArchitecturePrinciplesUseCaseInterface';
import type { ArchitecturePrincipleRepositoryInterface } from '@Demo/domain/repositories/ArchitecturePrincipleRepositoryInterface';

export class GetArchitecturePrinciplesUseCase implements GetArchitecturePrinciplesUseCaseInterface {
  public constructor(private readonly architecturePrincipleRepository: ArchitecturePrincipleRepositoryInterface) {}

  public readonly execute = (): ArchitecturePrinciple[] => {
    return this.architecturePrincipleRepository.getAll();
  };
}
