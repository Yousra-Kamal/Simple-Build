const { Schema, model } = require("mongoose");
const { dateFormat } = require("../utils/dateFormat");

const projectSchema = new Schema({
  projectCode: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
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
