// Este el modelo que va representar a un solo usuario a un solo objeto
export interface UserIdModel {
  // user?: UserDetailModel;
  user?: UserModel;
}
export interface UserModel {
    id: string,
    email: string,
    /* password: string, */
    roles: {
      admin: boolean
    }
}
//

// export interface UserDetailModel {
//   _id?: string;
//   email?: string;
//   roles: RolModel;
// }
export interface RolModel {
  admin: boolean;
}