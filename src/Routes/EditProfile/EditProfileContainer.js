import React, { useState } from "react";
import EditProfilePresenter from "./EditProfilePresenter";
import { useQuery } from "react-apollo-hooks";
import { Mutation } from "react-apollo";
import { ME } from "../../SharedQueries";
import { UPLOAD_MUTATION } from "./EditProfileQueries";
const EditProfileContainer = () => {
  //Menu 전환을 위한 State
  const [action, setAction] = useState("editProfile");
  // const [uploading, setUplaoding] = useState("");
  const {
    data: { me: user }
  } = useQuery(ME);

  //input의 enter키 방지
  const onKeyPress = async (event) => {
    const { which } = event;
    if (which === 13) {
      event.preventDefault();
    }
  };

  return (
    <Mutation mutation={UPLOAD_MUTATION}>
      {(upload) => {
        return (
          <>
            {user && (
              <EditProfilePresenter
                user={user}
                action={action}
                setAction={setAction}
                onKeyPress={onKeyPress}
                upload={upload}
              />
            )}
          </>
        );
      }}
    </Mutation>
  );
};

export default EditProfileContainer;
