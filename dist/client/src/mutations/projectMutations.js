"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_PROJECT = exports.UPDATE_PROJECT = exports.ADD_PROJECT = void 0;
const client_1 = require("@apollo/client");
const ADD_PROJECT = (0, client_1.gql) `
  mutation addProject($title: String!, $description: String) {
    addProject(title: $title, description: $description) {
      id
      title
      description
    }
  }
`;
exports.ADD_PROJECT = ADD_PROJECT;
const UPDATE_PROJECT = (0, client_1.gql) `
  mutation updateProject(
    $projectId: ID!
    $title: String!
    $description: String
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
exports.UPDATE_PROJECT = UPDATE_PROJECT;
const DELETE_PROJECT = (0, client_1.gql) `
  mutation deleteProject($projectId: ID!) {
    deleteProject(projectId: $projectId) {
      id
      title
      description
    }
  }
`;
exports.DELETE_PROJECT = DELETE_PROJECT;
