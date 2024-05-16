import { Request } from "express";

export interface UserAttributes {
  id?: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface AuthRequest extends Request {
  user?: UserAttributes;
  token?: string;
}

export interface portfolioAttributes {
  name: number;
  userId: number;
}
