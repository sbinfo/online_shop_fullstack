const ApiError = require("../error/ApiError");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User, Basket } = require('../models/models');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    );
}

class UserController {
    async registration (req, res, next) {
        const { email, password, role } = req.body;

        if (!email) {
            next(ApiError.badRequest("Incorrect email"));
        }

        if (!password) {
            next(ApiError.badRequest("Incorrect password"));
        }

        const candidate = await User.findOne({ where: {email} });
        if (candidate) {
            next(ApiError.badRequest("A user with this email already exists"));
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ email, role, password: hashPassword });
        const basket = await Basket.create({ userId: user.id });
        const token = generateJwt(user.id, user.email, user.role)

       res.json({ token }) 
    }

    async login (req, res, next) {
        const {email, password} = req.body;

        const user = await User.findOne({ where: {email} });
        if (!user) {
            return next(ApiError.internal("User with this email not found"));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal("Incorrect password"));
        }

        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token });
    }

    async check (req, res, next) {
        const { id } = req.query;
        if (!id) {
            return next(ApiError.badRequest('User ID not specified.'));
        }
        res.json(`user id: ${ id }`);
    }
}

module.exports = new UserController();