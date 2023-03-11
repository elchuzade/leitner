import { Schema, model } from 'mongoose'

const UserSchema = new Schema(
  {
    profile: {
      type: Schema.Types.ObjectId,
      ref: 'Profile'
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  }, { timestamps: true }
)

module.exports = model('User', UserSchema)