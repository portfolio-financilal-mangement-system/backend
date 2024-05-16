import StockController from "./stocks.controller";
import StockRepo from "./stocks.repo";
import { StockService } from "./stocks.service";

const stockRepo = new StockRepo();
const stockService = new StockService(stockRepo);

const stockController = new StockController(stockService);

stockController.initRoutes();

export { stockController as stockRoutes };
