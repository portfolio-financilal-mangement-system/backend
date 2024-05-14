

import { Portfolio } from "./wallet.model";

export class WalletRepository {
  private portfolios: (typeof Portfolio)[] = [];

  createPortfolio(portfolio: typeof Portfolio): typeof Portfolio {
    this.portfolios.push(portfolio);
    return portfolio;
  }

  getPortfolio(userId: string): typeof Portfolio | undefined {
    return this.portfolios.find(
      (portfolio) => typeof portfolio.userId === userId
    );
  }
}
