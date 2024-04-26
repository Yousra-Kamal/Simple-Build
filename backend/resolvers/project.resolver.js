import { projectsData } from "../dummyData/data.js";

const projectResolver = {
  Query: {
    projects: async () => {
      console.log(projectsData);
      return projectsData;
    },

    project: async (_, { projectId }) => {
      return projectsData.find((project) => project._id === projectId);
    },

    /*   projects: async () => {
      return await Project.find();
    },
    project: async (_, { projectId }) => {
      return await Project.findById(projectId);
    }, */
  },
  /*  Mutation: {
    createProject: async (_, { input }) => {
      return await Project.create(input);
    },
    updateProject: async (_, { id, input }) => {
      return await Project.findByIdAndUpdate(id, input, { new: true });
    },
    deleteProject: async (_, { id }) => {
      return await Project.findByIdAndRemove(id);
    },
  }, */
};

export default projectResolver;
