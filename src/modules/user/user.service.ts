import { UserAttributes } from "../../utils/types";
import { DAO } from "../../utils/userDAO";

class UserService implements DAO {
  private service: DAO;
  constructor(Service: DAO) {
    this.service = Service;
  }

  async createUser(user: UserAttributes) {
    return await this.service.createUser(user);
  }
  async findByCredentials(email: string, password: string) {
    return this.service.findByCredentials(email, password);
  }
}

export default UserService;
