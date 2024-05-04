import { Sequelize, Model, DataTypes } from "sequelize";
import { UserAttributes } from "../../utils/types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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

  toJSON() {
    // Hide sensitive data before sending the response
    const values = { ...this.get() };
    delete values.password;
    return values;
  }

  static async generateAuthToken(user: UserAttributes) {
    // Generate JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });
    return token;
  }
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