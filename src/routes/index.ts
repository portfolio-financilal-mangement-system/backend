import { Router } from "express";
import { userRoutes } from "../modules/user/index";
import { stockRoutes } from "../modules/stocks";

const router = Router();

router.use("/user", userRoutes.getRoutes());
router.use("/stocks", stockRoutes.getRoutes());

export { router as combinedRoutes };
