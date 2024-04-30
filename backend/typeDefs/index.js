// Initialize typeDefs and merge them into one

const { mergeTypeDefs } = require("@graphql-tools/merge");

// Importing typeDefs
const userTypeDef = require("./user.typeDef");
const projectTypeDef = require("./project.typeDef");
const taskTypeDef = require("./task.typeDef");

// Merging typeDefs into one variable to export it to the server file (index.js).
const mergedTypeDefs = mergeTypeDefs([
  userTypeDef,
  projectTypeDef,
  taskTypeDef,
]);

module.exports = mergedTypeDefs;
