
import { Portfolio, FinancialAsset } from "./wallet.model";
import { WalletRepository } from "./wallet.repo";

export class WalletService {
  private walletRepository: WalletRepository;

  constructor() {
    this.walletRepository = new WalletRepository();
  }

  createPortfolio(userId: string, assets: FinancialAsset[]): Portfolio {
    const portfolio: Portfolio = {
      userId,
      assets,
    };
    return this.walletRepository.createPortfolio(portfolio);
  }

  getPortfolio(userId: string): Portfolio | undefined {
    return this.walletRepository.getPortfolio(userId);
  }

  calculatePortfolioValue(portfolio: Portfolio): number {
    let totalValue = 0;
    for (const asset of portfolio.assets) {
      totalValue += asset.quantity * asset.pricePerUnit;
    }
    return totalValue;
  }
}
