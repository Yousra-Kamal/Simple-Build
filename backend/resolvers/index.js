import { mergeResolvers } from "@graphql-tools/merge";

import userResolver from "./user.resolver.js";
import projectResolver from "./project.resolver.js";
import taskResolver from "./task.resolver.js";

const mergedResolvers = mergeResolvers([
  userResolver,
  projectResolver,
  taskResolver,
]);

export default mergedResolvers;
