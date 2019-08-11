const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/getUserTask', async (ctx, next) => {
  try {
    const { username } = ctx.request.query
    const Task = mongoose.model('Task')
    const tasks = await Task.find({ username })
    ctx.body = {
      status: 200,
      result: tasks,
      message: 'ok'
    }
  } catch(err) {
    ctx.status = 500
    ctx.body = {
      status: 500,
      result: false,
      message: '获取任务列表失败'
    }
  }
})

router.post('/finishTask', async (ctx, next) => {
  try {
    console.log('body', ctx.request.body)
    const { username, taskId, status } = ctx.request.body
    const Task = mongoose.model('Task')
    await Task.findOneAndUpdate({username, taskId}, {status})
    ctx.body = {
      result: true,
      status: 200,
      message: '任务完成'
    }
  } catch(err) {
    ctx.status = 500
    ctx.body = {
      status: 500,
      result: false,
      message: '任务失败'
    }
  }
})

module.exports = router.routes()