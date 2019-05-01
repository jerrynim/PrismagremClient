import React from "react";
import Avatar from "./Avatar";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  margin-bottom: 30px;
  max-width: 293px;
  right: 0;
  width: 100%;
`;

const Me = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  max-height: 50px;
  width: 100%;
  padding-left: 5px;
`;
const NameBox = styled.div`
  margin-left: 14px;
  flex-direction: column;
  justify-content: center;
`;
const Username = styled(Link)`
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 2px;
  color: ${(props) => props.theme.blackColor};
  font-weight: 600;
`;
const FullName = styled.div`
  font-size: 12px;
  color: #999;
`;
const StoryBox = styled.div`
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  background-color: white;
  margin-top: 4px;
`;

const StoryBoxHead = styled.div`
  padding: 4px 16px;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
`;
const StoryText = styled.div`
  font-weight: 500;
  color: #999;
`;
const StorySeeAll = styled(Link)`
  color: ${(props) => props.theme.blackColor};
  font-weight: 600;
  font-size: 12px;
`;
const StoriesWrapper = styled.div`
  margin-top: 8px;
`;
const StoriesInWrapper = styled.div`
  margin-left: 16px;
`;
const StoryArray = styled.div`
  height: 182px;
  overflow: hidden auto;
  display: flex;
  flex-direction: column;
`;
const StoryHeight = styled.div`
  height: 52px;
`;
const StoryButton = styled.button`
  display: flex;
  padding-left: 5px;
  text-align: left;
  width: 100%;
  align-items: center;
  height: 44px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;
const StoryPhoto = styled.div`
  width: 44px;
  height: 44px;
  background-color: red;
`;
const StoryImg = styled.div`
  width: 34px;
  height: 34px;
  background-color: blue;
`;
const StoryDes = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
`;
const StoryUserName = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 2px;
`;
const StoryTime = styled.div`
  font-size: 10px;
  line-height: 12px;
  color: #999;
  text-transform: uppercase;
`;
export default (me) => {
  const { avatar, username, fullName } = me.me;
  return (
    <Wrapper>
      <Me>
        <Avatar size={"md"} url={avatar} />
        <NameBox>
          <Username to={`/${username}`}>{username}</Username>
          <FullName>{fullName}</FullName>
        </NameBox>
      </Me>
      <StoryBox>
        <StoryBoxHead>
          <StoryText>스토리</StoryText>
          <StorySeeAll>모두 보기</StorySeeAll>
        </StoryBoxHead>
        <StoriesWrapper>
          <StoriesInWrapper>
            <StoryArray>
              <StoryHeight>
                <StoryButton>
                  <StoryPhoto>
                    <StoryImg />
                  </StoryPhoto>
                  <StoryDes>
                    <StoryUserName>exampleuser</StoryUserName>
                    <StoryTime>4시간전</StoryTime>
                  </StoryDes>
                </StoryButton>
              </StoryHeight>
              <StoryHeight>
                <StoryButton>
                  <StoryPhoto>
                    <StoryImg />
                  </StoryPhoto>
                  <StoryDes>
                    <StoryUserName>exampleuser</StoryUserName>
                    <StoryTime>4시간전</StoryTime>
                  </StoryDes>
                </StoryButton>
              </StoryHeight>
              <StoryHeight>
                <StoryButton>
                  <StoryPhoto>
                    <StoryImg />
                  </StoryPhoto>
                  <StoryDes>
                    <StoryUserName>exampleuser</StoryUserName>
                    <StoryTime>4시간전</StoryTime>
                  </StoryDes>
                </StoryButton>
              </StoryHeight>
              <StoryHeight>
                <StoryButton>
                  <StoryPhoto>
                    <StoryImg />
                  </StoryPhoto>
                  <StoryDes>
                    <StoryUserName>exampleuser</StoryUserName>
                    <StoryTime>4시간전</StoryTime>
                  </StoryDes>
                </StoryButton>
              </StoryHeight>
              <StoryHeight>
                <StoryButton>
                  <StoryPhoto>
                    <StoryImg />
                  </StoryPhoto>
                  <StoryDes>
                    <StoryUserName>exampleuser</StoryUserName>
                    <StoryTime>4시간전</StoryTime>
                  </StoryDes>
                </StoryButton>
              </StoryHeight>
            </StoryArray>
          </StoriesInWrapper>
        </StoriesWrapper>
      </StoryBox>
    </Wrapper>
  );
};
