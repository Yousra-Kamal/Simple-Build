const taskTypeDef = `#graphql
    type Task {
        _id: ID!
        projectId: ID!
        title: String!
        description: String!
        status: String! 
        stage: String!
        sequenceNumber: Int!
        #Task must be associated with a project
        project: Project!
        
    }

    type Query {
        tasks: [Task]
        task(taskId:ID!): Task  
    }

    type Mutation {
        createTask(input: CreateTaskInput!): Task
        updateTask(taskId: ID!, input: UpdateTaskInput!): Task
        deleteTask(taskId: ID!): Task
    }

    input CreateTaskInput {
        title: String!
        description: String!
        status: String!
        projectId: ID!
    }

    input UpdateTaskInput {
        title: String
        description: String
        status: String
        stage: String
    }
`;

module.exports = taskTypeDef;