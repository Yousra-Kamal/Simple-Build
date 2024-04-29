import e from "express";
import { Schema, model } from "mongoose";

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
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

const Task = model("Task", taskSchema);

export default Task;
