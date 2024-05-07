// Initialize typeDefs and merge them into one

const { mergeTypeDefs } = require("@graphql-tools/merge");

// Importing typeDefs
const userTypeDef = require("./user.typeDef");
const projectTypeDef = require("./project.typeDef");

// Merging typeDefs into one variable to export it to the server file (index.js).
const mergedTypeDefs = mergeTypeDefs([userTypeDef, projectTypeDef]);

module.exports = mergedTypeDefs;
