import { gql } from "apollo-boost";

export const ME = gql`
  {
    me {
      id
      avatar
      username
      email
      lastName
      bio
      phoneNumber
      gender
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
