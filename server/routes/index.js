const Router = require('express')
const router = new Router()
const adminRouter = require('./admin_router')
const userRouter = require('./user_router')
const trainerRouter = require('./trainer_router')
const newsRouter = require('./news_router')




router.use('/user', userRouter)
router.use('/admin', adminRouter)
router.use('/trainer', trainerRouter)
router.use('/news', newsRouter)



module.exports = router