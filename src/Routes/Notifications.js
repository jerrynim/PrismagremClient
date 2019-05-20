import React from "react";
import gql from "graphql-tag";
import styled from "styled-components";
import { Mutation } from "react-apollo";
const Input = styled.input`
  margin-top: 300px;
`;

const UploadFile = () => (
  <Mutation
    mutation={gql`
      mutation($file: Upload!) {
        uploadFile(file: $file) {
          success
        }
      }
    `}
  >
    {(mutate) => (
      <Input
        type="file"
        required
        onChange={({
          target: {
            validity,
            files: [file]
          }
        }) => validity.valid && mutate({ variables: { file } })}
      />
    )}
  </Mutation>
);
export default UploadFile;
