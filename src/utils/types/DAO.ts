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
}

export interface StockDAO {
  createStock(data: StockAttributes);
}
