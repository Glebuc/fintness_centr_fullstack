const ApiError = require("../error/Error")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Abonement} = require('../models/models')


const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}


class UserController {


    async registration(req, res, next) {
        const {password_user, phone_user, gender_user, fio_user, email_user, age_user, is_admin} = req.body
        if (!password_user || !phone_user || !gender_user || !fio_user || !email_user || !age_user || !is_admin || !age_user) {
            return next(ApiError.badRequest("Введены некорректные данные"))
        }
        const candidate = await User.findOne({where:{email_user}})
        if (candidate) {
            return next(ApiError.badRequest("Пользователь уже существует"))
        }
        const secretPassword = await bcrypt.hash(password_user, 5)
        const user = await User.create({password_user: secretPassword, phone_user, gender_user, fio_user, email_user, age_user, is_admin})
        const abonement = await Abonement.create({userIdUser: user.id_user})
        const token = generateJwt(user.id_user, user.email_user, user.is_admin)
        return res.json({token})
    }


    async login(req, res, next) {
        const {email_user, password_user} = req.body
        const user = await User.findOne({where: {email_user}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password_user, user.password_user)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.user_id, user.email_user, user.is_admin)
        return res.json({token})
    }


    async check(req, res, next) {
        const token = generateJwt(req.user.id_user, req.user.email_user, req.user.is_admin)
        return res.json({token})
    }
}

module.exports = new UserController()