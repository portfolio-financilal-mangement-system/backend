import { UserAttributes } from "./types";

export interface DAO {
  createUser(user: UserAttributes);
  findByCredentials(email: string, password: string);
  // logoutUser();
  updateUser(
    id: string,
    updatedField: { username?: string; firstname?: string; lastname?: string }
  );
  deleteUser(id: number);
}
