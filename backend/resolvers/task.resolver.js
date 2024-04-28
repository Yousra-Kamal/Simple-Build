import { usersData, projectsData, tasksData } from "../dummyData/data.js";

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
    deleteTask: async (_, { taskId }) => {
      const taskIndex = tasksData.findIndex((task) => task._id === taskId);
      const task = tasksData[taskIndex];
      tasksData.splice(taskIndex, 1);
      return task;
    },
    updateTask: async (_, { taskId, input }) => {
      const taskIndex = tasksData.findIndex((task) => task._id === taskId);
      tasksData[taskIndex] = { ...tasksData[taskIndex], ...input };
      return tasksData[taskIndex];
    },
  },
  Task: {
    project: async (parent) => {
      return projectsData.find((project) => project._id === parent.projectId);
    },
  },
};

export default taskResolver;
