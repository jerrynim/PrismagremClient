import { gql } from "apollo-boost";

export const EDIT_PROFILE = gql`
  mutation editUser(
    $username: String
    $bio: String
    $email: String
    $gender: String
    $lastName: String
    $phoneNumber: String
  ) {
    editUser(
      username: $username
      bio: $bio
      email: $email
      gender: $gender
      lastName: $lastName
      phoneNumber: $phoneNumber
    ) {
      id
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation changePassword($currentPs: String, $newPs: String) {
    changePassword(currentPs: $currentPs, newPs: $newPs)
  }
`;
