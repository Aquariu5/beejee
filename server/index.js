import express, { Router } from "express";
import { errorMiddleware } from "./middleware/error-middleware.js";
import "dotenv/config";
import cors from "cors";
import * as models from "./models/models.js";
import sequelize from "./db.js";
import router from "./routes/index.js";
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/", router);
//last
app.use(errorMiddleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
