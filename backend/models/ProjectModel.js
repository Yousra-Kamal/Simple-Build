const { Schema, model, get } = require("mongoose");
const dateFormat = require("../utils/dateFormat");


const projectSchema = new Schema({
  projectCode: {
    type: String,
    required: true,
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
    type: Date,
    required: true,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  endDate: {
    type: Date,
    required: true,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
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
      taskTitle: {
        type: String,
        required: true,
      },
      taskDescription: {
        type: String,
        required: true,
      },
      taskStage: {
        type: String,
        required: true,
      },
      taskStatus: {
        type: String,
        required: true,
      },
    },
  ],
});

const Project = model("Project", projectSchema);

module.exports = Project;
