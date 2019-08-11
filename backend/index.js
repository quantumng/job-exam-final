const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser')
const path = require('path')

const app = new Koa();

// 数据库相关
const { connect, initShema } = require('./model')
;(async () => {
  await connect()
  await initShema()
})()

const router =  new Router()
const index = require('./router/index')
const api = require('./router/api')
router.use('/api', api).use(index)

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);