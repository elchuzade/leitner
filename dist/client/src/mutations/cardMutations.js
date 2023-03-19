"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_CARD = exports.UPDATE_CARD = exports.ADD_CARD = void 0;
const client_1 = require("@apollo/client");
const ADD_CARD = (0, client_1.gql) `
  mutation addCard(
    $projectId: ID!
    $title: String!
    $hint: String
    $description: String
    $answer: String
    $stage: Number!
  ) {
    addCard(
      projectId: $projectId
      title: $title
      hint: $hint
      description: $description
      answer: $answer
      stage: 1
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
    $projectId: ID!
    $cardId: ID!
    $title: String!
    $hint: String
    $description: String
    $answer: String
    $stage: Number!
  ) {
    updateCard(
      cardId: $cardId
      title: $title
      hint: $hint
      description: $description
      answer: $answer
      stage: $stage
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
