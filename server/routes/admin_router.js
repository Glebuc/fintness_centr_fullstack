const Router = require('express')
const router = new Router()
const userController = require('../controllers/user_controller')


router.get('/user')
router.get('/admin')



module.exports = router