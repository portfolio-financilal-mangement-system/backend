import { portfolioAttributes } from "../../utils/types/types";
import { WalletDAO } from "../../utils/types/DAO";
import Portfolio from "./portfolio.model";
import Stock from "../stocks/stocks.model";

class WalletRepository implements WalletDAO {
  // private portfolios: (typeof Wallet)[] = [];

  async createWallet(data: portfolioAttributes) {
    try {
      const portfolio = await Portfolio.create({
        portfolio_name: data.name,
        userId: data.userId,
      });

      return portfolio;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        throw new Error("something went wrong");
      }
    }
  }

  async readAllWallets(userId: number) {
    try {
      const portfolios: any[] = await Portfolio.findAll({
        where: {
          userId: userId,
        },
      });

      const portfoliosWithStockCount = await Promise.all(
        portfolios.map(async (portfolio) => {
          const stocks = await Stock.findAll({
            where: { portfolio_id: portfolio.dataValues.portfolio_id },
          });

          return {
            ...portfolio.dataValues,
            stocks: stocks,
          };
        })
      );

      return portfoliosWithStockCount;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        throw new Error("something went wrong");
      }
    }
  }
  async readWallet(id: number, userId: number) {
    try {
      const portfolio = await Portfolio.findOne({
        where: { portfolio_id: id, userId: userId },
      });
      return portfolio;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        throw new Error("something went wrong");
      }
    }
  }

  async deleteWallet(id: number, userId: number) {
    try {
      return await Portfolio.destroy({
        where: { portfolio_id: id, userId: userId },
      });
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        throw new Error("something went wrong");
      }
    }
  }
  // async updateWallet(id: number, data: portfolioAttributes) {}

  // async deleteWallet(id: number) {}
  // getPortfolio(userId: string): typeof Portfolio | undefined {
  //   return this.portfolios.find(
  //     (portfolio) => typeof portfolio.userId === userId
  //   );
  // }
}

export default WalletRepository;
