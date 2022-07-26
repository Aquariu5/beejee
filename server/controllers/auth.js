import { User } from "../models/models.js";
import bcrypt from 'bcrypt';

import { APiError } from "../error.js";

export const login = async (req, res, next) => {
    const {name, password} = req.body;
    const user = await User.findOne({where: {name}});
    if (user) {
        const validate = bcrypt.compareSync(password, user.password);
        if (validate) {
            return res.json({token: process.env.TOKEN});
        }

    }
    return next(APiError.raiseError('Неверный логин или пароль', 400));
}

export const addUser = async (req, res, next) => {
    let {name, password, role} = req.body;
    role = role || 'USER'
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({name, password: hashPassword, role});
    return res.json(user);
}
