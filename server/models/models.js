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
    photo_trainer: {type: DataTypes.STRING, comment:"Фото тренера"},
    specialization_trainer: {type: DataTypes.STRING, comment:"Специализация тренера"}
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

const typeAbonement = sequelize.define('type_abonement', {
    id_type_abonement: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type_abonement: {type: DataTypes.STRING, allowNull:false, comment:"Тип абонемента"},
    duration_abonement: {type: DataTypes.STRING, allowNull:false, comment:"Продолжительность абонемента (год || месяц)"},
    descript_abonement: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true, comment:"Массив описания преимущетсв абонемента"},
    price_abonement: {type: DataTypes.INTEGER, allowNull:false, comment:"Цена абонемента"}
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


async function addToDatabase(data, Model, modelName) {
  data.forEach(async (item) => {
    try {
      const [result, created] = await Model.findOrCreate({
        where: { [modelName]: item },
      });

      if (created) {
        console.log(`"${item}" успешно добавлено в базу данных.`);
      } else {
        console.log(`"${item}" уже существует в базе данных.`);
      }
    } catch (error) {
      console.error(`Ошибка при добавлении "${item}": ${error.message}`);
    }
  });
}


async function addDataToDatabase() {
  const gymsData = ["Общий зал", "Зал Йоги", "Зал MMA", "Зал групповых тренировок"];
  await addToDatabase(gymsData, Gym, 'name_gyms');

  const typeTrainingData = ["ММА", "Йога", "Кроссфит", "Групповая тренировка"];
  await addToDatabase(typeTrainingData, typeTraining, 'type_training');

  const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  await addToDatabase(daysOfWeek, dayWeek, 'day_week');
}


addDataToDatabase()
  .then(() => {
    console.log('Данные успешно добавлены в базу данных.');
  })
  .catch((error) => {
    console.error('Ошибка при добавлении данных:', error);
  });



  async function fillNewsWithData() {
    const testData = [
      {
        title_news: 'Новость 1',
        descript_news: 'Описание новости 1',
        img: 'image1.jpg'
      },
      {
        title_news: 'Новость 2',
        descript_news: 'Описание новости 2',
        img: 'image2.jpg'
      },
      {
        title_news: 'Новость 3',
        descript_news: 'Описание новости 3',
        img: 'gallery1.jpg'
      },
      {
        title_news: 'Новость 4',
        descript_news: 'Описание новости 4',
        img: 'gallery2.webp'
      },
      {
        title_news: 'Новость 5',
        descript_news: 'Описание новости 5',
        img: 'gallery3.jpg'
      },
      {
        title_news: 'Новость 6',
        descript_news: 'Описание новости 6',
        img: 'gallery4.png'
      },
      {
        title_news: 'Новость 7',
        descript_news: 'Описание новости 7',
        img: 'gallery5.jpg'
      },
      {
        title_news: 'Новость 8',
        descript_news: 'Описание новости 8',
        img: 'gallery6.webp'
      },
      {
        title_news: 'Новость 9',
        descript_news: 'Описание новости 9',
        img: 'gallery7.jpg'
      },
      {
        title_news: 'Новость 10',
        descript_news: 'Описание новости 10',
        img: 'gallery8.jpg'
      },
      {
        title_news: 'Новость 11',
        descript_news: 'Описание новости 11',
        img: 'gallery1.jpg'
      },
      {
        title_news: 'Новость 12',
        descript_news: 'Описание новости 12',
        img: 'gallery3.jpg'
      },
      {
        title_news: 'Новость 13',
        descript_news: 'Описание новости 13',
        img: 'gallery5.jpg'
      },
      {
        title_news: 'Новость 14',
        descript_news: 'Описание новости 14',
        img: 'gallery8.jpg'
      },
    ];
  
    try {
      for (const data of testData) {
        await News.findOrCreate({
          where: { title_news: data.title_news },
          defaults: data
        });
      }
      console.log('Тестовые данные успешно добавлены в таблицу News.');
    } catch (error) {
      console.error('Ошибка при добавлении тестовых данных:', error);
    }
  }

  async function fillTrainersWithData() {
    const testData = [
      {
        fio_trainer: 'Светлана Васильева',
        descript_trainer: 'Описание тренера 1',
        birth_trainer: '12-11-1993',
        phone_trainer: '8999999999',
        photo_trainer: 'trainer1.jpg',
        specialization_trainer: "Тренер по кроссфиту"
      },
      {
        fio_trainer: 'Олег Мурзин',
        descript_trainer: 'Описание тренера 2',
        birth_trainer: '12-11-1997',
        phone_trainer: '8999999999',
        photo_trainer: 'trainer2.jpg',
        specialization_trainer: "Тренер направления ММА"
      },
      {
        fio_trainer: 'Алена Поздова',
        descript_trainer: 'Описание тренера 3',
        birth_trainer: '12-11-1995',
        phone_trainer: '8999999999',
        photo_trainer: 'trainer3.jpg',
        specialization_trainer: "Тренер групповых тренировок"
      },
      {
        fio_trainer: 'Петр Логунов',
        descript_trainer: 'Описание тренера 4',
        birth_trainer: '12-11-1989',
        phone_trainer: '8999999999',
        photo_trainer: 'trainer4.jpg',
        specialization_trainer: "Тренер индивидуальных тренировок"
      },
      {
        fio_trainer: 'Лидия Иванова',
        descript_trainer: 'Описание тренера 5',
        birth_trainer: '12-11-1996',
        phone_trainer: '8999999999',
        photo_trainer: 'trainer5.jpg',
        specialization_trainer: "Тренер направления Йога"
      },
      {
        fio_trainer: 'Нина Солонина',
        descript_trainer: 'Описание тренера 6',
        birth_trainer: '12-11-1993',
        phone_trainer: '8999999999',
        photo_trainer: 'trainer6.jpg',
        specialization_trainer: "Тренер групповых тренировок"
      },
    ];
  
    try {
      for (const data of testData) {
        await Trainers.findOrCreate({
          where: { fio_trainer: data.fio_trainer },
          defaults: data
        });
      }
      console.log('Тестовые данные успешно добавлены в таблицу Trainers.');
    } catch (error) {
      console.error('Ошибка при добавлении тестовых данных:', error);
    }
  }



  fillTrainersWithData()
  fillNewsWithData();


async function addAbonement(type, duration, description, price) {
    try {
      const existingAbonement = await typeAbonement.findOne({
        where: { price_abonement: price,  duration_abonement: duration },
      });
  
      if (!existingAbonement) {
        await typeAbonement.create({
          type_abonement: type,
          duration_abonement: duration,
          descript_abonement: description,
          price_abonement: price,
        });
        console.log(`Тип абонемента "${type}" с продолжительностью "${duration}" успешно добавлен`);
      } else {
        console.log(`Тип абонемента "${type}" с продолжительностью "${duration}" уже существует`);
      }
    } catch (error) {
      console.error('Ошибка при добавлении данных:', error);
    }
  }
  
  async function addTypeAbonement() {
    try {
      await sequelize.authenticate();
      console.log('Успешное подключение к базе данных');
  
      await addAbonement(
        'Базовый',
        'месяц',
        ['Ограничение по времени 4 часа', 'Доступ к части групповых занятий'],
        2000
      );
  
      await addAbonement(
        'Базовый',
        'год',
        ['Ограничение по времени 4 часа', 'Доступ к части групповых занятий'],
        12000
      );
  
      await addAbonement(
        'ПРО',
        'месяц',
        ['Нет ограничения по времени', 'Доступ ко всем групповым занятиям'],
        3000
      );
  
      await addAbonement(
        'ПРО',
        'год',
        ['Нет ограничения по времени', 'Доступ ко всем групповым занятиям'],
        15000
      );
  
      await addAbonement(
        'Эксклюзив',
        'месяц',
        [
          'Нет ограничения по времени',
          'Составление персонального рациона от специалиста',
          'Доступ ко всем групповым занятиям',
          'Составление персональной программы тренировок',
          'Доступ в сауну',
        ],
        5000
      );
  
      await addAbonement(
        'Эксклюзив',
        'год',
        [
          'Нет ограничения по времени',
          'Составление персонального рациона от специалиста',
          'Доступ ко всем групповым занятиям',
          'Составление персональной программы тренировок',
          'Доступ в сауну',
        ],
        20000
      );
  
      console.log('Данные успешно добавлены');
    } catch (error) {
      console.error('Ошибка при добавлении данных:', error);
    }
  }

addTypeAbonement()




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