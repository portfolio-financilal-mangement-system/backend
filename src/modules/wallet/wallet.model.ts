
export interface FinancialAsset {
  name: string;
  type: string;
  quantity: number;
  pricePerUnit: number;
}

export interface Portfolio {
  userId: string;
  assets: FinancialAsset[];
}
