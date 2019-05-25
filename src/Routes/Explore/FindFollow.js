import React, { useState } from "react";
import styled from "styled-components";
import { useMutation } from "react-apollo-hooks";
import {
  FOLLOW,
  UNFOLLOW
} from "../../Components/FollowButton/FollowButtonQueries";

const FFCard = styled.div`
  width: 200px;
  padding-left: 24px;
  flex-shrink: 0;
`;
const FF = styled.div`
  border: 1px solid #e6e6e6;
  background-color: #fff;
  padding: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 198px;
`;

const FFAvatar = styled.div`
  width: 56px;
  height: 56px;
  cursor: pointer;
  border-radius: 50%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  display: flex;
`;
const FFName = styled.div`
  margin: 16px 0px 8px;
`;

const FFText = styled.div`
  height: 28px;
  margin-bottom: 8px;
  text-align: center;
  color: #999;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

const FollowButton = styled.button`
  background-color: #3897f0;
  border: 1px solid #3897f0;
  border-radius: 4px;
  color: #fff;
  position: relative;
  cursor: pointer;
  display: block;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-overflow: ellipsis;
  width: auto;
  font-size: 14px;
`;

const FollowingButton = styled.button`
  border-radius: 4px;
  color: ${(props) => props.blackColor};
  background-color: transparent;
  border: 1px solid #dbdbdb;
  position: relative;
  cursor: pointer;
  display: block;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-overflow: ellipsis;
  width: auto;
  font-size: 14px;
`;
export default ({ user }) => {
  const { id, avatar, isFollowing, isSelf, username } = user;
  const [FollowingS, setFollowingS] = useState(isFollowing);
  const followMutation = useMutation(FOLLOW, { variables: { id } });
  const unfollowMutation = useMutation(UNFOLLOW, { variables: { id } });

  const toggleFollow = () => {
    if (FollowingS === true) {
      setFollowingS(!FollowingS);
      unfollowMutation();
    } else {
      followMutation();
      setFollowingS(!FollowingS);
    }
  };

  return (
    <FFCard>
      <FF>
        <FFAvatar bg={avatar} />
        <FFName>{username}</FFName>
        <FFText>Instagram 신규가입</FFText>
        {!isSelf &&
          (FollowingS ? (
            <FollowingButton onClick={toggleFollow}>팔로잉</FollowingButton>
          ) : (
            <FollowButton onClick={toggleFollow}>팔로우</FollowButton>
          ))}
      </FF>
    </FFCard>
  );
};
