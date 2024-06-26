import { gql } from "@apollo/client";

// User Queries

export const QUERY_USER = gql`
  query user {
    user {
      _id
      username
      email
    }
  }
`;

// Project Queries

// Important for useQuery: Each query we'd like to be able to perform gets exported out of our queries.js utility
export const QUERY_PROJECTS = gql`
  query allProjects {
    projects {
      _id
      name
      projectCode
      description
      status
      startDate
      endDate
      tasks {
        _id
        taskStatus
        taskTitle
        taskDescription
        taskStage
      }
    }
  }
`;

// Important for Query Variables: To successfully execute this GraphQL query, you would need to provide a non-null ID value for the projectId argument. This value is passed using the $projectId variable, which represents the placeholder for the actual value in the query.

export const QUERY_SINGLE_PROJECT = gql`
  query singleProject($projectId: ID!) {
    project(projectId: $projectId) {
      _id
      name
      description
      status
      projectCode
      startDate
      endDate
      tasks {
        _id
        taskDescription
        taskStage
        taskStatus
        taskTitle
      }
    }
  }
`;
