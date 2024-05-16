import bcrypt from "bcrypt";
import User from "./user.model";
import { UserAttributes } from "../../utils/types/types";
import { DAO } from "../../utils/types/userDAO";
class UserRepo implements DAO {
  async createUser(user: UserAttributes) {
    try {
      const createdUser = await User.create({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
      });
      return createdUser;
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
      else throw new Error("error in database");
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
  async deleteUser(id: number) {
    const deletedUser = await User.destroy({ where: { id: id } });

    if (typeof deletedUser === "undefined") {
      throw new Error("user is not found");
    }
    return deletedUser;
  }
  async updateUser(
    id: number,
    updatedField: {
      username?: string;
      firstname?: string;
      lastname?: string;
    }
  ) {
    const user = await User.findOne({ where: { id: id } });
    if (!user) throw new Error("user is not found");

    if (updatedField.username) user.username = updatedField.username;
    if (updatedField.firstname) user.firstname = updatedField.firstname;
    if (updatedField.lastname) user.lastname = updatedField.lastname;

    await user.save();
    return user;
  }
}

export default UserRepo;
