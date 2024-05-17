import { portfolioAttributes, StockAttributes, UserAttributes } from "./types";

export interface UserDAO {
  createUser(user: UserAttributes);
  findByCredentials(email: string, password: string);
  // logoutUser();
  updateUser(
    id: number,
    updatedField: { username?: string; firstname?: string; lastname?: string }
  );
  deleteUser(id: number);
}

export interface WalletDAO {
  createWallet(data: portfolioAttributes);
  readAllWallets(userId: number);
  readWallet(id: number, userId: number);
  deleteWallet(id: number, userId: number);
  // updateWallet(id: number, data: portfolioAttributes);
}

export interface StockDAO {
  createStock(data: StockAttributes);
}
