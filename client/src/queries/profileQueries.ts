import { gql } from "@apollo/client";

const GET_PROFILE = gql`
  query profile {
    profile {
      id
      name
    }
  }
`;

export { GET_PROFILE };
