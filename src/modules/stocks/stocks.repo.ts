import { StockDAO } from "../../utils/types/DAO";
import { StockAttributes } from "../../utils/types/types";
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
}

export default StockRepo;
