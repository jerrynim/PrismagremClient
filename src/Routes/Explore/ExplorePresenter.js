import React from "react";
import styled from "styled-components";
import FindFollow from "./FindFollow";
import ProfilePost from "../Profile/ProfilePost";
import FullPost from "../../Components/FullPost";
const Container = styled.div`
  @media (min-width: 736px) {
    box-sizing: content-box;
    padding: 40px 20px 0;
    width: calc(100% - 40px);
    margin: 77px auto 30px;
  }
  margin: 90px auto 30px;

  max-width: 935px;
`;
const FindFollowContainer = styled.div`
  @media (max-width: 736px) {
    display: none;
  }
  margin-bottom: 60px;
`;
const Posts = styled.div`
  flex-direction: column;
  padding-bottom: 0px;
  padding-top: 0px;
`;
const FFHeader = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;
const FFTitle = styled.h2`
  @media (max-width: 736px) {
    padding: 0px 8px;
  }
  color: #999;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`;
const FFSeeAll = styled.span`
  color: #3897f0;
  font-size: 14px;
  font-weight: 600;
`;
const FFBoxContainer = styled.div`
  position: relative;

  padding: 16px 0px;
  overflow: hidden;
`;
const FFBox = styled.div`
  transform: translateX(0px);
  transition: 1s;
  display: flex;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default ({ userData, postData, fullPost, setFullPost }) => {
  const { getUsers } = userData;
  const { getPosts } = postData;
  return (
    <Container>
      <FindFollowContainer>
        <FFHeader>
          <FFTitle>팔로우할 만한 계정 둘러보기</FFTitle>
          <FFSeeAll>모두보기</FFSeeAll>
        </FFHeader>
        <FFBoxContainer>
          <FFBox>
            {getUsers.map((user, index) => (
              <FindFollow key={index} user={user} />
            ))}
          </FFBox>
        </FFBoxContainer>
      </FindFollowContainer>
      <FFHeader>
        <FFTitle>둘러보기</FFTitle>
      </FFHeader>
      {
        <Posts>
          {getPosts && (
            <ProfilePost
              posts={getPosts}
              fullPost={fullPost}
              setFullPost={setFullPost}
            />
          )}
        </Posts>
      }
      {fullPost !== "" && (
        <FullPost fullPost={fullPost} setFullPost={setFullPost} />
      )}
    </Container>
  );
};
