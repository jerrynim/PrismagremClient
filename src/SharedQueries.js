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
export const UPLOAD = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file)
  }
`;
export const GET_POSTS = gql`
  query getPosts {
    getPosts {
      location
      caption
      user {
        avatar
        username
        isFollowing
        isSelf
      }
      files {
        url
      }
      likes {
        user {
          avatar
          username
        }
      }
      comments {
        text
        user {
          avatar
          username
        }
        createdAt
      }
      createdAt
      isLiked
      likeCount
      commentCount
    }
  }
`;
