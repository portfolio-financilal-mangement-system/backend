import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./config/dbConnection";
import { combinedRoutes } from "./routes";
import { docs } from "./utils/swagger/swagger";
import "./utils/playground/test";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(combinedRoutes);
docs(app);
const PORT = process.env.PORT || 4000;

app.get("*", (req, res) => {
  res.end(
    "<h1>Not Found</h1><a href='https://backend-production-ac54.up.railway.app/docs'>Check the docs here</a>"
  );
});

app.listen(PORT, () => {
  console.log("server is running on http://localhost:" + PORT);
});
