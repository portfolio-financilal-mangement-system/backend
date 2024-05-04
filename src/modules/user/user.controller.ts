import { Request, Response, Router } from "express";
import { AuthRequest, UserAttributes } from "../../utils/types";
import { DAO } from "../../utils/userDAO";
import { auth } from "./middleware";

class UserController {
  private router = Router();
  private service: DAO;
  constructor(service: DAO) {
    this.service = service;
  }

  createUser = async (req: Request, res: Response) => {
    try {
      const { username, firstname, lastname, email, password } = req.body;
      if (!username || !firstname || !lastname || !email || !password) {
        return res.status(400).send({ error: "please fill your infomation" });
      }
      const user = await this.service.createUser(req.body);

      res.status(201).send({ message: "user has been created successfully" });
    } catch (err) {
      res.status(500).send({ err: "internal server error" });
    }
  };

  loginUser = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).send({ error: "please fill your information" });
      }
      const user = await this.service.findByCredentials(email, password);
      res.send(user);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send({ error: err.message });
      } else {
        res.status(500).send({ error: "An error occurred" });
      }
    }
  };

  me = async (req: AuthRequest, res: Response) => {
    try {
      res.send(req?.user);
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).send({ err: err.message });
      } else {
        res.status(500).send({ err: "internal server error" });
      }
    }
  };

  initRoutes() {
    this.router.post("/", this.createUser);
    this.router.post("/login", this.loginUser);
    this.router.get("/me", auth, this.me);
  }
  getRoutes() {
    return this.router;
  }
}

export default UserController;
