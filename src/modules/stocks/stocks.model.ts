import { DataTypes, Model, Sequelize } from "sequelize";
import Portfolio from "../portfolio/portfolio.model";

const DB_URL = process.env.DB_URL;

const sequelize = new Sequelize(DB_URL as string);

class Stock extends Model {
  declare shares: number;
  declare total_cost: number;
  declare stock_price: number;
  declare stock_date: Date;
  declare company_name: string;
}

Stock.init(
  {
    stock_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    shares: {
      type: DataTypes.INTEGER,
    },
    total_cost: {
      type: DataTypes.FLOAT,
    },
    stock_price: {
      type: DataTypes.FLOAT,
    },
    stock_date: {
      type: DataTypes.DATE,
    },
    company_name: {
      type: DataTypes.STRING,
    },
    portfolio_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "stocks",
    sequelize,
  }
);

Portfolio.hasMany(Stock, { as: "stocks" });
Stock.belongsTo(Portfolio, { foreignKey: "portfolio_id", as: "portfolio" });

export default Stock;
