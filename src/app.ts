import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./config/dbConnection";
import { combinedRoutes } from "./routes";
import { docs } from "./utils/swagger/swagger";
import "./utils/playground/test";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(combinedRoutes);
docs(app);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("server is running on http://localhost:" + PORT);
});
