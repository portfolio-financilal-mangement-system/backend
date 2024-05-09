import StockController from "./stocks.controller";

const stockController = new StockController();

stockController.initRoutes();

export { stockController as stockRoutes };
