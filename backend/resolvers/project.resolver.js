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
  Mutation: {
    createProject: async (_, { input }) => {
      const newProject = {
        _id: String(projectsData.length + 1),
        userId: "1",
        taskIDs: [],
        ...input,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      projectsData.push(newProject);
      return newProject;
    },
    updateProject: async (_, { projectId, input }) => {
      const projectIndex = projectsData.findIndex(
        (project) => project._id === projectId
      );
      projectsData[projectIndex] = { ...projectsData[projectIndex], ...input };
      return projectsData[projectIndex];
    },
    deleteProject: async (_, { projectId}) => {
      const projectIndex = projectsData.findIndex(
        (project) => project._id === projectId
      );
      const project = projectsData[projectIndex];
      projectsData.splice(projectIndex, 1);
      return project;
    },
  },
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
