const Router = require('express')
const router = new Router()
const userController = require('../controllers/admin_controller')

//Типы HHTP запросов
router.get('/user')
router.get('/admin')



module.exports = router