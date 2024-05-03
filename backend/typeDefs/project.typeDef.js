const projectTypeDef = `#graphql
    type Project { 
        _id: ID!
        projectCode: String!
        name: String!
        description: String!
        status: String!
        startDate: String!
        endDate: String!
        #Project must be associated with a user
        user: User!
        #Project can have many tasks
        tasks: [Task]
    }
   
   type Query {
        projects: [Project]
        project(projectId: ID!): Project
    }
   type Mutation {
        createProject(name:String!, description:String!, status:String!,projectCode:String!, startDate:String!, endDate:String!, 
        ): Project
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
