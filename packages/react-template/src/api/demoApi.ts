import type { Users } from '@Front/types/demoApi';

const data: Users = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
    email: 'jane.smith@example.com',
  },
  {
    id: 3,
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 28,
    email: 'alice.johnson@example.com',
  },
  {
    id: 4,
    firstName: 'Bob',
    lastName: 'Brown',
    age: 35,
    email: 'bob.brown@example.com',
  },
];

export const fetchDemoApi = async (): Promise<Users> => {
  return new Promise<Users>((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(data);
      }, 3000);
    } catch (error) {
      reject(error);
    }
  });
};
