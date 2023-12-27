const {typeAbonement} = require('../models/models')
const ApiError = require("../error/Error")
const uuid = require('uuid')
const path = require('path')

class PriceController {

    async create(req, res, next) {
        try {
            const {type_abonement, duration_abonement, descript_abonement, price_abonement} = req.body
            console.log(req.body)
            const abonement = await typeAbonement.create({type_abonement, price_abonement, duration_abonement, descript_abonement})
            return res.json(abonement)

        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
        
    }

    async getAll(req, res) {
        const abonement = await typeAbonement.findAll()
        return res.json(abonement)
    }
    async getOne(req, res) {
        const {id_type_abonement} = req.params
        const typeAbonementOne = await typeAbonement.findOne({where: {id_type_abonement}})
        return res.json(typeAbonementOne)
    }
    
    async updateOne (req, res) {
        const { id_type_abonement } = req.params; 
        const { price_abonement, type_abonement } = req.query; 

        try {
          const abonement = await typeAbonement.findByPk(id_type_abonement); 
          if (!abonement) {
            return res.status(404).send('Тип абонемента не найден');
          }
      
          abonement.type_abonement = type_abonement;
          abonement.price_abonement = price_abonement;
          await abonement.save();     
          return res.json(abonement)
        } catch (error) {
          console.error('Ошибка при обновлении данных новости:', error);
          return res.status(500).send('Ошибка сервера');
        }
    }
    async deleteOne (req, res) {
        const { id_type_abonement } = req.params; 
        try {
            const abonement = await typeAbonement.findByPk(id_type_abonement); 
            if (!abonement) {
            return res.status(404).send('Тип абонемента не найден');
            }

            await abonement.destroy(); 

            return res.status(200).send('Тип абонемента успешно удален');
        } catch (error) {
            console.error('Ошибка при удалении новости:', error);
            return res.status(500).send('Ошибка сервера');
        }
    }
}

module.exports = new PriceController()