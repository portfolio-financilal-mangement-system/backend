import { portfolioAttributes } from "../../utils/types/types";
import { WalletDAO } from "../../utils/types/DAO";

export class WalletService implements WalletDAO {
  private service: WalletDAO;

  constructor(Service: WalletDAO) {
    this.service = Service;
  }

  async createWallet(data: portfolioAttributes) {
    return await this.service.createWallet(data);
  }

  // getPortfolio(userId: string): typeof Portfolio | undefined {
  //   return this.walletRepository.getPortfolio(userId);
  // }

  // calculatePortfolioValue(portfolio: typeof Portfolio): number {
  //   let totalValue = 0;
  //   for (const asset of portfolio.assets) {
  //     totalValue += asset.quantity * asset.purchasePrice;
  //   }
  //   return totalValue;
  // }
}

// function generateUniqueId(): number {
//   return Math.floor(Math.random() * 1000000);
// }

// function getCurrentDate(): string {
//   return new Date().toISOString();
// }
