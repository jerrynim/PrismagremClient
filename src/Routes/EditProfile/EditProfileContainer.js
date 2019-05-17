import React, { useState } from "react";
import EditProfilePresenter from "./EditProfilePresenter";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../../SharedQueries";
import Axios from "axios";

export default () => {
  //Menu 전환을 위한 State
  const [action, setAction] = useState("editProfile");
  const [uploading, setUplaoding] = useState("");
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
  const onInputChange = async (e) => {
    const {
      target: { name, value, files }
    } = e;
    if (files) {
      this.setState({
        uploading: true
      });
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("api_key", "811881451928618");
      formData.append("upload_preset", "tqecb16q");
      formData.append("timestamp", String(Date.now() / 1000));
      const {
        data: { secure_url }
      } = await Axios.post(
        "https://api.cloudinary.com/v1_1/djjpx4ror/image/upload",
        formData
      );
      if (secure_url) {
        this.setState({
          profilePhoto: secure_url,
          uploading: false
        });
      }
      this.setState({
        [name]: value
      });
    }
  };
  return (
    <>
      {user && (
        <EditProfilePresenter
          user={user}
          action={action}
          setAction={setAction}
          onKeyPress={onKeyPress}
          onInputChange={onInputChange}
        />
      )}
    </>
  );
};
