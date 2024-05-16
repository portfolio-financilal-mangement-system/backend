import { UserAttributes } from "../../utils/types/types";
import { UserDAO } from "../../utils/types/DAO";

class UserService implements UserDAO {
  private service: UserDAO;
  constructor(Service: UserDAO) {
    this.service = Service;
  }

  async createUser(user: UserAttributes) {
    return await this.service.createUser(user);
  }
  async findByCredentials(email: string, password: string) {
    return this.service.findByCredentials(email, password);
  }
  async deleteUser(id: number) {
    return await this.service.deleteUser(id);
  }
  async updateUser(
    id: number,
    updatedField: { username?: string; firstname?: string; lastname?: string }
  ) {
    return await this.service.updateUser(id, updatedField);
  }
}

export default UserService;
