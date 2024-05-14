
// export interface FinancialAsset {
//   name: string;
//   type: string;
//   quantity: number;
//   pricePerUnit: number;
// }

// export interface Portfolio {
//   userId: string;
//   assets: FinancialAsset[];
// }

import { PORTFOLIO, ASSETPROTFOLIO } from "./walletInterface";

const FinancialAsset: ASSETPROTFOLIO = {
  ID: 0,
  purchaseDate: "",
  purchasePrice: 0,
  quantity: 0,
  totalCost:0,
};  

const Portfolio: PORTFOLIO = {
  PortfolioId: 0,
  name: "",
  userId: "",
  creationDate: "",
  assets: [FinancialAsset],
};  

 export { Portfolio, FinancialAsset };