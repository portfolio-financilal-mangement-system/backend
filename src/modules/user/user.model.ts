import { Sequelize, Model, DataTypes } from "sequelize";
import { UserAttributes } from "../../utils/types";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const DB_URL: string = process.env.DB_URL as string;

const sequelize = new Sequelize(process.env.DB_URL as string);

class User extends Model {
  declare username: string;
  declare firstname: string;
  declare lastname: string;
  declare email: string;
  declare password: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",

    sequelize,
    modelName: "User",
    hooks: {
      async beforeCreate(user: UserAttributes) {
        if (user.password) {
          const saltRounds = 10;
          const hashedPassword = await bcrypt.hash(user.password, saltRounds);
          user.password = hashedPassword;
        }
      },
    },
  }
);

export default User;
