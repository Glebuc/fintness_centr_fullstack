const ApiError = require("../error/Error")
const {Trainers} = require('../models/models')


class TrainerController {
    async create(req, res) {
        const {title_news, descript_news} = req.body
        const news = await Trainers.create({title_news, descript_news})
        return res.json(news)
    }
    async getAll(req, res) {
        const news = await Trainers.findAll()
        return res.json(news)
    }
    async getOne(req, res) {
        const {id} = req.body
        const newOne = await Trainers.findOne().where(id=`${id}`)
        return res.json()
    }
    async update (req, res, next) {

    }
    async delete (req, res, next) {
        
    }
}

module.exports = new TrainerController()