import { Schema, model } from "mongoose";

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  deleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = model("Project", ProjectSchema);
