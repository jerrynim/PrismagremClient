import React from "react";
import styled from "styled-components";
import { Helmet } from "rl-react-helmet";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import FollowButton from "../../Components/FollowButton";
import options from "../../Components/Images/options.png";
import television from "../../Components/Images/television.png";
import tagged from "../../Components/Images/tagged.png";
import Bookmark from "../../Components/Images/Bookmark.png";
import net from "../../Components/Images/net.png";
import ProfilePost from "./ProfilePost";
const Wrapper = styled.div`
  min-height: 100vh;
`;

const Main = styled.div`
  width: calc(100% - 40px);
  margin: 77px auto 30px;
  padding: 60px 20px 0px;
  max-width: 935px;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 44px;
`;

const AvartarHeader = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;

const HeaderColumn = styled.div`
  flex: 2;
`;

const UsernameRow = styled.div`
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
  display: flex;
  margin-bottom: 20px;
`;

const Count = styled.li`
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const FullName = styled(FatText)`
  font-size: 16px;
`;

const Bio = styled.p`
  margin: 10px 0px;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0px;
  padding-top: 0px;
  flex-grow: 1;
`;

const EditButton = styled.button`
  background-color: transparent;
  border: 1px solid #dbdbdb;
  color: ${(props) => props.theme.darkColor};
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
  margin-right: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child {
    border-top: 1px solid black;
  }
`;

const Navbar = styled.div`
  border-top: 1px solid #efefef;
  display: flex;
  justify-content: center;
  height: 53px;
`;

const NavIcon = styled.div`
  background-image: url(${(props) => props.src});
  background-size: 12px 12px;
  width: 12px;
  height: 12px;
  cursor: pointer;
`;

const BookMarkIcon = styled.div`
  background-image: url(${(props) => props.src});
  background-size: 10px 12px;
  width: 10px;
  height: 12px;
  cursor: pointer;
`;

const NavText = styled.span`
  margin-left: 6px;
  color: #999;
  font-size: 12px;
  cursor: pointer;
  font-weight: 600;
`;

const FirstNavText = styled.span`
  margin-left: 6px;
  color: ${(props) => props.theme.darkColor};
  font-size: 12px;
  cursor: pointer;
  font-weight: 600;
`;

export default ({ loading, data, logOut }) => {
  if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (!loading && data && data.seeUser) {
    const {
      seeUser: {
        id,
        avatar,
        username,
        fullName,
        isFollowing,
        isSelf,
        bio,
        followingCount,
        followersCount,
        postsCount,
        posts
      }
    } = data;
    return (
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
                    <EditButton>프로필 편집</EditButton>
                    <OptionButton />
                  </>
                ) : (
                  <FollowButton isFollowing={isFollowing} id={id} />
                )}
              </UsernameRow>
              <Counts>
                <Count>
                  게시물&nbsp;
                  <FatText text={String(postsCount)} />
                </Count>
                <Count>
                  팔로워&nbsp;
                  <FatText text={String(followersCount)} />
                </Count>
                <Count>
                  팔로우&nbsp;
                  <FatText text={String(followingCount)} />
                </Count>
              </Counts>
              <FullName text={fullName} />
              <Bio>{bio}</Bio>
            </HeaderColumn>
          </Header>
          <Navbar>
            <NavItem>
              <NavIcon src={net} />
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
          <Posts>{posts && <ProfilePost posts={posts} />}</Posts>
        </Main>
      </Wrapper>
    );
  }
  return null;
};
