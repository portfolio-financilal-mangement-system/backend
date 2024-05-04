import { UserAttributes } from "./types";

export interface DAO {
  createUser(user: UserAttributes);
}
