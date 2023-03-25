"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BACKWARD_CARD = exports.FORWARD_CARD = exports.DELETE_CARD = exports.UPDATE_CARD = exports.ADD_CARD = void 0;
const client_1 = require("@apollo/client");
const ADD_CARD = (0, client_1.gql) `
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
exports.ADD_CARD = ADD_CARD;
const UPDATE_CARD = (0, client_1.gql) `
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
exports.UPDATE_CARD = UPDATE_CARD;
const DELETE_CARD = (0, client_1.gql) `
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
exports.DELETE_CARD = DELETE_CARD;
const FORWARD_CARD = (0, client_1.gql) `
  mutation forwardCard($cardId: ID!) {
    forwardCard(cardId: $cardId) {
      id
      title
      hint
      description
      answer
      stage
    }
  }
`;
exports.FORWARD_CARD = FORWARD_CARD;
const BACKWARD_CARD = (0, client_1.gql) `
  mutation backwardCard($cardId: ID!) {
    backwardCard(cardId: $cardId) {
      id
      title
      hint
      description
      answer
      stage
    }
  }
`;
exports.BACKWARD_CARD = BACKWARD_CARD;
