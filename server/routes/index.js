import { Router } from "express";
import authRouter from "./auth.js";
import dataRouter from "./data.js";

const router = new Router();

router.use("/auth", authRouter);
router.use("/data", dataRouter);

export default router;
