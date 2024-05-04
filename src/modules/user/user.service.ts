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
}

export default UserService;
