import { gql } from "apollo-boost";

export const APP_QUERIES = gql`
  {
    isLoggedIn @client
  }
`;
