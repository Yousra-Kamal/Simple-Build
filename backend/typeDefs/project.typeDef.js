const projectTypeDef = `#graphql
    type Project { 
        _id: ID!
        name: String!
        description: String!
        status: String!
        createdAt: String!
        updatedAt: String!
        #Project must be associated with a user
        user: User!
        #Project can have many tasks
        tasks: [Task]
    }
    input ProjectInput {
        name: String!
        description: String!
        status: String!
    }
   type Query {
        projects: [Project]
        project(projectId: ID!): Project
    }
   type Mutation {
        createProject(username: String!, name:String!, description:String!, status:String! ): Project
        updateProject(input: updateProjectInput!): Project
        deleteProject(projectId: ID!): Project
    }

    input updateProjectInput {
        projectId: ID!
        name: String
        description: String
        status: String
    }
`;

module.exports = projectTypeDef;
