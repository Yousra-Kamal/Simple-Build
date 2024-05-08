const { Schema, model } = require("mongoose");

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
