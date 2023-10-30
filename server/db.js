const {Sequelize} = require('sequelize')


module.exports = new Sequelize(
    process.env.DB_NAME, //name database
    process.env.DB_USER, //user database
    process.env.DB_PASSWORD, //password db
    {
        dialect: 'postgres',
        host: process.env.DB_HOST, //host db
        port: process.env.DB_PORT, //port db
    }
)