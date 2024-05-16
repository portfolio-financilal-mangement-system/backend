import { DAO } from "../../utils/types/userDAO";
import UserController from "./user.controller";
import UserRepo from "./user.repo";
import UserService from "./user.service";

const repo = new UserRepo();

const userService = new UserService(repo as DAO);

const userController = new UserController(userService);

userController.initRoutes();

export { userController as userRoutes };
