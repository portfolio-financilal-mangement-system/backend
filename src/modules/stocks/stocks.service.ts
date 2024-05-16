import { StockDAO } from "../../utils/types/DAO";
import { StockAttributes } from "../../utils/types/types";

export class StockService implements StockDAO {
  private service: StockDAO;
  constructor(Service: StockDAO) {
    this.service = Service;
  }

  async createStock(data: StockAttributes) {
    return await this.service.createStock(data);
  }
}
