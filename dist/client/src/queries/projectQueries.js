"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PROJECT = exports.GET_PROJECTS = void 0;
const client_1 = require("@apollo/client");
const GET_PROJECTS = (0, client_1.gql) `
  query projects {
    projects {
      id
      title
    }
  }
`;
exports.GET_PROJECTS = GET_PROJECTS;
const GET_PROJECT = (0, client_1.gql) `
  query project($projectId: ID!) {
    project(projectId: $projectId) {
      id
      title
      description
    }
  }
`;
exports.GET_PROJECT = GET_PROJECT;
