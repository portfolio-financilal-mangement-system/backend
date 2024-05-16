import { portfolioAttributes } from "../../utils/types/types";
import { WalletDAO } from "../../utils/types/DAO";
import Portfolio from "./portfolio.model";

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

  // getPortfolio(userId: string): typeof Portfolio | undefined {
  //   return this.portfolios.find(
  //     (portfolio) => typeof portfolio.userId === userId
  //   );
  // }
}

export default WalletRepository;
