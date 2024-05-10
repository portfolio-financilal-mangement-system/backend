
import { Request, Response } from "express";
import { WalletService } from "./wallet.service";
import { FinancialAsset } from "./wallet.model";

const walletService = new WalletService();

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
