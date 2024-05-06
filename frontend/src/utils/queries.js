import { gql } from "@apollo/client";

// User Queries

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      email
      password
      username
      projects {
        _id
        description
        endDate
        name
        projectCode
        startDate
        status
      }
    }
  }
`;

// Project Queries

// Important for useQuery: Each query we'd like to be able to perform gets exported out of our queries.js utility
export const QUERY_PROJECTS = gql`
  query allProjects {
    user {
      email
      username
      projects {
        _id
        description
        endDate
        name
        projectCode
        startDate
        status
      }
    }
  }
`;

// Important for Query Variables: To successfully execute this GraphQL query, you would need to provide a non-null ID value for the projectId argument. This value is passed using the $projectId variable, which represents the placeholder for the actual value in the query.

export const QUERY_SINGLE_PROJECT = gql`
  query singleProject($projectId: ID!) {
    project(projectId: $projectId) {
      _id
      projectCode
      name
      description
      status
      startDate
      endDate
    }
  }
`;
