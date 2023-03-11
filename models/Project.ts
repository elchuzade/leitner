import { Schema, model } from "mongoose";

const ProjectSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
    required: true,
  },
  deleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = model("Project", ProjectSchema);
