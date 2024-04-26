import { mergeTypeDefs } from "@graphql-tools/merge";

import userTypeDef from "./user.typeDef.js";
import projectTypeDef from "./project.typeDef.js";
import taskTypeDef from "./task.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([userTypeDef, projectTypeDef, taskTypeDef]);

export default mergedTypeDefs;
