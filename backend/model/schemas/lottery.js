const mongoose = require('mongoose')
const Schema = mongoose.Schema

function getReward() {
  const rewards = []
  for (let i = 1; i <= 7; i++) {
    const reward = {
      id: i,
      num: i % 2 === 0 ? 100 : 50
    }
    rewards.push(reward)
  }
  return rewards
}

const lotterySchema = new Schema({
  username: {
    type: String
  },
  status: {
    type: Number,
    default: 0
  },
  reward: {
    type: String
  },
  gift: {
    type: Array,
    default: getReward()
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

lotterySchema.pre('save', next => {
  if (this.isNew) {
    this.createAt = this.updateAt = Date.now()
  } else {
    this.updateAt = Date.now()
  }
  next()
})

mongoose.model('Lottery', lotterySchema)