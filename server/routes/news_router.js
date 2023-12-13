const Router = require('express')
const router = new Router()
const news_controller = require('../controllers/news_controller')
// const checkRole = require('../middleware/checkRoleMiddleware')

// router.post('/',checkRole('admin'), news_controller.create)
router.post('/', news_controller.create)
router.get('/', news_controller.getAll)
router.get('/:id_news', news_controller.getOne)
router.delete('/:id_news', news_controller.deleteOne)
router.put('/:id_news', news_controller.updateOne)

module.exports = router