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

const GET_CARD = gql`
  query card($cardId: ID!) {
    card(cardId: $cardId) {
      id
      title
      hint
      description
      answer
      stage
    }
  }
`;

export { GET_CARDS, GET_CARD };
