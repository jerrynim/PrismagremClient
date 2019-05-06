import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { useMutation } from "react-apollo-hooks";
import { FOLLOW } from "./FollowButton/FollowButtonQueries";

const Container = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const AvatarBox = styled.div`
  margin-right: 12px;
`;
const RecommendText = styled.div`
  width: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RecommendType = styled.div`
  font-size: 12px;
  color: #999;
`;
const FollowButton = styled.button`
  padding: 0px;
  color: #3897f0;
  border: 0;
  font-size: 12px;
  cursor: pointer;
  margin-left: 8px;
  font-weight: 600;
  outline: none;
`;

const UnFollowButton = styled.button`
  padding: 0px;
  color: ${(props) => props.theme.blackColor};
  border: 0;
  font-size: 12px;
  cursor: pointer;
  margin-left: 8px;
  font-weight: 600;
  outline: none;
`;

const StoryUserName = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 2px;
`;

const Recommend = (user) => {
  //전달받은 user
  const { user: RecommendUser } = user;
  //추천 팔로우를 위해서
  const followMutation = useMutation(FOLLOW, {
    variables: {
      id: RecommendUser.id
    }
  });

  const followClick = (e) => {
    e.preventDefault();
    followMutation();
    setFollowing(true);
  };

  //클라이언트 following toggled을 위해
  const [following, setFollowing] = useState(false);
  return (
    <Container>
      <AvatarBox>
        <Avatar size={"sm"} url={RecommendUser.avatar} />
      </AvatarBox>
      <RecommendText>
        <StoryUserName>{RecommendUser.username}</StoryUserName>
        <RecommendType>Instagram 신규 가입</RecommendType>
      </RecommendText>
      {following === false && (
        <FollowButton onClick={followClick}>팔로우</FollowButton>
      )}
      {//언팔로우를 위한 팝업 을 생성해야함
      following !== false && <UnFollowButton>팔로잉</UnFollowButton>}
    </Container>
  );
};

export default Recommend;
