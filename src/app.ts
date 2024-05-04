import express from "express";
import dotenv from "dotenv";
import "./config/dbConnection";
import { combinedRoutes } from "./routes";
dotenv.config();

const app = express();
app.use(express.json());

app.use(combinedRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
