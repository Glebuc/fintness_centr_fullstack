const Router = require('express')
const router = new Router()
// const adminRouter = require('./admin_router')
const userRouter = require('./user_router')
const trainerRouter = require('./trainer_router')
const newsRouter = require('./news_router')
const priceRouter = require('./price_router')




router.use('/user', userRouter)
router.use('/trainer', trainerRouter)
router.use('/news', newsRouter)
router.use('/price', priceRouter)
// router.use('/time', timeRouter)



module.exports = router