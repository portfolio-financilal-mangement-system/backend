import { UserAttributes } from "./types";

export interface DAO {
  createUser(user: UserAttributes);
  findByCredentials(email: string, password: string);
  logoutUser();
  readUser();
  updateUser();
  deleteUser();
}
