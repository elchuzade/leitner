"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_CARD = exports.GET_CARDS = void 0;
const client_1 = require("@apollo/client");
const GET_CARDS = (0, client_1.gql) `
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
exports.GET_CARDS = GET_CARDS;
const GET_CARD = (0, client_1.gql) `
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
exports.GET_CARD = GET_CARD;
