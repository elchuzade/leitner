import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query projects {
    projects {
      id
      title
    }
  }
`;

const GET_PROJECT = gql`
  query project($projectId: ID!) {
    project(projectId: $projectId) {
      id
      title
      description
    }
  }
`;

export { GET_PROJECTS, GET_PROJECT };
