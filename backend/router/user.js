const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

// router.get('/checkLogin', async (ctx, next) => {
//   const cookies = ctx.cookies.get('username')
//   console.log('cookies', cookies)
//   if (cookies) {
//     const User = mongoose.model('User')
//     const { username, email, role, _id, gender, desc, nickname } = await User.findOne({ 'username': cookies }).exec()
//     ctx.body = {
//       status: 200,
//       result: { username, email, role, _id, gender, desc, nickname },
//       message: '登录成功'
//     }
//   } else {
//     ctx.status = 401
//     ctx.body = {
//       status: 401,
//       result: false,
//       message: '登录信息失效，请重新登录'
//     }
//   }
// })

router.post('/register', async (ctx, next) => {
  const registerInfo = ctx.request.body
  const { username } = registerInfo
  const User = mongoose.model('User')
  const user = await User.findOne({ username }).exec()

  if (user) {
    ctx.status = 500
    ctx.body = {
      status: 500,
      result: false,
      message: '用户名已被注册'
    }
  } else {
    const newUser = new User(registerInfo)
    newUser.save()
    const Task = mongoose.model('Task')
    const taskList = [
      {
        taskId: '11',
        taskType: 'SIGN_TASK',
        condition: {
          taskNum: 1,
        },
        reward: {},
        username,
      },
      {
        taskId: '12',
        taskType: 'UPDATE_TASK',
        condition: {
          taskNum: 1,
        },
        reward: {
          coupon: 20
        },
        username,
      },
      {
        taskId: '13',
        taskType: 'LOTTERY_TASK',
        condition: {
          taskNum: 1,
        },
        reward: {
          coupon: 10
        },
        username,
      },
      {
        taskId: '14',
        taskType: 'FREE_TASK',
        condition: {
          taskNum: 1
        },
        reward: {
          coupon: 10
        },
        username,
      },
      {
        taskId: '15',
        taskType: 'READING_TASK',
        condition: {
          taskNum: 1,
        },
        reward: {
          coupon: 10
        },
        username,
      },
      {
        taskId: '16',
        taskType: 'AD_TASK',
        condition: {
          taskNum: 3,
        },
        reward: {
          coupon: 5
        },
        username,
      },
      {
        taskId: '17',
        taskType: 'AD_TASK',
        condition: {
          taskNum: 6,
        },
        reward: {
          coupon: 10
        },
        username,
      },
    ]
    taskList.forEach(async item => {
      const newTask = new Task(item)
      await newTask.save()
    })
    ctx.body = {
      status: 200,
      result: true,
      message: '注册成功'
    }
  }
})

router.post('/login', async (ctx) => {
  let match = false
  const registerInfo = ctx.request.body
  const { username, password } = registerInfo
  const User = mongoose.model('User')
  const user = await User.findOne({ username }).exec()

  if (user) {
    match = await user.comparePassword(password, user.password)
  }
  if (match) {
    const { username } = user
    const userInfo = { username }
    ctx.cookies.set('username', username)
    ctx.body = {
      status: 200,
      result: userInfo,
      message: '登录成功'
    }
  } else {
    ctx.status = 500
    ctx.body = {
      status: 500,
      result: false,
      message: '用户名或密码错误'
    }
  }
})

// router.post('/logout', async (ctx) => {
//   const { username } = ctx.request.body
//   // const User = mongoose.model('User')
//   await ctx.cookies.set('username', null)
//   ctx.body = {
//     status: 200,
//     result: true,
//     message: '退出成功'
//   }
// })

router.get('/list', async (ctx) => {
  const User = mongoose.model('User')
  const data = await User.find({})
  ctx.body = {
    status: 200,
    result: data,
    message: 'ok'
  }
})

// router.post('/update', async (ctx, next) => {
//   try {
//     const { id, username, ...data } = ctx.request.body
//     const User = mongoose.model('User')
//     await User.findOneAndUpdate({'username': username, '_id': id}, data)
//     ctx.body = {
//       status: 200,
//       result: true,
//       message: 'ok'
//     }
//   } catch (err) {
//     console.log(err)
//     ctx.body = {
//       status: 500,
//       result: false,
//       message: '修改用户数据失败'
//     }
//   }
// })

module.exports = router.routes()