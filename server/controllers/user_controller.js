const ApiError = require("../error/Error")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Abonement} = require('../models/models')



class UserController {


    async registration(req, res, next) {
        const {password_user, phone_user, gender_user, fio_user, email_user, age_user, is_admin} = req.body
        if (!password_user || !phone_user || !gender_user || !fio_user || !email_user || !age_user || !is_admin) {
            return next(ApiError.badRequest("Введены некорректные данные"))
        }
        const candidate = await User.findOne({where:{email_user}})
        if (candidate) {
            return next(ApiError.badRequest("Пользователь уже существует"))
        }
        const secretPassword = await bcrypt.hash(password_user, 5)
        const user = await User.create({password_user: secretPassword, phone_user, gender_user, fio_user, email_user, age_user, is_admin})
        const basket = await Abonement.create({userIdUser: user.id_user})
        const token = jwt.sign(
            {user_id:user.id_user, email_user, is_admin}, 
            process.env.SECRET_KEY, {expiresIn:'24h'}
            )

        return res.json({token})
    }


    async login(req, res, next) {
        const {email_user, password_user} = req.body
        const user = await User.findOne({where:{email_user}})
        if (!user) {
            return next(ApiError.internal("Пользователь не найден. Создайте аккаунт"))
        }
        let checkPassword = bcrypt.compareSync(password_user, user.password_user)
        if (!checkPassword) {
            return next(ApiError.badRequest("Вы ввели неправильный пароль"))
        }
        const token = jwt.sign(
            {user_id:user.id_user, email_user}, 
            process.env.SECRET_KEY, {expiresIn:'24h'}
            )

        return res.json({token})
    }


    async check(req, res, next) {
       res.json({message:"Все работает"})
    }
}

module.exports = new UserController()