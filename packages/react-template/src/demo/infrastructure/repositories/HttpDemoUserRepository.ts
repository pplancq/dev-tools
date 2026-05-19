import type { DemoUser } from '@Demo/domain/entities/DemoUser';
import type { DemoUserRepositoryInterface } from '@Demo/domain/repositories/DemoUserRepositoryInterface';
import { fetchApi } from '@Shared/infrastructure/http/fetchApi';

type DemoUserApiResponse = {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
};

export class HttpDemoUserRepository implements DemoUserRepositoryInterface {
  private readonly apiPath = 'https://jsonplaceholder.typicode.com/users';

  public readonly getAll = async (): Promise<DemoUser[]> => {
    const users = await fetchApi<DemoUserApiResponse[]>({
      path: this.apiPath,
    });

    return users.map(user => ({
      id: user.id,
      name: user.name,
      username: user.username.toUpperCase(),
      email: user.email.toLowerCase(),
      website: user.website,
    }));
  };
}
