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
        tasks: [Task!]
        
    }

   type Task {
        _id: ID!
        taskTitle: String!
        taskDescription: String!
        taskStage: String!
        taskStatus: String!
    }   

   
   type Query {
        projects: [Project]
        project(projectId: ID!): Project
    }

   type Mutation {
        createProject(name:String!, description:String!, status:String!,projectCode:String!, startDate:String!, endDate:String!, 
        ): Project
        
        addTaskToProject(
            projectId: ID!
            taskTitle: String!
            taskDescription: String!
            taskStage: String!
            taskStatus: String!
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

        updateTaskInProject(
            projectId: ID!
            taskId: ID!
            taskTitle: String
            taskDescription: String
            taskStage: String
            taskStatus: String
        ): Project
        

       """  deleteTaskFromProject(projectId: ID!, taskId: ID!): Project """

        deleteTask(projectId:ID!, taskIndex:Int! ): Project

        deleteProject(projectId: ID!): Project
    }

    
`;

module.exports = projectTypeDef;
