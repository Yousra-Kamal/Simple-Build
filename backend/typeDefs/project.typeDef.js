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
        userId: String!
        user: User!
        #Project can have many tasks
        
    }
   
   type Query {
        projects: [Project]
        project(projectId: ID!): Project
    }
   type Mutation {
        createProject(name:String!, description:String!, status:String!,projectCode:String!, startDate:String!, endDate:String!, 
        ): Project

        updateProject(
            projectId: ID!
            name: String
            description: String
            status: String
            projectCode: String
            startDate: String
            endDate: String
         ): Project

        deleteProject(projectId: ID!): Project
    }

    
`;

module.exports = projectTypeDef;
