const ApiError = require("../error/Error")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Abonement} = require('../models/models')


class UserController {
    static async registerUser(req, res) {
      try {
        const {
          email_user,
          password_user,
          fio_user,
          age_user,
          gender_user,
          birth_user,
          phone_user,
        } = req.body;
  
        const hashedPassword = await bcrypt.hash(password_user, 10);
  
        const newUser = await User.create({
          email_user,
          password_user: hashedPassword,
          fio_user,
          age_user,
          gender_user,
          birth_user,
          phone_user,
        });
  
        res.status(201).json({ message: 'Пользователь зарегистрирован', user: newUser });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка при регистрации пользователя' });
      }
    }

    static async getAll(req, res) {
      try {
        const users = await User.findAll();
        return res.json(users);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }

    static async loginUser(req, res) {
      try {
        const { email_user, password_user } = req.body;
  
        const user = await User.findOne({ where: { email_user } });
  
        if (!user) {
          return res.status(404).json({ message: 'Пользователь не найден' });
        }
  
        const passwordMatch = await bcrypt.compare(password_user, user.password_user);
  
        if (!passwordMatch) {
          return res.status(401).json({ message: 'Неверный пароль' });
        }
  
        const token = jwt.sign(
          { email_user: user.email_user, id_user: user.id_user },
          'secret_key',
          { expiresIn: '3h' }
        );
  
        res.status(200).json({ token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка при попытке входа' });
      }
    }
  
    static async checkToken(req, res, next) {
      try {
        const token = req.headers.authorization;
  
        if (!token) {
          return res.status(401).json({ message: 'Отсутствует токен авторизации' });
        }
  
        jwt.verify(token, 'secret_key', async (err, decodedToken) => {
          if (err) {
            return res.status(403).json({ message: 'Недействительный токен' });
          }
  
          const user = await User.findOne({ where: { id_user: decodedToken.id_user } });
  
          if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' });
          }
  
          req.user = user;
          next();
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка при проверке токена' });
      }
    }
  }
  
  module.exports = UserController;