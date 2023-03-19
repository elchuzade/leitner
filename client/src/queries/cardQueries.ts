import { gql } from "@apollo/client";

const GET_CARDS = gql`
  query cards($projectId: ID!) {
    cards(projectId: $projectId) {
      id
      title
      hint
      description
      answer
      stage
    }
  }
`;

export { GET_CARDS };
