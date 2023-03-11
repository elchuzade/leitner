import { Schema, model } from 'mongoose'

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    permission: {
      type: Number,
      required: true
    },
    deleted: {
      type: Boolean,
      required: true,
      default: false
    }
  }, { timestamps: true }
)

module.exports = model('User', UserSchema)