require('dotenv').config()
const express = require('express')
const bodyParser = require("body-parser")
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErorrHandleMiddleware')
const path = require('path');


const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost'

const app = express()
app.use(cors())
app.use(express.json())

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Fitness center Atom Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application for fitness center Atom",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Deyugin Gleb",
          email: "gleb567892@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );
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