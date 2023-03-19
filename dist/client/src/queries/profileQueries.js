"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PROFILE = void 0;
const client_1 = require("@apollo/client");
const GET_PROFILE = (0, client_1.gql) `
  query profile {
    profile {
      id
      name
    }
  }
`;
exports.GET_PROFILE = GET_PROFILE;
