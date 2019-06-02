import React from "react";
import styled from "styled-components";
import { Helmet } from "rl-react-helmet";
import Loader from "../../Components/Loader";
import FatText from "../../Components/FatText";
import options from "../../Components/Images/options.png";
import television from "../../Components/Images/television.png";
import tagged from "../../Components/Images/tagged.png";
import Bookmark from "../../Components/Images/Bookmark.png";
import net from "../../Components/Images/net.png";
import blueNet from "../../Components/Images/blueNet.png";
import ProfilePost from "./ProfilePost";
import FullPost from "../../Components/FullPost";
import SettingOverlay from "../../Components/SettingOverlay";
import { Link } from "react-router-dom";
import more from "../../Components/Images/more.png";
import photograph from "../../Components/Images/photograph.png";
import FollowButton from "../../Components/FollowButton";
const Wrapper = styled.div``;

const Main = styled.div`
  @media (min-width: 735px) {
    margin: 77px auto 30px;
    padding: 60px 20px 0;
    width: calc(100% - 40px);
  }
  margin: 107px auto 0px;
  width: 100%;
  max-width: 935px;
`;

const Header = styled.header`
  @media (max-width: 735px) {
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 24px;
  }
  display: flex;
  margin: 0 auto;
  margin-bottom: 44px;
`;

const AvartarHeader = styled.div`
  @media (max-width: 735px) {
    flex: 0;
    margin-right: 28px;
  }
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;

const HeaderColumn = styled.div`
  @media (max-width: 735px) {
    flex: 0;
    width: 100%;
    flex-grow: 1;
  }
  flex: 2;
`;

const Avatar = styled.div`
  @media (max-width: 735px) {
    width: 77px;
    height: 77px;
  }
  width: 150px;
  height: 150px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  border-radius: 50%;
`;
const UsernameRow = styled.div`
  @media (max-width: 735px) {
    margin-bottom: 12px;
  }
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Username = styled.span`
  font-size: 28px;
  display: block;
`;

const Counts = styled.ul`
  @media (max-width: 735px) {
    display: none;
  }
  display: flex;
  margin-bottom: 20px;
`;

const Count = styled.li`
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

const FullName = styled(FatText)`
  @media (max-width: 735px) {
    display: none;
  }
  font-size: 16px;
`;

const Bio = styled.div`
  @media (max-width: 735px) {
    display: none;
  }
  white-space: pre;
  margin: 10px 0px;
