const { Project, Task, User } = require("../models");

const { signToken, AuthenticationError } = require("../utils/auth.js");

const projectResolver = {
  Query: {
    projects: async () => {
      return Project.find();
    },
    project: async (_, { projectId }) => {
      return Project.findById(projectId).populate("tasks");
    },
  },
  Mutation: {
    createProject: async (
      _,
      { name, description, status, projectCode, startDate, endDate },
      context
    ) => {
      const project = await Project.create({
        name,
        description,
        status,
        projectCode,
        startDate,
        endDate,
        user: context.user,
      });

      await User.findByIdAndUpdate(context.user._id, {
        $push: { projects: project },
      });
      return project;
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
  /*  Project: {
    user: async (parent) => {
      return User.findById(parent.userId);
    },
    tasks: async (parent) => {
      return Task.find({ projectId: parent._id });
    },
  }, */
};

module.exports = projectResolver;
