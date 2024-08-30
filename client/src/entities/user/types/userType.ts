export type User = {
    id: number,
    firstName: string,
    lastName: string,
    password: string,
    email: string,
    confirmPassword: string,
    isMember: boolean,
    roleId: number
  };

  export type LoginFormType = {
    email: string;
    password: string;
  };


  export type UserWithoutId = Omit<User, 'id'>
  export type userWithoutConfirmPassword = Omit<UserWithoutId, 'confirmPassword'>
  export type Userid = User['id']