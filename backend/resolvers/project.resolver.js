import { usersData, projectsData, tasksData } from "../dummyData/data.js";

const projectResolver = {
  Query: {
    projects: async () => {
      console.log(projectsData);
      return projectsData;
    },
    project: async (_, { projectId }) => {
      const project = projectsData.find((project) => project._id === projectId);
      return project;
    },
  },
  Mutation: {},
  Project: {
    tasks: async (parent) => {
      return tasksData.filter((task) => task.projectId === parent._id);
    },
    user: async (parent) => {
      const user = usersData.find((user) => user._id === parent.userId);
      return user;
    },
  },
};

export default projectResolver;
