import { usersData } from "../dummyData/data.js";

const userResolver = {
  Query: {
    users: async () => {
      console.log(usersData);
      return usersData ;
    },
  },
  Mutation: {},
};

export default userResolver;
