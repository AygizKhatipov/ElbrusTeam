export type User = {
    id: number,
    firstName: string,
    lastName: string,
    password: string,
    email: string,
    confirmPassword: string,
  };


  export type UserWithoutId = Omit<User, 'id'>
  export type Userid = User['id']