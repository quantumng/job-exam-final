const Router = require('koa-router')
const router = new Router()

router.get('/', ctx => {
  ctx.body = 'you get api'
})

module.exports = router.routes()