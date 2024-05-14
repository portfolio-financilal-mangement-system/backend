import { Request, Response, Router } from "express";
import yahooFinance from "yahoo-finance2";
class StockController {
  private router = Router();

  getStocks = async (req: Request, res: Response) => {
    try {
      const companies = await yahooFinance.quote([
        "AAPL",
        "MSFT",
        "TADAWUL: 2222",
        "GOOGL",
        "AMZN",
        "NVDA",
        "TSLA",
        "META",
        "JNJ",
        "005930.KS",
        "0700.HK",
        "601398.SS",
        "TSM",
        "BABA",
        "WMT",
        "PG",
        "JPM",
        "BAC",
        "NESN.SW",
      ]);
      // console.log(companies);

      res.send({ companies });
    } catch (err) {
      if (err instanceof Error)
        return res.status(400).send({ err: err.message });
      res.status(500).send({ error: "internal server error" });
    }
  };

  getOneStockByCompanyName = async (req: Request, res: Response) => {
    try {
      const query: string = req.query.search as string;

      if (query) {
        const results = await yahooFinance.quote(query.toUpperCase());
        if (results) {
          const data = {
            name: results.shortName,
            symbol: query,
            price: results.regularMarketPrice,
            change: results.regularMarketChange,
            percentChange: results.regularMarketChangePercent,
            volume: results.regularMarketVolume,
            avgVolume: results.averageVolume,
            marketCap: results.marketCap,
            peRatio: results.trailingPE,
            range52Week: results.fiftyTwoWeekRange,
          };

          return res.send({ data });
        } else {
          res.send({ query: "the name is not exist" });
        }
      }
      res.send({ message: "unknow query" });
    } catch (err) {
      if (err instanceof Error) return res.status(500).send(err.message);
      res.status(500).send({ error: "internal server error" });
    }
  };

  getOneStockByProductName = async (req: Request, res: Response) => {
    try {
      const query = req.query.search;
      if (query) {
        const result = await yahooFinance.search(query as string);

        res.send({ result });
      } else {
        res.send({ error: "you must provide a query" });
      }
    } catch (err) {
      if (err instanceof Error)
        return res.status(500).send({ error: err.message });
      res.status(500).send({ error: "internal server error" });
    }
  };

  initRoutes() {
    this.router.get("/all", this.getStocks);
    this.router.get("/", this.getOneStockByCompanyName);
    this.router.get("/item", this.getOneStockByProductName);
  }

  getRoutes() {
    return this.router;
  }
}

export default StockController;
