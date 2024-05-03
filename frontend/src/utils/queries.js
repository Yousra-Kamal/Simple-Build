import { gql } from "@apollo/client";

// Important for useQuery: Each query we'd like to be able to perform gets exported out of our queries.js utility
export const QUERY_PROJECTS = gql`
  query allProjects {
    projects {
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
