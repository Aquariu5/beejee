import { APiError } from "../error.js";
import { Task } from "../models/models.js";

export const getTodos = async (req, res, next) => {
  try {
    let { page, limit, sortby, sortdirection } = req.query;
    page = page || 1;
    limit = limit || 3;
    sortby = sortby || "name";
    sortdirection = sortdirection || "ASC";
    let offset = page * limit - limit;
    const tasks = await Task.findAndCountAll({
      offset,
      limit,
      order: [[sortby, sortdirection]],
    });
    return res.status(200).json(tasks);
  } catch (e) {
    return next(APiError.raiseError(`Ошибка при получении, ${e.message}`, 500));
  }
};

export const addTodo = async (req, res, next) => {
  try {
    const { name, email, text } = req.body;
    console.log("body", req.body);
    const task = await Task.create({ email, name, text });
    return res.json(task);
  } catch (e) {
    return next(APiError.raiseError(`Ошибка при создании, ${e.message}`, 500));
  }
};

export const editTodo = async (req, res, next) => {
  try {
    const { id, text, status } = req.body;
    const task = await Task.findOne({ where: { id } });
    let oldtext = task.text;
    let oldchanged = task.change;

    task.update(
      { text, status, change: oldtext !== text || oldchanged },
      { where: { id } }
    );
    return res.json(task);
  } catch (e) {
    return next(
      APiError.raiseError(`Ошибка при редактировании, ${e.message}`, 500)
    );
  }
};
