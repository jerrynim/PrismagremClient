import React from "react";
import Avatar from "./Avatar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import storyCircle from "./Images/storyCircle.png";
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
  min-height: 52px;
  text-align: left;
  display: flex;
  justify-content: flex-start;
`;

const StoryButton = styled.button`
  padding: 0px;
  display: flex;
  width: 100%;
  align-items: center;
  height: 44px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
`;
const StoryPhoto = styled.div`
  width: 44px;
  height: 44px;
  background-image: url(${storyCircle});
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StoryImg = styled.div`
  width: 34px;
  height: 34px;
  background-color: blue;
  border-radius: 50%;
`;
const StoryDes = styled.div`
  margin-left: 8px;
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
  text-align: left;
  text-transform: uppercase;
`;

const RecommendBox = styled.div`
  margin: 12px 0px;
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  background-color: white;
`;

const RecommendBoxHead = styled.div`
  padding: 4px 16px;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
`;

const RecommendsWrapper = styled.div`
  margin: 0px 0px 4px 4px;
  padding: 8px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Recommend = styled.div`
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

const Footer = styled.div``;
const FooterNav = styled.nav`
  margin-bottom: 16px;
`;
const FooterUl = styled.ul`
  margin: 0px 16px 3px 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const FooterLi = styled.li`
  color: #c7c7c7;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  margin-bottom: 6px;
`;
const Copyright = styled.span`
  color: #c7c7c7;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
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
          <StorySeeAll to={"/"}>모두 보기</StorySeeAll>
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
      <RecommendBox>
        <RecommendBoxHead>
          <StoryText>회원님을 위환 추천</StoryText>
          <StorySeeAll to={"/"}>모두 보기</StorySeeAll>
        </RecommendBoxHead>
        <RecommendsWrapper>
          <Recommend>
            <AvatarBox>
              <Avatar size={"sm"} url={""} />
            </AvatarBox>
            <RecommendText>
              <StoryUserName>exampleuser</StoryUserName>
              <RecommendType>Instagram 신규 가입</RecommendType>
            </RecommendText>
            <FollowButton>팔로우</FollowButton>
          </Recommend>
          <Recommend>
            <AvatarBox>
              <Avatar size={"sm"} url={""} />
            </AvatarBox>
            <RecommendText>
              <StoryUserName>exampleuser</StoryUserName>
              <RecommendType>Instagram 신규 가입</RecommendType>
            </RecommendText>
            <FollowButton>팔로우</FollowButton>
          </Recommend>
          <Recommend>
            <AvatarBox>
              <Avatar size={"sm"} url={""} />
            </AvatarBox>
            <RecommendText>
              <StoryUserName>exampleuser</StoryUserName>
              <RecommendType>Instagram 신규 가입</RecommendType>
            </RecommendText>
            <FollowButton>팔로우</FollowButton>
          </Recommend>
        </RecommendsWrapper>
      </RecommendBox>
      <Footer>
        <FooterNav>
          <FooterUl>
            <FooterLi>Instagram 정보ㆍ</FooterLi>
            <FooterLi>지원ㆍ</FooterLi>
            <FooterLi>홍보 센터ㆍ</FooterLi>
            <FooterLi>APIㆍ</FooterLi>
            <FooterLi>채용 정보ㆍ</FooterLi>
            <FooterLi>개인정보처리방침ㆍ</FooterLi>
            <FooterLi>약관ㆍ</FooterLi>
            <FooterLi>디렉터리ㆍ</FooterLi>
            <FooterLi>프로필ㆍ</FooterLi>
            <FooterLi>해시태그ㆍ</FooterLi>
            <FooterLi>언어</FooterLi>
          </FooterUl>
        </FooterNav>
        <Copyright>@{new Date().getFullYear()} INSTAGRAM&copy;</Copyright>
      </Footer>
    </Wrapper>
  );
};
