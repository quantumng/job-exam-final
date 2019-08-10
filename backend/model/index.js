const mongoose = require('mongoose')
const dbUrl = 'mongodb://localhost:27017/exam'
mongoose.Promise = global.Promise
const glob = require('glob')
const { resolve } = require('path')

exports.connect = () => {
  let maxConnectTimes = 0
  return new Promise((resolve, reject) => {
    mongoose.connect(dbUrl, { useNewUrlParser: true, useCreateIndex: true })

    const db = mongoose.connection

    db.on('disconnected', () => {
      maxConnectTimes++
      if (maxConnectTimes < 5) {
        mongoose.connect(dbUrl, {useNewUrlParser: true})
      } else {
        reject(new Error('数据库断开连接'))
      }
    })

    db.on('error', () => {
      maxConnectTimes++
      if (maxConnectTimes < 5) {
        mongoose.connect(dbUrl, {useNewUrlParser: true})
      } else {
        reject(new Error('数据库发生错误'))
      }
      console.error.bind(console, 'connection error:')
    })

    db.once('open', () => {
      console.log('connet with database!')
      resolve()
    })
  })
}

exports.initShema = () => {
  glob.sync(resolve(__dirname, './schemas', '**/*.js')).forEach(require)
}