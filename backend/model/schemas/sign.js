const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Mixed = Schema.Types.Mixed

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

function getDay() {
  const day = new Date().getDay()
  if (day === 0) {
    return 7
  }
  return day
}

const signSchema = new Schema({
  username: {
    type: String
  },
  year: {
    type: Number,
    default: new Date().getFullYear()
  },
  week: {
    type: Number,
    default: getWeek()
  },
  day: {
    type: Number,
    default: getDay()
  },
  status: {
    type: String,
    default: '0'
  },
  reward: {
    type: Mixed,
    default: {
      coupon: 10
    }
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

signSchema.pre('save', next => {
  if (this.isNew) {
    this.createAt = this.updateAt = Date.now()
  } else {
    this.updateAt = Date.now()
  }
  next()
})

mongoose.model('Sign', signSchema)