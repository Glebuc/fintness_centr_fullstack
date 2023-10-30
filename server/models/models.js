const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id_user: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email_user: {type: DataTypes.STRING, unique: true, comment:"Email пользователя"},
    password_user: {type: DataTypes.STRING, comment:"Пароль пользователя"},
    is_admin: {type: DataTypes.STRING, defaultValue:"USER", comment:"Роль пользователя"},
    fio_user: {type: DataTypes.STRING, comment:"ФИО пользователя"},
    age_user: {type: DataTypes.INTEGER, comment:"Возраст пользователя"},
    gender_user: {type: DataTypes.STRING, comment:"Пол пользователя"},
    birth_user: {type: DataTypes.DATE, comment:"Дата рождения пользователя"},
    phone_user: {type: DataTypes.STRING, comment:"Номер телефона пользователя"}
})

const Trainers = sequelize.define('trainers', {
    id_trainer: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio_trainer: {type: DataTypes.STRING, unique: true, comment:"ФИО тренера"},
    descript_trainer: {type: DataTypes.STRING, comment:"Описание тренера"},
    birth_trainer: {type: DataTypes.DATE, comment:"Дата рождения тренера"},
    phone_trainer: {type: DataTypes.STRING, comment:"Номер телефона тренера"},
    photo_trainer: {type: DataTypes.STRING, comment:"Фото тренера"}
})

const Athletics = sequelize.define('athletics', {
    duration: {type: DataTypes.TIME, comment:"Продолжительность тренировки"},
    time_training: {type: DataTypes.STRING, unique: true, comment:"Время тренировки"},
})

const typeTraining = sequelize.define('type_training', {
    id_type_training: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type_training: {type: DataTypes.STRING, allowNull:false}
})

const dayWeek = sequelize.define('day_week', {
    number_day_week: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, comment:"Номер дня недели"},
    day_week: {type: DataTypes.STRING, allowNull:false, comment:"День недели"}
})

const Gym = sequelize.define('gyms', {
    number_gyms: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, comment:"Номер зала"},
    name_gyms: {type: DataTypes.STRING, allowNull:false, comment:"Название зала"}
})

const News = sequelize.define('news', {
    id_news: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title_news: {type: DataTypes.STRING, unique: true, allowNull:false, comment:"Заголовок новости"},
    descript_news: {type: DataTypes.STRING, allowNull:false, comment:"Описание новости"},
})

// Добавить пару моделей для учета кошелька и абонементов пользователя

Trainers.hasMany(User)
User.belongsTo(Trainers)