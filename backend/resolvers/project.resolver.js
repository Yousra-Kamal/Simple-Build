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

    updateTaskInProject: async (
      _,
      { projectId, taskId, taskTitle, taskDescription, taskStage, taskStatus }
    ) => {
      try {
        const project = await Project.findById(projectId);

        if (!project) {
          throw new Error("Project not found");
        }

        const taskToUpdate = project.tasks.find((task) =>
          task._id.equals(taskId)
        );

        if (!taskToUpdate) {
          throw new Error("Task not found in project");
        }

        // Update task fields if provided
        if (taskTitle) taskToUpdate.taskTitle = taskTitle;
        if (taskDescription) taskToUpdate.taskDescription = taskDescription;
        if (taskStage) taskToUpdate.taskStage = taskStage;
        if (taskStatus) taskToUpdate.taskStatus = taskStatus;

        // Save updated project
        await project.save();

        return project;
      } catch (error) {
        throw new Error(`Failed to update task in project: ${error.message}`);
      }
    },

    deleteProject: async (_, { projectId }) => {
      return Project.findByIdAndDelete(projectId);
    },

    addTaskToProject: async (
      _,
      { projectId, taskTitle, taskDescription, taskStage, taskStatus }
    ) => {
      return Project.findByIdAndUpdate(
        projectId,
        {
          $push: {
            tasks: { taskTitle, taskDescription, taskStage, taskStatus },
          },
        },
        { new: true }
      );
    },

    /*  deleteTaskFromProject: async (_, { projectId, taskId }) => {
      return Project.findByIdAndUpdate(
        projectId,
        {
          $pull: { tasks: { _id: taskId } },
        },
        { new: true }
      );
    }, */

    deleteTask: async (_, { projectId, taskIndex }) => {
      try {
        const project = await Project.findById(projectId);

        if (!project) {
          throw new Error("Project not found");
        }
        // Remove the task at the specified index
        project.tasks.splice(taskIndex, 1);

        await project.save();

        return project;
      } catch (error) {
        throw new Error(`Failed to delete task: ${error.message}`);
      }
    },
  },
};

module.exports = projectResolver;
