import express from "express";
import dotenv from "dotenv";
dotenv.config();
import "./config/dbConnection";

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
