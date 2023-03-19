import { Schema, model } from "mongoose";

const CardSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    hint: {
      type: String,
    },
    answer: {
      type: String,
    },
    stage: {
      // type: 1 | 2 | 3 | 4 | 5 | 6,
      type: Number,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    deleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = model("Card", CardSchema);
