import { APiError } from "../error.js";

export const authMiddleware = (req, res, next) => {
  let token = req.headers.authorization;
  console.log("token", token);
  if (token === process.env.TOKEN) {
    return next();
  }
  return next(APiError.raiseError("Не авторизован", 400));
};
