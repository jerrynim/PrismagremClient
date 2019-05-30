import { gql } from "apollo-boost";

export const TOGGLE_LIKE = gql`
  mutation toggelLike($postId: String!) {
    toggleLike(postId: $postId)
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: String!, $text: String!) {
    addComment(postId: $postId, text: $text) {
      id
      text
      user {
        avatar
        username
      }
    }
  }
`;

export const SEARCH_USER = gql`
  query searchUser($term: String!) {
    searchUser(term: $term) {
      id
      avatar
      username
      lastName
    }
  }
`;
