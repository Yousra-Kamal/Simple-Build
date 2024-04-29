// Initialize typeDefs and merge them into one
import { mergeTypeDefs } from "@graphql-tools/merge";

// Importing typeDefs
import userTypeDef from "./user.typeDef.js";
import projectTypeDef from "./project.typeDef.js";
import taskTypeDef from "./task.typeDef.js";

// Merging typeDefs into one variable to export it to the server file (index.js).
const mergedTypeDefs = mergeTypeDefs([
  userTypeDef,
  projectTypeDef,
  taskTypeDef,
]);

export default mergedTypeDefs;
