const { Project, Task, User } = require("../models");

const taskResolver = {
  Query: {
    tasks: async () => {
      return Task.find({}).populate("project");
    },
    task: async (_, { taskId }) => {
      return Task.findById(taskId).populate("project");
    },
  },
  Mutation: {
    createTask: async (_, { input }) => {
      const task = await Task.create(input);
      const project = await Project.findById(input.projectId);
      project.tasks.push(task._id);
      await project.save();
      return task;
    },

    // To update a task, we need to find the task in the tasksData array and update the task object with the new input values.
    updateTask: async (_, { taskId, input }) => {
      const taskIndex = tasksData.findIndex((task) => task._id === taskId);
      tasksData[taskIndex] = { ...tasksData[taskIndex], ...input };
      return tasksData[taskIndex];
    },
    // To delete a task, we need to remove the task from the tasksData array and return the deleted task object.
    deleteTask: async (_, { taskId }) => {
      const taskIndex = tasksData.findIndex((task) => task._id === taskId);
      const task = tasksData[taskIndex];
      tasksData.splice(taskIndex, 1);
      return task;
    },
  },

  Task: {
    project: async (parent) => {
      const project = await Project.findById(parent.projectId);
      return project;
    },
  },
};

/*  Task: {
    project: async (parent) => {
      return projectsData.find((project) => project._id === parent.projectId);
    },
  },
};   */

module.exports = taskResolver;
