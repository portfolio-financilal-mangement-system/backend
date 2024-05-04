import User from "./user.model";
import { UserAttributes } from "../../utils/types";
import { DAO } from "../../utils/userDAO";
class UserRepo implements DAO {
  async createUser(user: UserAttributes) {
    try {
      console.log(user);

      const createdUser = await User.create({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
      });
      console.log(createdUser);
      return createdUser;
    } catch (error) {
      return error;
    }
  }
}

export default UserRepo;
