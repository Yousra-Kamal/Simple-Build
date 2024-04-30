const { mergeResolvers } = require('@graphql-tools/merge');
 
// Importing resolvers
const userResolver = require("./user.resolver");
const projectResolver = require("./project.resolver");
const taskResolver = require("./task.resolver");

// Merging resolvers into one variable to export it to the server file (index.js).
const mergedResolvers = mergeResolvers([
  userResolver,
  projectResolver,
  taskResolver,
]);

module.exports = mergedResolvers;
