
import express from "express";
import { json } from "body-parser";
import { logRequest } from "./middleware";
import { createPortfolio, getPortfolio } from "./wallet.controller";

const app = express();
const PORT = 3000;

app.use(json());
app.use(logRequest);

app.post("/portfolio", createPortfolio);
app.get("/portfolio/:userId", getPortfolio);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
