const Router = require('koa-router')
const router = new Router()
const user = require('./user.js')
const task = require('./task.js')

router.get('/', ctx => {
  ctx.body = 'you get api'
})

router.use('/user', user).use('/task', task)

module.exports = router.routes()