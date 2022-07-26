import { Router } from "express";
import { addUser, login } from "../controllers/auth.js";

const authRouter = new Router();

authRouter.post("/", login);
authRouter.post("/add", addUser);

export default authRouter;
