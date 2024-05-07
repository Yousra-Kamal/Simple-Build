const { Project, User } = require("../models");

const { signToken, AuthenticationError } = require("../utils/auth.js");

const projectResolver = {
  Query: {
    projects: async (_, args, context) => {
      if (context.user) {
        return Project.find({ user: context.user._id });
      }
      throw AuthenticationError;
    },
    project: async (_, { projectId }, context) => {
      if (context.user) {
        return Project.findById(projectId);
      }
      throw AuthenticationError;
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
};

module.exports = projectResolver;
