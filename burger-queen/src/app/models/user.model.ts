// Este el modelo que va representar a un solo usuario a un solo objeto

export interface UserModel {
    id: string,
    email: string,
    password: string,
    admin: boolean,
}

//
export interface IUserModel {
    user?: UserDetailModel;
  }
  export interface UserDetailModel {
    _id?: string;
    email?: string;
    roles: RolModel;
  }
  export interface RolModel {
    admin: boolean;
  }