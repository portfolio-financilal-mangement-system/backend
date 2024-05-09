import { Request, Response, Router } from "express";
import yahooFinance from "yahoo-finance2";

class StockController {
  private router = Router();
  getStocks = async (req: Request, res: Response) => {
    const query = req.query.search;
    const results = await yahooFinance.search("APPL");

    res.send({ results });
  };

  initRoutes() {
    this.router.get("/", this.getStocks);
  }

  getRoutes() {
    return this.router;
  }
}

export default StockController;
