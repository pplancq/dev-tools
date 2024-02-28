import { fetchApi } from '@Front/api/fetchApi';
import type { Users } from '@Front/types/demoApi';

export const fetchDemoApi = async () => {
  const users = await fetchApi<Users>({
    path: 'https://jsonplaceholder.typicode.com/users',
  });

  return users.map(user => ({ ...user, username: user.username.toUpperCase(), email: user.email.toLowerCase() }));
};
