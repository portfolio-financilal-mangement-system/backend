
import express from "express";
import { json } from "body-parser";
import { logRequest } from "./middleware";
import {
  createPortfolio,
  getPortfolio,
  getStocks,
  getStockByName,
  searchStocks,
} from "./wallet.controller";

const app = express();
const PORT = 3000;

app.use(json());
app.use(logRequest);

app.post("/portfolio", createPortfolio);
app.get("/portfolio/:userId", getPortfolio);


app.get("/stocks", getStocks);
app.get("/stocks/:companyName", getStockByName);
app.get("/stocks/search", searchStocks);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
