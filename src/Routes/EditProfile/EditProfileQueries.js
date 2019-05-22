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

export const UPLOAD_MUTATION = gql`
  mutation uploadFile($file: Upload!) {
<<<<<<< HEAD
    uploadFile(file: $file)
=======
    uploadFile(file: $file) {
      id
    }
>>>>>>> 28a653ac202f0f4a54bbc44cf9cafee1bf9617a5
  }
`;
