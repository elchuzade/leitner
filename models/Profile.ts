import { Schema, model } from 'mongoose'

const ProfileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    cards: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Card',
        required: true
      }
    ]
  }, { timestamps: true }
)

module.exports = model('Profile', ProfileSchema)