import React, { useState } from "react";
import EditProfilePresenter from "./EditProfilePresenter";
export default () => {
  //Menu 전환을 위한 State
  const [action, setAction] = useState("editProfile");

  //input의 enter키 방지
  const onKeyPress = async (event) => {
    const { which } = event;
    if (which === 13) {
      event.preventDefault();
    }
  };
  return (
    <EditProfilePresenter
      action={action}
      setAction={setAction}
      onKeyPress={onKeyPress}
    />
  );
};
