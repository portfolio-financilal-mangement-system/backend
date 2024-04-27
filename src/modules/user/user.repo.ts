import User from "./user.model";
import { UserAttributes } from "./user.model";

const newUser: UserAttributes = {
  id: 1,
  username: "johndoe",
  firstname: "john",
  lastname: "Doe",

  email: "johndoe@example.com",
  password: "yourHashedPassword",
  createdAt: new Date(),
  updatedAt: new Date(),
};

class UserRepo {
  async createUser(user: UserAttributes) {
    try {
      const createdUser = await User.create(newUser);
      return createdUser;
    } catch (error) {
      return error;
    }
  }
}
