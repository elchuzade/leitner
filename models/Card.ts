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
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
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
