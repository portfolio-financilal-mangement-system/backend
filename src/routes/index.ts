import { Router } from "express";
import { userRoutes } from "../modules/user/index";
import { stockRoutes } from "../modules/stocks";
import { portfolioRoutes } from "../modules/portfolio";

const router = Router();

router.use("/user", userRoutes.getRoutes());
router.use("/stocks", stockRoutes.getRoutes());
router.use("/portfolio", portfolioRoutes.getRoutes());

export { router as combinedRoutes };
