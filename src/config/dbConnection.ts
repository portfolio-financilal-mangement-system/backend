import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.NAME as string,
  process.env.ROOT as string,
  process.env.PASSWORD as string,
  {
    host: process.env.HOST as string,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("connected"))
  .catch((err) => console.log("something went wrong " + err));
