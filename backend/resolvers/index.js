import { mergeResolvers } from "@graphql-tools/merge";

// Importing resolvers
import userResolver from "./user.resolver.js";
import projectResolver from "./project.resolver.js";
import taskResolver from "./task.resolver.js";

// Merging resolvers into one variable to export it to the server file (index.js).
const mergedResolvers = mergeResolvers([
  userResolver,
  projectResolver,
  taskResolver,
]);

export default mergedResolvers;
