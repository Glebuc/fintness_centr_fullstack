require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErorrHandleMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000
const HOST = process.env.HOST || 'localhost'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)


// Обработчик ошибок
app.use(errorHandler)


app.get('/', (req, res) => {
    res.send('<h1>Express server working</h1>')
})

const start = async () => {
    try {
        // Все запросы к БД должны быть в асинхронном виде
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}. Addres -> http://${HOST}:${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()