import { Schema, model } from 'mongoose'

const CardSchema = new Schema(
  {
    profile: {
      type: Schema.Types.ObjectId,
      ref: 'Profile'
    },
    word: {
      type: String
    },
    sentence: {
      type: String
    },
    translation: {
      type: String
    },
    stage: {
      type: Number
    }
  }, { timestamps: true }
)

module.exports = model('Card', CardSchema)