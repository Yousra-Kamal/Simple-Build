import { usersData, projectsData, tasksData } from "../dummyData/data.js";

const userResolver = {
  Query: {
    users: async () => {
      console.log(usersData);
      return usersData;
    },
    user: async (_, { userId }) => {
      // userId is coming from the client, so we can use it to find the user

      const user = usersData.find((user) => user._id === userId);

      console.log(user);
      return user;
    },
  },
  Mutation: {},
  User: {
    projects: async (parent) => {
      return projectsData.filter((project) => project.userId === parent._id);
    },
  },
  
};

export default userResolver;
