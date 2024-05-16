import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "./user.model";
import { AuthRequest, UserAttributes } from "../../utils/types/types";

const auth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token: string = req
      .header("Authorization")
      ?.replace("Bearer ", "") as string;

    const decoded: any = await jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );
    const user: UserAttributes = (await User.findOne({
      where: { id: decoded.id },
    })) as UserAttributes;

    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    res.status(400).send({ error: "please Authenticate" });
  }
};

export { auth };
