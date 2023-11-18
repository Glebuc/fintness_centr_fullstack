const {News} = require('../models/models')
const ApiError = require("../error/Error")
const uuid = require('uuid')
const path = require('path')

class NewsController {
    async create(req, res, next) {
        try {

            const {title_news, descript_news} = req.body
            const {img} = req.files
            let fileName = uuid.v4()+".jpg"
            img.mv(path.resolve(__dirname, "..", "static", fileName))
            const news = await News.create({title_news, descript_news, img: fileName})
            return res.json(news)

        } catch (error) {

            next(ApiError.badRequest(error.message))
            
        }
        
    }
    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1 //страница
        limit = limit || 10 //количество записей на странице
        let offset = page*limit-limit
        const news = await News.findAndCountAll({limit, offset})
        return res.json(news)
    }
    async getOne(req, res) {
        const {id_news} = req.params
        const newsOne = await News.findOne({where: {id_news}})
        return res.json(newsOne)
    }
    async update (req, res) {

    }
    async delete (req, res) {
        
    }
}

module.exports = new NewsController()