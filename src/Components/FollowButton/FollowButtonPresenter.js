import React from "react";
import Button from "../Button";

export default ({ isFollowing, onClick }) => (
  <Button
    text={isFollowing ? "팔로잉" : "팔로우"}
    isFollowing={isFollowing}
    onClick={onClick}
  />
);
