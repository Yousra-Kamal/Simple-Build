const { Project, Task, User } = require("../models");

const { signToken, AuthenticationError } = require("../utils/auth.js");

const projectResolver = {
  Query: {
    projects: async () => {
      return Project.find({}).populate("tasks");
    },
    project: async (_, { projectId }) => {
      return Project.findById(projectId).populate("tasks");
    },
  },
  Mutation: {
    createProject: async (
      _,
      { name, description, status, projectCode, startDate, endDate, userId }
    ) => {
      return Project.create({
        name,
        description,
        status,
        projectCode,
        startDate,
        endDate,
        userId,
      });
    },

    updateProject: async (
      _,
      { projectId, name, description, status, projectCode, startDate, endDate }
    ) => {
      return Project.findByIdAndUpdate(
        projectId,
        {
          name,
          description,
          status,
          projectCode,
          startDate,
          endDate,
        },
        { new: true } // returns the updated document
      );
    },

    deleteProject: async (_, { projectId }) => {
      return Project.findByIdAndDelete(projectId);
    },
  },
  Project: {
    user: async (parent) => {
      return User.findById(parent.userId);
    },
    tasks: async (parent) => {
      return Task.find({ projectId: parent._id });
    },
  },
};

module.exports = projectResolver;
