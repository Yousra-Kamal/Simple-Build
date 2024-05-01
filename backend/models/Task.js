const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  stage: {
    type: String,
    required: true,
    enum: [
      "Setup",
      "Slab",
      "Frame",
      "Lockup",
      "Fixing",
      "Completion",
      "Handover",
    ],
  },
  sequenceNumber: {
    type: Number,
    required: true,
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
});

const Task = model("Task", taskSchema);

module.exports = Task;