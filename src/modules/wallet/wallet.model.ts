import { DataTypes, Model, Sequelize } from "sequelize";

const DB_URL: string = process.env.DB_URL as string;

const sequelize = new Sequelize(DB_URL as string);

class Wallet extends Model {
  declare purchaseDate: string;
  declare purchasePrice: Date;
  declare quantity: string;
  declare totalCost: number;
}

Wallet.init(
  {
    walletId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    purchaseDate: {
      type: DataTypes.DATE,
    },
    quantity: {
      type: DataTypes.NUMBER,
    },
    totalCost: {
      type: DataTypes.NUMBER,
    },
  },
  {
    tableName: "portfolio",
    sequelize,
    modelName: "Wallet",
  }
);

export default Wallet;
