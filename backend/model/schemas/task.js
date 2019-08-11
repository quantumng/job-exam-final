const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Mixed = Schema.Types.Mixed

const taskSchema = new Schema({
  taskId: {
    type: Number,
    unique: true,
    required: true
  },
  taskType: {
    type: String
  },
  username: {
    type: String
  },
  status: {
    type: String,
    default: '1'
  },
  reward: {
    type: Mixed
  },
  condition: {
    type: Mixed
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

taskSchema.pre('save', next => {
  if (this.isNew) {
    this.createAt = this.updateAt = Date.now()
  } else {
    this.updateAt = Date.now()
  }
  next()
})

mongoose.model('Task', taskSchema)