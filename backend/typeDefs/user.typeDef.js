const userTypeDef = `#graphql
 type User {
    _id: ID!
    username: String!
    email: String!
    password: String! 
    #User can have many projects
    projects:  [Project!]
    #User can have many tasks
    tasks: [Task!]
    
}

type Auth {
    token: ID!
    user: User
  }

type Query {
    user: User  
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    logout: LogoutResponse
  }

 
  type LogoutResponse {
    message: String!
  }

`;

module.exports = userTypeDef;
