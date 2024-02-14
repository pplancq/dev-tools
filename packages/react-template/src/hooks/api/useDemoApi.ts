import { fetchDemoApi } from '@Front/api/demoApi';
import type { Users } from '@Front/types/demoApi';
import { useQuery } from '@tanstack/react-query';
import { demoQuery } from './queryKey';

type UseDemoApiReturn = {
  result: Users;
  isLoading: boolean;
  isError: boolean;
};

export const useDemoApi = (): UseDemoApiReturn => {
  const { data = [], isLoading, isError } = useQuery<Users>({ queryKey: demoQuery(), queryFn: fetchDemoApi });

  return { result: data, isLoading, isError };
};
