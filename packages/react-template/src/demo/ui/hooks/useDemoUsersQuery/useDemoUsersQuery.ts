import type { GetDemoUsersUseCaseInterface } from '@Demo/application/use-cases/GetDemoUsersUseCaseInterface';
import { DEMO_SERVICES } from '@Demo/serviceIdentifiers';
import { useService } from '@Shared/ui/hooks/useService/useService';
import { useQuery } from '@tanstack/react-query';

export const useDemoUsersQuery = () => {
  const getDemoUsersUseCase = useService<GetDemoUsersUseCaseInterface>(DEMO_SERVICES.GetDemoUsersUseCase);

  return useQuery({
    queryKey: ['demo-users'],
    queryFn: () => getDemoUsersUseCase.execute(),
  });
};