`;
const ExtendEditButton = styled(Link)`
  @media (min-width: 735px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid #dbdbdb;
  color: ${(props) => props.theme.blackColor};
  width: 100%;
  height: 30px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 9px;
  outline: none;
  :active {
    opacity: 0.7;
  }
  cursor: pointer;
`;
const SmallName = styled.div`
  @media (min-width: 735px) {
    display: none;
  }
  width: 100%;
  padding: 0px 16px 0px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

const SmallBio = styled.div`
  @media (min-width: 735px) {
    display: none;
  }
  white-space: pre;
  padding: 5px 16px 21px;
`;
const SmallCounts = styled.div`
  @media (min-width: 735px) {
    display: none;
  }
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #efefef;
  padding: 12px 0;
`;
const SmallCount = styled.div`
  font-size: 14px;
  text-align: center;
  width: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 36px;
  align-items: center;
`;
const SmallCountText = styled.span`
  text-align: center;
  color: #999;
`;
const SmallCountNum = styled.span`
  color: ${(props) => props.theme.blackColor};
  font-weight: 600;
`;
const Posts = styled.div`
  flex-direction: column;
  padding-bottom: 0px;
  padding-top: 0px;
`;

const EditButton = styled(Link)`
  @media (max-width: 735px) {
    display: none;
  }
  background-color: transparent;
  border: 1px solid #dbdbdb;
  color: ${(props) => props.theme.blackColor};
  width: 85px;
  height: 30px;
  border-radius: 4px;
  margin-left: 20px;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 9px;
  outline: none;
  :active {
    opacity: 0.7;
  }
  cursor: pointer;
`;

const OptionButton = styled.button`
  outline: 0;
  background-color: transparent;
  width: 24px;
  height: 24px;
  background-image: url(${options});
  background-size: cover;
  border: 0;
  margin-left: 13px;
  cursor: pointer;
`;

const NavItem = styled.div`
  @media (max-width: 735px) {
    flex: 1;
    margin: 0;
    border: 0;
  }
  margin-right: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child {
    @media (max-width: 735px) {
      border-top: 0;
    }

    border-top: 1px solid black;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const Navbar = styled.div`
  @media (max-width: 735px) {
    justify-content: space-between;
    height: 44px;
  }
  border-top: 1px solid #efefef;
  display: flex;
  justify-content: center;
  height: 53px;
`;

const NavIcon = styled.div`
  @media (max-width: 735px) {
    background-size: 24px 24px;
    width: 24px;
    height: 24px;
  }
  background-image: url(${(props) => props.src});
  background-size: 12px 12px;
  width: 12px;
  height: 12px;
  cursor: pointer;
`;
const NetIcon = styled.div`
  @media (max-width: 735px) {
    background-size: 24px 24px;
    width: 24px;
    height: 24px;
    background-image: url(${blueNet});
  }
  background-image: url(${(props) => props.src});
  background-size: 12px 12px;
  width: 12px;
  height: 12px;
  cursor: pointer;
`;
const BookMarkIcon = styled.div`
  @media (max-width: 735px) {
    background-size: 20px 24px;
    width: 20px;
    height: 24px;
  }
  background-image: url(${(props) => props.src});
  background-size: 10px 12px;
  width: 10px;
  height: 12px;
  cursor: pointer;
`;

const NavText = styled.span`
  @media (max-width: 735px) {
    display: none;
  }
  margin-left: 6px;
  color: #999;
  font-size: 12px;
  cursor: pointer;
  font-weight: 600;
`;

const FirstNavText = styled.span`
  @media (max-width: 735px) {
    display: none;
  }
  margin-left: 6px;
  color: ${(props) => props.theme.blackColor};
  font-size: 12px;
  cursor: pointer;
  font-weight: 600;
`;
const ExtendFollowButton = styled.div`
  cursor: pointer;
  padding: 0;
  height: 28px;
  color: #fff;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  outline: 0;
  width: 87px;
  margin-left: 16px;
`;

const More = styled.div`
  background-image: url(${more});
  background-size: cover;
  width: 16px;
  height: 16px;
  margin-left: 15px;
  cursor: pointer;
`;

const EmptyPost = styled.div`
  width: 100%;
  height: 223;
  display: flex;
  justify-content: center;
`;
const EmptyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;
const EmptyPhoto = styled.div`
  width: 62px;
  height: 62px;
  background-image: url(${photograph});
  background-size: cover;
`;
const EmptyText = styled.div`
  margin-top: 32px;
  font-size: 28px;
  color: #262626;
  font-weight: 300;
  line-height: 32px;
`;
export default ({
  loading,
  data,
  logOut,
  fullPost,
  setFullPost,
  setSetOverlay,
  SetOverlay
}) => {
  if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (!loading && data && data.seeUser) {
    const {
      seeUser: {
        avatar,
        username,
        lastName,
        isSelf,
        bio,
        followingCount,
        followersCount,
        postsCount,
        posts,
        isFollowing,
        userId
      }
    } = data;
    return (
      <>
        <Wrapper>
          <Helmet>
            <title>{username} • Instagram 사진 및 동영상</title>
          </Helmet>
          <Main>
            <Header>
              <AvartarHeader>
                <Avatar size="lg" url={avatar} />
              </AvartarHeader>
              <HeaderColumn>
                <UsernameRow>
                  <Username>{username}</Username>
                  {isSelf ? (
                    <>
                      <EditButton to="/editProfile">프로필 편집</EditButton>
                      <OptionButton
                        onClick={() => {
                          setSetOverlay("On");
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <ExtendFollowButton>
                        <FollowButton isFollowing={isFollowing} id={userId}>
                          팔로우
                        </FollowButton>
                      </ExtendFollowButton>
                      <More />
                    </>
                  )}
                </UsernameRow>
                <Counts>
                  <Count>
                    게시물&nbsp;
                    <FatText text={postsCount} />
                  </Count>
                  <Count>
                    팔로워&nbsp;
                    <FatText text={followersCount} />
                  </Count>
                  <Count>
                    팔로우&nbsp;
                    <FatText text={followingCount} />
                  </Count>
                </Counts>
                <FullName text={lastName} />
                <Bio>{bio}</Bio>
                <ExtendEditButton to="/editProfile">
                  프로필 편집
                </ExtendEditButton>
              </HeaderColumn>
            </Header>
            <SmallName>{lastName}</SmallName>
            <SmallBio>{bio}</SmallBio>
            <SmallCounts>
              <SmallCount>
                <SmallCountText>게시물</SmallCountText>
                <SmallCountNum>{postsCount}</SmallCountNum>
              </SmallCount>
              <SmallCount>
                <SmallCountText>팔로워</SmallCountText>
                <SmallCountNum>{followersCount}</SmallCountNum>
              </SmallCount>
              <SmallCount>
                <SmallCountText>팔로우</SmallCountText>
                <SmallCountNum>{followingCount}</SmallCountNum>
              </SmallCount>
            </SmallCounts>
            <Navbar>
              <NavItem>
                <NetIcon src={net} />
                <FirstNavText>게시물</FirstNavText>
              </NavItem>
              <NavItem>
                <NavIcon src={television} />
                <NavText>IGTV</NavText>
              </NavItem>
              <NavItem>
                <BookMarkIcon src={Bookmark} />
                <NavText>저장됨</NavText>
              </NavItem>
              <NavItem>
                <NavIcon src={tagged} />
                <NavText>태그됨</NavText>
              </NavItem>
            </Navbar>
            {postsCount === 0 ? (
              <EmptyPost>
                <EmptyInfo>
                  <EmptyPhoto />
                  <EmptyText>게시물 없음</EmptyText>
                </EmptyInfo>
              </EmptyPost>
            ) : (
              <Posts>
                {posts && (
                  <ProfilePost
                    posts={posts}
                    fullPost={fullPost}
                    setFullPost={setFullPost}
                  />
                )}
              </Posts>
            )}
          </Main>
          {fullPost && (
            <FullPost fullPost={fullPost} setFullPost={setFullPost} />
          )}
          {SetOverlay === "On" && (
            <SettingOverlay
              logOut={logOut}
              SetOverlay={SetOverlay}
              setSetOverlay={setSetOverlay}
            />
          )}
        </Wrapper>
      </>
    );
  }
  return null;
};
