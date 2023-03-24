import { gql } from "@apollo/client";

const ADD_CARD = gql`
  mutation addCard(
    $projectId: ID!
    $title: String!
    $hint: String
    $description: String
    $answer: String
  ) {
    addCard(
      projectId: $projectId
      title: $title
      hint: $hint
      description: $description
      answer: $answer
    ) {
      id
      title
      hint
      description
      answer
      stage
    }
  }
`;

const UPDATE_CARD = gql`
  mutation updateCard(
    $cardId: ID!
    $title: String!
    $hint: String
    $description: String
    $answer: String
  ) {
    updateCard(
      cardId: $cardId
      title: $title
      hint: $hint
      description: $description
      answer: $answer
    ) {
      id
      title
      hint
      description
      answer
      stage
    }
  }
`;

const DELETE_CARD = gql`
  mutation deleteCard($cardId: ID!) {
    deleteCard(cardId: $cardId) {
      id
      title
      hint
      description
      answer
      stage
    }
  }
`;

export { ADD_CARD, UPDATE_CARD, DELETE_CARD };
