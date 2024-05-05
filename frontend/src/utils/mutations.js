import { gql } from "@apollo/client";

/* User Mutations */

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

/*  Project Mutations  */
export const CREATE_PROJECT = gql`
  mutation CreateProject(
    $name: String!
    $description: String!
    $status: String!
    $projectCode: String!
    $startDate: String!
    $endDate: String!
  ) {
    createProject(
      name: $name
      description: $description
      status: $status
      projectCode: $projectCode
      startDate: $startDate
      endDate: $endDate
    ) {
      _id
      description
      endDate
      name
      projectCode
      startDate
      status
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($projectId: ID!) {
    deleteProject(projectId: $projectId) {
      _id
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $projectId: ID!
    $name: String!
    $description: String!
    $status: String!
    $projectCode: String!
    $startDate: String!
    $endDate: String!
  ) {
    updateProject(
      projectId: $projectId
      name: $name
      description: $description
      status: $status
      projectCode: $projectCode
      startDate: $startDate
      endDate: $endDate
    ) {
      _id
      description
      endDate
      name
      projectCode
      startDate
      status
    }
  }
`;
