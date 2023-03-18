"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN = exports.SIGNUP = void 0;
const client_1 = require("@apollo/client");
const SIGNUP = (0, client_1.gql) `
  mutation signup($name: String!, $email: String!, $password: String) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`;
exports.SIGNUP = SIGNUP;
const LOGIN = (0, client_1.gql) `
  mutation login($email: String!, $password: String) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
exports.LOGIN = LOGIN;
