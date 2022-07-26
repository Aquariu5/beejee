import { APiError } from "../error.js";

export const errorMiddleware = (err, req, res, next) => {
  if (err instanceof APiError) {
    return res.status(err.status).json({ error: err.message });
  }
  return res
    .status(500)
    .json({ error: `Непредвиденная ошибка, ${err.message}` });
};
