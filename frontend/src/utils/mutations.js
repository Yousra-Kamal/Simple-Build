import { gql } from "@apollo/client";

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
