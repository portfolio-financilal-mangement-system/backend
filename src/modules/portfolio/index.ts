import PortfolioController from "./portfolio.controller";
import WalletRepository from "./portfolio.repo";
import { WalletService } from "./portfolio.service";

const portfolioRepo = new WalletRepository();

const portfolioService = new WalletService(portfolioRepo);

const portfolioController = new PortfolioController(portfolioService);

portfolioController.initRoutes();

export { portfolioController as portfolioRoutes };

// import express from "express";
// import { json } from "body-parser";
// import { logRequest } from "./middleware";
// import {
//   createPortfolio,
//   getPortfolio,
//   getStocks,
//   getStockByName,
//   searchStocks,
// } from "./portfolio.controller";

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(json());
// app.use(logRequest);

// app.post("/portfolio", createPortfolio);
// app.get("/portfolio/:userId", getPortfolio);

// app.get("/stocks", getStocks);
// app.get("/stocks/:companyName", getStockByName);
// app.get("/stocks/search", searchStocks);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
