const Router = require('express')
const router = new Router()
const trainer_controller = require('../controllers/trainer_controller')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('Admin'), trainer_controller.create)
router.get('/', trainer_controller.getAll)
router.get('/:id', trainer_controller.getOne)


module.exports = router