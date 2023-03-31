export interface UserModel {
  name: string,
  password: string,
  role: 'USER' | 'ADMIN',
  user: string,
}

export interface OrderModel {
  id: number,
  name: string,
  address: string,
  date: string,
  status: 'completed' | 'new',
  comment: string,
}


export interface AuthInput {
  user: string;
  password: string;
}

// export interface apiAuthResponce {
//   status: string;
// }

export interface ApiAuthResponce {
  status: string;
  data: {
    user: UserModel;
  }
}