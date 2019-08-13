const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

function getWeek() {
  let d1 = new Date();
  let d2 = new Date();
  d2.setMonth(0);
  d2.setDate(1);
  let rq = d1 - d2;
  let days = Math.ceil(rq / (24*60*60*1000));
  let num = Math.ceil(days / 7);
  return num;
}

router.get('/getUserTask', async (ctx, next) => {
  try {
    const week = getWeek()
    const year = new Date().getFullYear()
    const { username } = ctx.request.query
    const Task = mongoose.model('Task')
    const Sign = mongoose.model('Sign')
    let tasks = await Task.find({ username })
    const weekData = await Sign.find({username, year, week}).select({day: 1, status: 1, reward: 1})
    tasks.forEach(item => {
      if (item.taskId === 11) {
        item._doc['list'] = weekData
      }
    })
    ctx.body = {
      status: 200,
      result: tasks,
      message: 'ok'
    }
  } catch(err) {
    console.log('err', err)
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
    if (taskId === 11) {
      const week = getWeek()
      const year = new Date().getFullYear()
      let day = new Date().getDay()
      day = day === 0 ? 7 : day;
      const Sign = mongoose.model('Sign')
      await Sign.findOneAndUpdate({username, year, week, day}, {status: 1})
    }
    ctx.body = {
      result: true,
      status: 200,
      message: '任务完成'
    }
  } catch(err) {
    console.log(err)
    ctx.status = 500
    ctx.body = {
      status: 500,
      result: false,
      message: '任务失败'
    }
  }
})

function compareDate(newval, oldval) {
    const newTime = new Date(newval)
    const oldTime = new Date(oldval)
    const gap = 1000 * 60 *60 * 24
    return (newTime - oldTime) > gap
}
router.get('/lottery', async ctx => {
  try {
    const {username} = ctx.request.query
    const Lottery = mongoose.model('Lottery')
    let lotterys = await Lottery.find({ username }).sort('createAt')
    console.log('lotterys', lotterys);
    const nowTime = Date.now();
    const needAdd = compareDate(nowTime, lotterys[0].createAt)
    if (needAdd) {
      const newLottery = new Lottery({username})
      await newLottery.save()
      ctx.body = {
        status: 200,
        result: newLottery,
        message: 'success'
      }
    } else {
      ctx.body = {
        status: 200,
        result: lotterys[0],
        message: 'success'
      }
    }
  } catch(err) {
    console.log(err)
    ctx.status = 500
    ctx.body = {
      status: 500,
      result: false,
      message: '获取抽奖信息失败'
    }
  }
})

router.post('/finishLottery', async ctx => {
  try {
    const { id, giftId, status } = ctx.request.body
    const Lottery = mongoose.model('Lottery')
    await Lottery.findByIdAndUpdate(id, { reward: giftId, status })
    ctx.body = {
      status: 200,
      result: true,
      sucess: '保存成功'
    }
  } catch(err) {
    console.log(err);
    ctx.status = 500
    ctx.body = {
      status: 500,
      result: false,
      message: '保存失败'
    }
  }
})

module.exports = router.routes()