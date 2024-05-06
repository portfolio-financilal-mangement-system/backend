

import { Portfolio } from "./wallet.model";

// هنا المفروض الاتصال بالداتابيز 

export class WalletRepository {
  private portfolios: Portfolio[] = [];

  createPortfolio(portfolio: Portfolio): Portfolio {
    this.portfolios.push(portfolio);
    return portfolio;
  }

  getPortfolio(userId: string): Portfolio | undefined {
    return this.portfolios.find((portfolio) => portfolio.userId === userId);
  }
}
