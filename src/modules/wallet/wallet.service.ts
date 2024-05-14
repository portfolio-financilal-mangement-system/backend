
import { Portfolio, FinancialAsset } from "./wallet.model";
import { WalletRepository } from "./wallet.repo";

export class WalletService {
  private walletRepository: WalletRepository;

  constructor() {
    this.walletRepository = new WalletRepository();
  }

  createPortfolio(
    userId: string,
    // PortfolioId: number,
    // name: string,
    // creationDate: string,
    assets: (typeof FinancialAsset)[]
  ): typeof Portfolio {
    const portfolio: typeof Portfolio = {
      userId,
      PortfolioId: generateUniqueId(), 
      name: "Default Portfolio Name",
      creationDate: getCurrentDate(),
      assets,
    };
    return this.walletRepository.createPortfolio(portfolio);
  }

  getPortfolio(userId: string):typeof Portfolio | undefined {
    return this.walletRepository.getPortfolio(userId);
  }

  calculatePortfolioValue(portfolio:typeof Portfolio): number {
    let totalValue = 0;
    for (const asset of portfolio.assets) {
      totalValue += asset.quantity * asset.purchasePrice;
    }
    return totalValue;
  }
}


function generateUniqueId(): number {
  return Math.floor(Math.random() * 1000000);
}

function getCurrentDate(): string {
   return new Date().toISOString();
}

