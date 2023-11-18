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
    id_athletics: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    duration: {type: DataTypes.TIME, comment:"Продолжительность тренировки"},
    time_training: {type: DataTypes.STRING, unique: true, comment:"Время тренировки"},
})

const typeTraining = sequelize.define('type_training', {
    id_type_training: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type_training: {type: DataTypes.STRING, allowNull:false}
})

const dayWeek = sequelize.define('day_weeks', {
    id_day_week: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, comment:"Номер дня недели"},
    day_week: {type: DataTypes.STRING, allowNull:false, comment:"День недели"}
})

const Gym = sequelize.define('gyms', {
    id_gym: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, comment:"Номер зала"},
    name_gyms: {type: DataTypes.STRING, allowNull:false, comment:"Название зала"}
})

const News = sequelize.define('news', {
    id_news: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title_news: {type: DataTypes.STRING, unique: true, allowNull:false, comment:"Заголовок новости"},
    descript_news: {type: DataTypes.STRING, allowNull:false, comment:"Описание новости"},
    img: {type: DataTypes.STRING, allowNull:false}
})


const Abonement = sequelize.define('abonement', {
    id_abonement: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    start_date: {type: DataTypes.DATEONLY, comment:"Начало абонемента" },
    end_date: {type: DataTypes.DATEONLY, comment:"Конец абонемента" }
})

const typeAbonement = sequelize.define('type_abonemnt', {
    id_type_abonement: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type_abonement: {type: DataTypes.STRING, allowNull:false},
    price_abonement: {type: DataTypes.INTEGER, allowNull:false}
}
)



Trainers.hasMany(User)
User.belongsTo(Trainers)

Trainers.hasMany(Athletics)
Athletics.belongsTo(Trainers)

dayWeek.hasMany(Athletics)
Athletics.belongsTo(dayWeek)

Gym.hasMany(Athletics)
Athletics.belongsTo(Gym)

typeTraining.hasMany(Athletics)
Athletics.belongsTo(typeTraining)

User.hasOne(Abonement)
Abonement.belongsTo(User)

User.hasMany(News)
News.belongsTo(User)

typeAbonement.hasMany(Abonement)
Abonement.belongsTo(typeAbonement)



async function addDayWeek() {
  // Добавление дней недели в базу данных
  const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

  daysOfWeek.forEach(async (day) => {
    try {
      
      const [result, created] = await dayWeek.findOrCreate({
        where: { day_week: day },
      });

      if (created) {
        console.log(`День недели "${day}" успешно добавлен.`);
      } else {
        console.log(`День недели "${day}" уже существует в базе данных.`);
      }
    } catch (error) {
      console.error(`Ошибка при добавлении дня недели "${day}": ${error.message}`);
    }
  });
}



async function addGyms() {
  // Добавление залов в базу данных
  const gymsData = ["Общий зал", "Зал Йоги", "Зал MMA", "Зал групповых тренировок"]

  gymsData.forEach(async (gym) => {
      try {
        const [result, created] = await Gym.findOrCreate({
          where: { name_gyms: gym },
        });
    
        if (created) {
          console.log(`Тренировочный зал "${gym}" успешно добавлен.`);
        } else {
          console.log(`Такой тренировочный зал "${gym}" уже существует в базе данных.`);
        }
      } catch (error) {
        console.error(`Ошибка при добавлении тренировочного зала "${gym}": ${error.message}`);
      }
    });
}

// async function isTableExist(tableName) {
//   try {
//     const tables = await sequelize.getQueryInterface().showAllTables();
//     console.log("БД создана ")
//     return tables.includes(tableName);
//   } catch (error) {
//     console.error('Ошибка при проверке таблицы:', error);
//     return false;
//   }
// }
addDayWeek()
addGyms()


module.exports = {
    User,
    Trainers,
    Abonement,
    Athletics,
    typeAbonement,
    Gym,
    News,
    typeTraining
}