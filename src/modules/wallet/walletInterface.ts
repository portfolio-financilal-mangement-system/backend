
export interface ASSETPROTFOLIO {
  ID: number;
  purchaseDate: string;
  purchasePrice: number;
  quantity: number;
  totalCost:number;
}

export interface PORTFOLIO {
  PortfolioId:number;
  name:string;
  userId: string;
  creationDate:string;
  assets: ASSETPROTFOLIO[];
}
