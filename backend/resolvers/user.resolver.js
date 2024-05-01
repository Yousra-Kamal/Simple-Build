const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth.js");
const { usersData, projectsData, tasksData } = require("../dummyData/data.js");

const userResolver = {
  Query: {
    users: async () => {
      return User.find()
        .populate("projects")
        .populate({ path: "projects", populate: "tasks" });
    },
    user: async (_, { userId }) => {
      return User.findById(userId)
        .populate("projects")
        .populate({ path: "projects", populate: "tasks" });
    },
  },
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    logout: async () => {
      return { message: "You have successfully logged out" };
    },
  },
};

module.exports = userResolver;
