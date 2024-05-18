import { Request, Response, Router } from "express";
import yahooFinance from "yahoo-finance2";
import axios from "axios";
import { AuthRequest } from "../../utils/types/types";
import { StockDAO } from "../../utils/types/DAO";
import { auth } from "../user/middleware";
class StockController {
  private router = Router();
  private controller: StockDAO;
  constructor(Controller: StockDAO) {
    this.controller = Controller;
  }

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
        const symbol = query.toUpperCase();
        const results = await yahooFinance.quote(query.toUpperCase());

        // Fetch historical data (for the last two days as an example)
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 10);

        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&period1=${Math.floor(
          startDate.getTime() / 1000
        )}&period2=${Math.floor(endDate.getTime() / 1000)}`;

        const historicalResponse = await axios.get(url);
        const historicalData = historicalResponse.data.chart.result[0];
        const timestamps = historicalData.timestamp;
        const quotes = historicalData.indicators.quote[0];

        const historicalStockData = timestamps.map((timestamp, index) => ({
          x: new Date(timestamp * 1000),
          open: quotes.open[index],
          high: quotes.high[index],
          low: quotes.low[index],
          close: quotes.close[index],
          volume: quotes.volume[index],
        }));

        if (results) {
          const data = {
            name: results.shortName,
            symbol: symbol,
            price: results.regularMarketPrice,
            change: results.regularMarketChange,
            percentChange: results.regularMarketChangePercent,
            previousClose: results.regularMarketPreviousClose,
            open: results.regularMarketOpen,
            bid: results.bid,
            ask: results.ask,
            daysRange: `${results.regularMarketDayLow} - ${results.regularMarketDayHigh}`,
            range52Week: `${results.fiftyTwoWeekLow} - ${results.fiftyTwoWeekHigh}`,
            volume: results.regularMarketVolume,
            avgVolume: results.averageDailyVolume3Month,
            marketCap: results.marketCap,
            beta: results.beta,
            peRatio: results.trailingPE,
            eps: results.epsTrailingTwelveMonths,
            earningsDate: results.earningsTimestamp
              ? new Date(+results?.earningsTimestamp * 1000)
              : null,
            forwardDividendYield: `${results.trailingAnnualDividendRate} (${results.trailingAnnualDividendYield})`,
            exDividendDate: results.exDividendDate
              ? new Date(results.exDividendDate * 1000)
              : null,
            targetEst1y: results.targetMeanPrice,
            historicalData: historicalStockData,
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

  addStockToPortfolio = async (req: AuthRequest, res: Response) => {
    try {
      const { company_name, shares }: { company_name: string; shares: number } =
        req.body;

      if (!company_name || !shares)
        return res.status(400).send({ err: "please provide information" });

      const id: number = +req.params.id as number;

      //  LOGIC FOR CALCULATING THE RETURN DATA
      const results = await yahooFinance.quote(company_name.toUpperCase());

      const currentPrice: number = results?.regularMarketPrice as number;
      const purchasePrice = currentPrice;
      const total_cost = purchasePrice * shares;
      let regularMarketDayHigh;
      let regularMarketDayLow;
      if (results.regularMarketDayHigh && results.regularMarketDayLow) {
        regularMarketDayLow = +results?.regularMarketDayLow as number;
        regularMarketDayHigh = +results?.regularMarketDayHigh as number;
      }
      const stock = await this.controller.createStock({
        portfolio_id: id,
        company_name,
        stock_price: currentPrice,
        total_cost,
        shares,
        fullName: results.displayName as string,
        avgAnalysisRatings: results.averageAnalystRating as string,
        twoHundredDayAverageChangePercent:
          results.twoHundredDayAverageChangePercent,
        currency: results.currency as string,
        regularMarketPrice: Number(results.regularMarketPrice),
        regularMarketTime: Number(results.regularMarketTime) as number,
      });
      res.send({ stock });
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).send({ err: err.message });
      } else {
        res.status(500).send({ err: "internal server error" });
      }
    }
  };

  getEarnings = async (req: AuthRequest, res: Response) => {
    try {
      const stockId = +req.params.stockId;
      const portfolioId = +req.params.portfolioId;
      let userId;
      if (req.user?.id) userId = +req.user?.id as number;
      const stock = await this.controller.readStock(
        stockId,
        portfolioId,
        userId
      );
      // console.log(stock.dataValues.company_name);
      const results = await yahooFinance.quote(
        stock.dataValues.company_name.toString() as string
      );
      const currentPrice: number = results?.regularMarketPrice as number;

      const earnings = +currentPrice - +stock.dataValues.stock_price;
      const totalEarnings = earnings * +stock.dataValues.shares;
      res.send({
        currentPrice,
        old_price: stock.dataValues.stock_price,
        earnings,
        totalEarnings,
      });
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).send({ err: err.message });
      } else {
        res.status(500).send({ err: "internal server error" });
      }
    }
  };

  readAllStocks = async (req: AuthRequest, res: Response) => {
    try {
      let userId;
      if (req.user?.id) {
        userId = +req.user?.id;
      }
      const portfolioId = +req.params.id as number;

      const stocks = await this.controller.readAllStocks(
        portfolioId,
        userId as number
      );
      res.send(stocks);
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).send({ err: err.message });
      } else {
        res.status(500).send({ err: "internal server error" });
      }
    }
  };

  readStock = async (req: AuthRequest, res: Response) => {
    try {
      const stockId = +req.params.stockId;
      const portfolioId = +req.params.portfolioId;
      let userId;
      if (req.user?.id) userId = +req.user?.id as number;
      const stock = await this.controller.readStock(
        stockId,
        portfolioId,
        userId
      );
      res.send({ stock });
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).send({ err: err.message });
      } else {
        res.status(500).send({ err: "internal server error" });
      }
    }
  };

  deleteStock = async (req: AuthRequest, res: Response) => {
    try {
      const stockId = +req.params.stockId;
      const portfolioId = +req.params.portfolioId;
      let userId;
      if (req.user?.id) userId = +req.user?.id as number;
      await this.controller.deleteStock(stockId, portfolioId, userId);
      res.send({ message: "stock has been deleted" });
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).send({ err: err.message });
      } else {
        res.status(500).send({ err: "internal server error" });
      }
    }
  };

  initRoutes() {
    this.router.get("/all", this.getStocks);
    this.router.get("/", this.getOneStockByCompanyName);
    this.router.get("/item", this.getOneStockByProductName);
    this.router.post("/create-stock/:id", auth, this.addStockToPortfolio);
    this.router.get("/read-all-stocks/:id", auth, this.readAllStocks);

    this.router.get("/:stockId/:portfolioId", auth, this.readStock);
    this.router.delete("/:stockId/:portfolioId", auth, this.deleteStock);

    this.router.get(
      "/get-earnings/:stockId/:portfolioId",
      auth,
      this.getEarnings
    );
  }

  getRoutes() {
    return this.router;
  }
}

export default StockController;
