import { StockDAO } from "../../utils/types/DAO";
import { portfolioAttributes, StockAttributes } from "../../utils/types/types";
import Portfolio from "../portfolio/portfolio.model";
import Stock from "./stocks.model";

class StockRepo implements StockDAO {
  async createStock(data: StockAttributes) {
    try {
      const stock = await Stock.create({
        portfolio_id: data.portfolio_id,
        shares: data.shares,
        stock_price: data.stock_price,
        total_cost: data.total_cost,
        company_name: data.company_name,
      });

      return stock;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        throw new Error("Database Error");
      }
    }
  }

  async readAllStocks(portfolioId: number, userId: number) {
    try {
      const portfolio = await Portfolio.findOne({
        where: { portfolio_id: portfolioId, userId: userId },
      });
      if (portfolio) {
        const stocks = await Stock.findAll({
          where: { portfolio_id: portfolio?.dataValues?.portfolio_id },
        });
        return stocks;
      } else {
        throw new Error("the portfolio doesn't exist");
      }
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        throw new Error("Database Error");
      }
    }
  }

  async readStock(id: number, portfolioId: number, userId: number) {
    try {
      const portfolio = await Portfolio.findOne({
        where: { portfolio_id: portfolioId, userId: userId },
      });
      if (portfolio) {
        const stocks = await Stock.findOne({
          where: {
            stock_id: id,
            portfolio_id: portfolio?.dataValues?.portfolio_id,
          },
        });
        return stocks;
      }
      throw new Error("the stock isn't exist");
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        throw new Error("Database Error");
      }
    }
  }

  async deleteStock(id: number, portfolioId: number, userId: number) {
    try {
      const portfolio = await Portfolio.findOne({
        where: { portfolio_id: portfolioId, userId: userId },
      });
      if (portfolio) {
        const stocks = await Stock.destroy({
          where: {
            stock_id: id,
            portfolio_id: portfolio?.dataValues?.portfolio_id,
          },
        });
        return stocks;
      }
      throw new Error("the stock isn't exist");
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        throw new Error("Database Error");
      }
    }
  }
}

export default StockRepo;
