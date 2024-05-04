import bcrypt from "bcrypt";
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
  async findByCredentials(email: string, password: string) {
    const user: UserAttributes | null = await User.findOne({
      where: { email: email },
    });

    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("invalid credentials");
    }
    const token = await User.generateAuthToken(user);
    return { user, token };
  }
  // async logoutUser() {}

  // async updateUser(id: string, updatedField) {}
}

export default UserRepo;
