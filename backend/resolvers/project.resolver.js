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
      { username, name, description, status, projectCode, startDate, endDate },
      context
    ) => {
      const project = await Project.create({
        username,
        name,
        description,
        status,
        projectCode,
        startDate,
        endDate,
      });

      await User.findOneAndUpdate(
        { username: username },
        { $addToSet: { projects: project._id } }
      );

      return project;
    },

    updateProject: async (_, { input }) => {
      return Project.findByIdAndUpdate(input.projectId, input, { new: true });
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
