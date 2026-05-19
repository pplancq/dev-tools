import type { ArchitecturePrincipleRepositoryInterface } from '@Demo/domain/repositories/ArchitecturePrincipleRepositoryInterface';
import type { DemoUserRepositoryInterface } from '@Demo/domain/repositories/DemoUserRepositoryInterface';
import { StaticArchitecturePrincipleRepository } from '@Demo/infrastructure/repositories/StaticArchitecturePrincipleRepository';
import { HttpDemoUserRepository } from '@Demo/infrastructure/repositories/HttpDemoUserRepository';
import { GetArchitecturePrinciplesUseCase } from '@Demo/application/use-cases/GetArchitecturePrinciplesUseCase';
import type { GetArchitecturePrinciplesUseCaseInterface } from '@Demo/application/use-cases/GetArchitecturePrinciplesUseCaseInterface';
import { GetDemoUsersUseCase } from '@Demo/application/use-cases/GetDemoUsersUseCase';
import type { GetDemoUsersUseCaseInterface } from '@Demo/application/use-cases/GetDemoUsersUseCaseInterface';
import { ContainerModule } from 'inversify';
import { DEMO_SERVICES } from './serviceIdentifiers';

export const serviceDemo: ContainerModule = new ContainerModule(options => {
  options
    .bind<DemoUserRepositoryInterface>(DEMO_SERVICES.DemoUserRepository)
    .toDynamicValue(() => new HttpDemoUserRepository())
    .inSingletonScope();

  options
    .bind<GetDemoUsersUseCaseInterface>(DEMO_SERVICES.GetDemoUsersUseCase)
    .toDynamicValue(
      services => new GetDemoUsersUseCase(services.get<DemoUserRepositoryInterface>(DEMO_SERVICES.DemoUserRepository)),
    )
    .inSingletonScope();

  options
    .bind<ArchitecturePrincipleRepositoryInterface>(DEMO_SERVICES.ArchitecturePrincipleRepository)
    .toDynamicValue(() => new StaticArchitecturePrincipleRepository())
    .inSingletonScope();

  options
    .bind<GetArchitecturePrinciplesUseCaseInterface>(DEMO_SERVICES.GetArchitecturePrinciplesUseCase)
    .toDynamicValue(
      services =>
        new GetArchitecturePrinciplesUseCase(
          services.get<ArchitecturePrincipleRepositoryInterface>(DEMO_SERVICES.ArchitecturePrincipleRepository),
        ),
    )
    .inSingletonScope();
});
