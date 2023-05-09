export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}

export const authors: Author[] = [
  {
    id: 1,
    firstName: 'Lucy',
    lastName: 'Jonh',
    email: 'email@gmail.com',
    gender: 'female',
    ipAddress: 'ipAddress',
  },
  {
    id: 2,
    firstName: 'Smith',
    lastName: 'Jonh',
    email: 'email@gmail.com',
    gender: 'male',
    ipAddress: 'ipAddress',
  }
]