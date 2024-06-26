import { DataTypes, Model, Sequelize } from "sequelize";
import Portfolio from "../portfolio/portfolio.model";

const DB_URL = process.env.DB_URL;

const sequelize = new Sequelize(DB_URL as string);

class Stock extends Model {
  declare shares: number;
  declare total_cost: number;
  declare stock_price: number;
  declare company_name: string;

  declare fullName?: string;
  declare avgAnalysisRatings?: string;
  declare twoHundredDayAverageChangePercent?: number;
  declare currency?: number;
  declare regularMarketPrice?: number;
  declare regularMarketTime?: number;
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
    company_name: {
      type: DataTypes.STRING,
    },
    portfolio_id: {
      type: DataTypes.INTEGER,
    },
    fullName: {
      type: DataTypes.STRING,
    },
    avgAnalysisRatings: {
      type: DataTypes.STRING,
    },
    twoHundredDayAverageChangePercent: {
      type: DataTypes.FLOAT,
    },
    currency: {
      type: DataTypes.STRING,
    },
    regularMarketPrice: {
      type: DataTypes.FLOAT,
    },
    regularMarketTime: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "stocks",
    sequelize,
  }
);

Portfolio.hasMany(Stock, {
  onDelete: "CASCADE",
  foreignKey: "portfolio_id",
  as: "stocks",
});
Stock.belongsTo(Portfolio, { foreignKey: "portfolio_id", as: "portfolio" });

export default Stock;
