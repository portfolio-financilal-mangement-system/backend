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
      const formattedCompanies = companies.map((company, index) => ({
        name: company.shortName,
        symbol: companies[index],
        price: company.regularMarketPrice,
        change: company.regularMarketChange,
        percentChange: company.regularMarketChangePercent,
        volume: company.regularMarketVolume,
        avgVolume: company.averageVolume,
        marketCap: company.marketCap,
        peRatio: company.trailingPE,
        range52Week: company.fiftyTwoWeekRange,
      }));

      res.send({ companies: formattedCompanies });
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
        const symbolData = [];
        const symbol: any[] = result.quotes.map((quote) => [
          ...symbolData,
          quote.symbol,
        ]);
        const data = await yahooFinance.quote([...symbol]);

        const resultFormat = data.map((company, index) => ({
          name: company.shortName,
          price: company.regularMarketPrice,
          change: company.regularMarketChange,
          percentChange: company.regularMarketChangePercent,
          volume: company.regularMarketVolume,
          avgVolume: company.averageVolume,
          marketCap: company.marketCap,
          peRatio: company.trailingPE,
          range52Week: company.fiftyTwoWeekRange,
        }));

        res.send({ result: resultFormat });

        // if (data) {
        //   const productData = {
        //     name: data.shortName,
        //     symbol,
        //     price: data.regularMarketPrice,
        //     change: data.regularMarketChange,
        //     percentChange: data.regularMarketChangePercent,
        //     volume: data.regularMarketVolume,
        //     avgVolume: data.averageVolume,
        //     marketCap: data.marketCap,
        //     peRatio: data.trailingPE,
        //     range52Week: data.fiftyTwoWeekRange,
        //   };
        //   res.send({ productData });
        // } else {
        //   res.status(404).send({
        //     error:
        //       "the product you provided isn't included in our! try another one",
        //   });
        // }
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
