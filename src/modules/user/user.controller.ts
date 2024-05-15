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
      // console.log(user);
      res.status(201).send({ message: "user has been created successfully" });
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send({ err: err.message });
      } else {
        res.status(500).send({ err: "internal server error" });
      }
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
        return res.status(500).send({ error: err.message });
      } else {
        return res.status(500).send({ error: "An error occurred" });
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

  deleteUser = async (req: AuthRequest, res: Response) => {
    try {
      const id = req.user?.id;

      if (!id) throw new Error("user is not found");

      const deletedUser = await this.service.deleteUser(+id);
      if (!deletedUser) throw new Error("user is not found");
      res.send({ message: "user has been deleted" });
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).send({ err: err.message });
      } else {
        res.status(500).send({ err: "internal server error" });
      }
    }
  };

  updateUser = async (req: AuthRequest, res: Response) => {
    try {
      const id = req.user?.id;
      if (!id) throw new Error("Token has been expired");

      const updates = Object.keys(req.body);
      const allowedUpdates = ["username", "firstname", "lastname"];

      const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
      );

      if (!isValidOperation)
        return res.status(400).json({ error: "invalid updates!" });

      if (!req.body.username || !req.body.firstname || !req.body.lastname)
        return res.status(400).send({ err: "please provide with infromation" });

      const updatedUser = await this.service.updateUser(id, req.body);

      res.send(updatedUser);
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).send({ err: err.message });
      } else {
        res.status(500).send({ err: "internal server error" });
      }
    }
  };

  uploadAvatar = async (req: AuthRequest, res: Response) => {
    try {
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
    this.router.delete("/", auth, this.deleteUser);
    this.router.patch("/", auth, this.updateUser);
  }
  getRoutes() {
    return this.router;
  }
}

export default UserController;
