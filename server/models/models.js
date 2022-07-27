import { DataTypes } from "sequelize";
import sequelize from "../db.js";

export const Task = sequelize.define("task", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  text: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  change: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
});

export const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  role: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
});
