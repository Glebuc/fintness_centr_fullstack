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


    async updateOne (req, res) {
        const { id_news } = req.params; 
        const { title_news, descript_news } = req.query; 

        try {
          const news = await News.findByPk(id_news); 
          if (!news) {
            return res.status(404).send('Новость не найдена');
          }
      
          news.title_news = title_news;
          news.descript_news = descript_news;
          await news.save(); 
      
          return res.json(news)

        } catch (error) {
          console.error('Ошибка при обновлении данных новости:', error);
          return res.status(500).send('Ошибка сервера');
        }
    }


    async deleteOne (req, res) {
        const { id_news } = req.params; 
        try {
            const news = await News.findByPk(id_news); 

            if (!news) {
            return res.status(404).send('Новость не найдена');
            }

            await news.destroy(); 

            return res.status(200).send('Новость успешно удалена');
        } catch (error) {
            console.error('Ошибка при удалении новости:', error);
            return res.status(500).send('Ошибка сервера');
        }
    }
}

module.exports = new NewsController()