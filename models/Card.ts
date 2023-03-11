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
      type: Number,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
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
