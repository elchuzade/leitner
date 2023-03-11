const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile'
  },
  deleted: {
    type: Boolean,
    required: true,
    default: false
  }
})

module.exports = mongoose.model('Project', ProjectSchema)