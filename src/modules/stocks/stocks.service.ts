import { StockDAO } from "../../utils/types/DAO";
import { StockAttributes } from "../../utils/types/types";

export class StockService implements StockDAO {
  private service: StockDAO;
  constructor(Service: StockDAO) {
    this.service = Service;
  }

  async createStock(data: StockAttributes) {
    console.log(data);
    return await this.service.createStock(data);
  }

  async readAllStocks(portfolioId: number, userId: number) {
    return await this.service.readAllStocks(portfolioId, userId);
  }

  async readStock(id: number, portfolioId: number, userId: number) {
    return await this.service.readStock(id, portfolioId, userId);
  }

  async deleteStock(id: number, portfolioId: number, userId: number) {
    return await this.service.deleteStock(id, portfolioId, userId);
  }
}
