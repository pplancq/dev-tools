import type { ArchitecturePrinciple } from '@Demo/application/dtos/ArchitecturePrinciple';
import type { ArchitecturePrincipleRepositoryInterface } from '@Demo/domain/repositories/ArchitecturePrincipleRepositoryInterface';

export class StaticArchitecturePrincipleRepository implements ArchitecturePrincipleRepositoryInterface {
  private readonly architecturePrinciples: ArchitecturePrinciple[] = [
    {
      title: 'Domain stays framework-free',
      description: 'The demo domain only defines contracts and pure data structures. React and Inversify stay outside.',
      layer: 'domain',
    },
    {
      title: 'Application orchestrates use cases',
      description: 'Use cases expose intent-driven APIs such as GetDemoUsersUseCase instead of leaking infrastructure.',
      layer: 'application',
    },
    {
      title: 'Infrastructure implements contracts',
      description:
        'Concrete adapters, such as the HTTP repository, live in infrastructure and are selected by the container.',
      layer: 'infrastructure',
    },
    {
      title: 'UI depends on abstractions',
      description:
        'React pages use hooks and useService to resolve use cases without importing infrastructure directly.',
      layer: 'ui',
    },
  ];

  public readonly getAll = (): ArchitecturePrinciple[] => {
    return this.architecturePrinciples;
  };
}
