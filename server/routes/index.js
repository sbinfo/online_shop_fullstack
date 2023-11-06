const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const deviceRouter = require('./deviceRouter')

router.use('/user', userRouter)
router.use('/type', brandRouter)
router.use('/brand', typeRouter)
router.use('/device', deviceRouter)

module.exports = router