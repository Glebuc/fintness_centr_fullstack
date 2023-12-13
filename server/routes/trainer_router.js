const Router = require('express')
const router = new Router()
const trainer_controller = require('../controllers/trainer_controller')
// const checkRole = require('../middleware/checkRoleMiddleware')


// router.post('/', checkRole('admin'), trainer_controller.create)
router.post('/', trainer_controller.create)
router.get('/', trainer_controller.getAll)
router.get('/:id_trainer', trainer_controller.getOne)
router.delete('/:id_trainer', trainer_controller.deleteOne)
router.put('/:id_trainer', trainer_controller.updateOne)


module.exports = router