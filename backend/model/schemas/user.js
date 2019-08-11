const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: {
    type: Date,
    default: Date.now()
  }
})

userSchema.pre('save', next => {
  if (this.isNew) {
    this.createAt = this.updateAt = Date.now()
  } else {
    this.updateAt = Date.now()
  }
  next()
})

userSchema.methods = {
  comparePassword: (newv, prev) => {
    return new Promise((resolve, reject) => {
      if (prev === newv) {
        resolve({ isMatch: true })
      } else {
        reject(new Error('密码不对！'))
      }
    })
  }
}

mongoose.model('User', userSchema)