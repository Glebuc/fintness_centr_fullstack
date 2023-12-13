const ApiError = require("../error/Error")
const {Trainers} = require('../models/models')
const uuid = require('uuid')
const path = require('path')

class TrainerController {
    async create(req, res, next) {
        try {
            const {fio_trainer, descript_trainer, birth_trainer, phone_trainer} = req.body
            const {photo_trainer} = req.files
            let fileName = uuid.v4()+".jpg"
            photo_trainer.mv(path.resolve(__dirname, "..", "static", fileName))
            const trainer = await Trainers.create({fio_trainer, descript_trainer, photo_trainer: fileName, birth_trainer, phone_trainer})
            return res.json(trainer)

        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
    async getAll(req, res) {
        const trainer = await Trainers.findAll()
        return res.json(trainer)
    }
    async getOne(req, res) {
        const {id_trainer} = req.params
        const trainerOne = await Trainers.findOne({where: {id_trainer}})
        return res.json(trainerOne)
    }
    async updateOne (req, res, next) {
        const { id_trainer } = req.params; 
        const { descript_trainer, fio_trainer, birth_trainer, phone_trainer, specialization_trainer } = req.query; 

        try {
          const trainer = await Trainers.findByPk(id_trainer); 
          if (!trainer) {
            return res.status(404).send('Информация о тренере не найдена');
          }
          trainer.specialization_trainer = specialization_trainer;
          trainer.fio_trainer = fio_trainer;
          trainer.descript_trainer = descript_trainer;
          trainer.birth_trainer = birth_trainer;
          trainer.phone_trainer = phone_trainer;
          await trainer.save(); 
      
          return res.json(trainer)

        } catch (error) {
          console.error('Ошибка при обновлении данных о тренере:', error);
          return res.status(500).send('Ошибка сервера');
        }

    }
    async deleteOne (req, res, next) {
        const { id_trainer } = req.params;
        try {
            const trainer = await Trainers.findByPk(id_trainer);

            if (!trainer) {
            return res.status(404).send('Информация о тренере не найдена');
            }

            await trainer.destroy(); 

            return res.status(200).send('Информация о тренере успешно удалена');
        } catch (error) {
            console.error('Ошибка при удалении информации о тренере:', error);
            return res.status(500).send('Ошибка сервера');
        }
    }
}

module.exports = new TrainerController()