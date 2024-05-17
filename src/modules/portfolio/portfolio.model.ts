import { DataTypes, Model, Sequelize } from "sequelize";
import User from "../user/user.model";

const DB_URL: string = process.env.DB_URL as string;

const sequelize = new Sequelize(DB_URL as string);

class Portfolio extends Model {
  declare portfolio_id: number;
  declare portfolio_name: string;
  declare userId: string;
}

Portfolio.init(
  {
    portfolio_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    portfolio_name: {
      type: DataTypes.STRING,
    },

    userId: {
      // Foreign key to establish the relationship
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    tableName: "portfolio",
    sequelize,
    modelName: "Portfolio",
  }
);

User.hasMany(Portfolio, {
  onDelete: "CASCADE",
  foreignKey: "userId",
  as: "portfolios",
});
Portfolio.belongsTo(User, { foreignKey: "userId", as: "user" });

export default Portfolio;
