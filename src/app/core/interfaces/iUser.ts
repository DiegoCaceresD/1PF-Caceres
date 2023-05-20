export interface IUser {
  id: number;
  name: string;
  user: string;
  password: string;
  email: string;
  token: string;
  role: string;
}

export interface NewUser {
  name: string;
  user: string;
  password: string;
  email: string;
  token: string;
  role: string;
}
export interface LoginUser{
  user: string;
  password: string;
}
