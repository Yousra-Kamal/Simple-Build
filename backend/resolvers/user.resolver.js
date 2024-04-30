import { usersData, projectsData, tasksData } from "../dummyData/data.js";
import { signToken, AuthenticationError } from "../utils/auth.js";

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
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      console.log(username, email, password);
      const user = {
        _id: String(usersData.length + 1),
        username,
        email,
        password,
      };
      usersData.push(user);
      console.log(usersData);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      console.log(email + " " + password);
      const user = usersData.find((user) => user.email === email);
      if (!user) {
        throw AuthenticationError;
      }
      const correctPw = user.password === password;
      if (!correctPw) {
        throw AuthenticationError;
      }
      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);
      return { token, user };
    },

    logout: async () => {
      return { token: "" };
    },
  },
  User: {
    projects: async (parent) => {
      return projectsData.filter((project) => project.userId === parent._id);
    },
  },
};

export default userResolver;
