"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIGNIN = exports.SIGNUP = void 0;
const client_1 = require("@apollo/client");
const SIGNUP = (0, client_1.gql) `
  mutation signup($name: String, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`;
exports.SIGNUP = SIGNUP;
const SIGNIN = (0, client_1.gql) `
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
    }
  }
`;
exports.SIGNIN = SIGNIN;
