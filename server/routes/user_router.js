const Router = require('express')
const router = new Router()
const userController = require('../controllers/user_controller')


router.get('/all',  userController.getAll)
router.post('/registration', userController.registerUser)
router.post('/login', userController.loginUser)
router.get('/auth',  userController.checkToken)



module.exports = router