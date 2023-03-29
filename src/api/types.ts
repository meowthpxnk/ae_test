export interface UserModel {
  name: string,
  password: string,
  role: 'USER' | 'ADMIN',
  user: string,
}

export interface AuthInput {
  user: string;
  password: string;
}

export interface apiAuthResponce {
  status: string;
}