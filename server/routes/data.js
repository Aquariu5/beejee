import { Router } from "express";
import { addTodo, getTodos } from "../controllers/data.js";
import { editTodo } from "../controllers/data.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const dataRouter = new Router();

dataRouter.get('/', getTodos);
dataRouter.post('/', addTodo);
dataRouter.put('/', authMiddleware, editTodo);

export default dataRouter;