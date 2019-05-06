import { gql } from "apollo-boost";

export const ME = gql`
  {
    me {
      username
    }
  }
`;

export const GET_USERS = gql`
  query getUsers {
    getUsers {
      id
      avatar
      username
      isFollowing
      isSelf
    }
  }
`;
