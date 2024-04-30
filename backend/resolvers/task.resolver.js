const { usersData, projectsData, tasksData } = require("../dummyData/data.js");

const taskResolver = {
  Query: {
    tasks: async () => {
      return tasksData;
    },
    task: async (_, { taskId }) => {
      const task = tasksData.find((task) => task._id === taskId);
      return task;
    },
  },
  Mutation: {
    // To create a new task, we need to generate a new _id for the task and push the new task object to the tasksData array.
    createTask: async (_, { input }) => {
      const newTask = {
        _id: String(tasksData.length + 1),
        ...input,
      };
      tasksData.push(newTask);
      return newTask;
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
      return projectsData.find((project) => project._id === parent.projectId);
    },
  },
};

module.exports = taskResolver;
