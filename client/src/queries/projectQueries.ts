import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query projects {
    projects {
      id
      title
    }
  }
`;

export { GET_PROJECTS };
