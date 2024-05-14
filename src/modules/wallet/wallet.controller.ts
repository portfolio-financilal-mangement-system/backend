
import { Request, Response } from "express";
import { WalletService } from "./wallet.service";
import { FinancialAsset } from "./wallet.model";
import axios from "axios";

const walletService = new WalletService();

export const getStocks = async (req: Request, res: Response) => {
  try {
    
    const response = await axios.get(
      "https://backend-production-fb5e.up.railway.app/docs/#/Stocks/get_stocks_all"
    );
    const stocks = response.data.companies;

    const assets:typeof FinancialAsset[] = stocks.map((stock: any) => ({
      ID: generateUniqueId(),
      purchaseDate: getCurrentDate(),
      purchasePrice: stock.price,
      quantity: 0, 
      totalCost: 0, 
    }));

  
    const userId: string = req.body.userId;
    const portfolio = walletService.createPortfolio(userId, assets);
    res.status(201).json(portfolio);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//  stock information by company name
export const getStockByName = async (req: Request, res: Response) => {
  try {
    const companyName: string = req.params.companyName;
   
    const response = await axios.get(
      `https://backend-production-fb5e.up.railway.app/docs/#/Stocks/get_stocks_search__companyName_`
    );
    const stock = response.data;

  
    const asset:typeof FinancialAsset = {
      ID: generateUniqueId(),
      purchaseDate: getCurrentDate(),
      purchasePrice: stock.price,
      quantity: 0, 
      totalCost: 0, 
    };

   
    const userId: string = req.body.userId;
    const portfolio = walletService.createPortfolio(userId, [asset]);
    res.status(201).json(portfolio);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//  stock information by product name
export const searchStocks = async (req: Request, res: Response) => {
  try {
    const productName: string = req.query.search;
    
    const response = await axios.get(
      `https://backend-production-fb5e.up.railway.app/docs/#/Stocks/get_stocks_item_seach__productName_`
    );
    const results = response.data.result;

    const assets:typeof FinancialAsset[] = results.map((result: any) => ({
      ID: generateUniqueId(),
      purchaseDate: getCurrentDate(),
      purchasePrice: 0, 
      quantity: 0, 
      totalCost: 0, 
    }));

 
    const userId: string = req.body.userId;
    const portfolio = walletService.createPortfolio(userId, assets);
    res.status(201).json(portfolio);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};


function generateUniqueId(): number {
  return Math.floor(Math.random() * 1000000);
}

function getCurrentDate(): string {
  return new Date().toISOString();
}




export const createPortfolio = (req: Request, res: Response) => {
  const userId: string = req.body.userId;
  const assets:typeof FinancialAsset[] = req.body.assets;
  const portfolio = walletService.createPortfolio(userId, assets);
  res.status(201).json(portfolio);
};

export const getPortfolio = (req: Request, res: Response) => {
  const userId: string = req.params.userId;
  const portfolio = walletService.getPortfolio(userId);
  if (portfolio) {
    const portfolioValue = walletService.calculatePortfolioValue(portfolio);
    res.status(200).json({ portfolio, portfolioValue });
  } else {
    res.status(404).json({ message: "Portfolio not found" });
  }
};
