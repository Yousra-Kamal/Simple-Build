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
  Mutation: {},
  Task: {
    project: async (parent) => {
      return projectsData.find((project) => project._id === parent.projectId);
    },
  },
};

export default taskResolver;
