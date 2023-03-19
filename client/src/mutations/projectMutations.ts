import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
  mutation addProject($title: String, $description: String!) {
    addProject(title: $title, description: $description) {
      id
      title
      description
    }
  }
`;

const UPDATE_PROJECT = gql`
  mutation updateProject(
    $projectId: ID!
    $title: String!
    $description: String!
  ) {
    updateProject(
      projectId: $projectId
      title: $title
      description: $description
    ) {
      id
      title
      description
    }
  }
`;

const DELETE_PROJECT = gql`
  mutation updateProject($projectId: ID!) {
    updateProject(projectId: $projectId) {
      id
      title
      description
    }
  }
`;

export { ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT };
