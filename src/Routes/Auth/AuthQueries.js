import { gql } from "apollo-boost";

export const LOG_IN = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $lastName: String!
    $secret: String!
  ) {
    createAccount(
      username: $username
      email: $email
      name: $lastName
      secret: $secret
    )
  }
`;

export const CONFIRM_SECRET = gql`
  mutation confirmSecret($secret: String!, $email: String!) {
    confirmSecret(secret: $secret, email: $email)
  }
`;

export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $secret: String!) {
    login(email: $email, secret: $secret)
  }
`;

export const FACEBOOK_LOGIN = gql`
  mutation facebookLogin(
    $email: String!
    $firstName: String!
    $lastName: String!
    $name: String!
  ) {
    facebookLogin(
      email: $email
      firstName: $firstName
      lastName: $lastName
      name: $name
    )
  }
`;
