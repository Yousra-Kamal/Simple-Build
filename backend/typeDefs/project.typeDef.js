const projectTypeDef = `#graphql
    type Project { 
        _id: ID!
        userId: ID!
        name: String!
        description: String!
        status: String!
        createdAt: String!
        updatedAt: String!
        #Project must be associated with a user
        user: User!
        #Project can have many tasks
        tasks: [Task!]
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
        createProject(input: ProjectInput!): Project
        updateProject(id: ID!, input: ProjectInput!): Project
        deleteProject(id: ID!): Project
    }
`;

export default projectTypeDef;
