const { Schema, model } = require("mongoose");
const { dateFormat } = require("../utils/dateFormat");

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  status: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

const Project = model("Project", projectSchema);

module.exports = Project;
