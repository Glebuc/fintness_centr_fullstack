const Router = require('express')
const router = new Router()
const price_controller = require('../controllers/price_controller')


router.post('/', price_controller.create)
router.get('/', price_controller.getAll)
router.get('/:id_type_abonement', price_controller.getOne)
router.put('/:id_type_abonement', price_controller.updateOne)
router.delete('/:id_type_abonement', price_controller.deleteOne)

module.exports = router