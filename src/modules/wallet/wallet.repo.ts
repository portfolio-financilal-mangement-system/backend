import { walletDAO } from "../../utils/walletDAO";
import { Wallet } from "./wallet.model";

class WalletRepository implements walletDAO {
  // private portfolios: (typeof Wallet)[] = [];

  createWallet() {}

  // getPortfolio(userId: string): typeof Portfolio | undefined {
  //   return this.portfolios.find(
  //     (portfolio) => typeof portfolio.userId === userId
  //   );
  // }
}

export default WalletRepository;
