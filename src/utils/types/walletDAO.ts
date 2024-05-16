import { portfolioAttributes } from "./types";

export interface walletDAO {
  createWallet(data: portfolioAttributes);
}
