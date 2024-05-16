import { Router, Request, Response } from "express";
import { WalletService } from "./portfolio.service";
// import { FinancialAsset } from "./portfolio.model";
// import axios from "axios";
import { walletDAO } from "../../utils/types/walletDAO";
import { AuthRequest } from "../../utils/types/types";
import { auth } from "../user/middleware";

class PortfolioController {
  private controller: walletDAO;
  private router = Router();

  constructor(Controller: walletDAO) {
    this.controller = Controller;
  }

  createWallet = async (req: AuthRequest, res: Response) => {
    try {
      const { name } = req.body;
      if (!name) {
        return res
          .status(500)
          .send({ err: "please provide the name of your portfolio" });
      }
      const portfolio = await this.controller.createWallet({
        userId: req.user?.id as number,
        name: req.body.name,
      });
      res.send({ portfolio });
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).send({ err: err.message });
      } else {
        res.status(500).send({ err: "internal server error" });
      }
    }
  };

  initRoutes() {
    this.router.post("/", auth, this.createWallet);
  }

  getRoutes() {
    return this.router;
  }
}

export default PortfolioController;

// const walletService = new WalletService();

// export const getStocks = async (req: Request, res: Response) => {
//   try {
//     const response = await axios.get(
//       "https://backend-3w2u.onrender.com/docs/#/Stocks/get_stocks"
//     );
//     const stocks = response.data.companies;

//     const assets: (typeof FinancialAsset)[] = stocks.map((stock: any) => ({
//       ID: generateUniqueId(),
//       purchaseDate: getCurrentDate(),
//       purchasePrice: stock.price,
//       quantity: 0,
//       totalCost: 0,
//     }));

//     const userId: string = req.body.userId;
//     const portfolio = walletService.createPortfolio(userId, assets);
//     res.status(201).json(portfolio);
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// //  stock information by company name
// export const getStockByName = async (req: Request, res: Response) => {
//   try {
//     const companyName: string = req.params.companyName;

//     const response = await axios.get(
//       `https://backend-3w2u.onrender.com/docs/#/Stocks/get_stocks__companyName_`
//     );
//     const stock = response.data;

//     const asset: typeof FinancialAsset = {
//       ID: generateUniqueId(),
//       purchaseDate: getCurrentDate(),
//       purchasePrice: stock.price,
//       quantity: 0,
//       totalCost: 0,
//     };

//     const userId: string = req.body.userId;
//     const portfolio = walletService.createPortfolio(userId, [asset]);
//     res.status(201).json(portfolio);
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// //  stock information by product name
// export const searchStocks = async (req: Request, res: Response) => {
//   try {
//     const productName: string = req.query.search;

//     const response = await axios.get(
//       `https://backend-3w2u.onrender.com/docs/#/Stocks/get_stocks_search`
//     );
//     const results = response.data.result;

//     const assets: (typeof FinancialAsset)[] = results.map((result: any) => ({
//       ID: generateUniqueId(),
//       purchaseDate: getCurrentDate(),
//       purchasePrice: 0,
//       quantity: 0,
//       totalCost: 0,
//     }));

//     const userId: string = req.body.userId;
//     const portfolio = walletService.createPortfolio(userId, assets);
//     res.status(201).json(portfolio);
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// function generateUniqueId(): number {
//   return Math.floor(Math.random() * 1000000);
// }

// function getCurrentDate(): string {
//   return new Date().toISOString();
// }

// export const createPortfolio = (req: Request, res: Response) => {
//   const userId: string = req.body.userId;
//   const assets: (typeof FinancialAsset)[] = req.body.assets;
//   const portfolio = walletService.createPortfolio(userId, assets);
//   res.status(201).json(portfolio);
// };

// export const getPortfolio = (req: Request, res: Response) => {
//   const userId: string = req.params.userId;
//   const portfolio = walletService.getPortfolio(userId);
//   if (portfolio) {
//     const portfolioValue = walletService.calculatePortfolioValue(portfolio);
//     res.status(200).json({ portfolio, portfolioValue });
//   } else {
//     res.status(404).json({ message: "Portfolio not found" });
//   }
// };
