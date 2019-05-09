import React from "react";
import { Helmet } from "rl-react-helmet";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import Post from "../Components/Post";
import Story from "../Components/Story";
import StoryCircleImg from "../Components/Images/storyCircle2.png";
const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          username
        }
      }
      createdAt
    }
  }
`;
const GET_ME = gql`
  {
    me {
      id
      avatar
      username
      fullName
    }
  }
`;

const Wrapper = styled.div`
  @media (max-width: 1000px) {
    flex-direction: column;
    flex-grow: 1;
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }
  padding-top: 133px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 80vh;
  max-width: 935px;
`;

const Posts = styled.div`
  margin-right: 28px;
  max-width: 614px;
  width: 100%;

  justify-content: center;
`;
const TopStorys = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  margin-bottom: 24px;
  margin-top: -36px;
  padding: 10px 0;
  overflow-y: hidden;
`;
const StoryBar = styled.div`
  height: 82px;
  overflow-y: hidden;
`;
const StoryBarIn = styled.div`
  overflow: auto hidden;
  padding-left: 8px;
  padding-right: 8px;
  height: 120px;
  display: flex;
`;
const TopStory = styled.div`
  height: 122px;
  padding: 0 4px;
  min-width: 80px;
  &:nth-child(odd) {
  }
  display: flex;
  justify-content: center;
`;
const StoryLink = styled.button`
  position: relative;
  background-color: transparent;
  outline: 0;
  border: 0;
  display: flex;
  justify-content: center;
  width: 64px;
`;
const StoryCircle = styled.div`
  position: absolute;
  top: 2px;
  width: 65px;
  height: 65px;
  background-size: cover;
  background-image: url(${StoryCircleImg});
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StroyAvatar = styled.div`
  padding-left: 3px;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  background-color: red;
`;
const StoryText = styled.span`
  top: 68px;
  color: #262626;
  display: block;
  font-size: 12px;
  line-height: 14px;
  max-width: 64px;
  overflow: hidden;
  padding-top: -50px;
  position: absolute;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default () => {
  const { data, loading } = useQuery(FEED_QUERY);
  const {
    data: { me, loading: meLoading }
  } = useQuery(GET_ME);
  const a = [];
  for (let i = 0; i < 20; i++) {
    a.push(i);
  }
  return (
    <div>
      {loading && <Loader />}
      <Wrapper>
        <Helmet>
          <title>Feed | Prismagram</title>
        </Helmet>
        {!loading && (
          <TopStorys>
            <StoryBar>
              <StoryBarIn>
                {a.map((a, index) => (
                  <TopStory key={a}>
                    <StoryLink>
                      <StoryCircle>
                        <StroyAvatar />
                      </StoryCircle>
                      <StoryText>wefqw3rasd</StoryText>
                    </StoryLink>
                  </TopStory>
                ))}
                <TopStory />
              </StoryBarIn>
            </StoryBar>
          </TopStorys>
        )}

        <Posts>
          {!loading &&
            data &&
            data.seeFeed &&
            data.seeFeed.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                location={post.location}
                caption={post.caption}
                user={post.user}
                files={post.files}
                likeCount={post.likeCount}
                isLiked={post.isLiked}
                comments={post.comments}
                createdAt={post.createdAt}
              />
            ))}
        </Posts>
        {!meLoading && me && me.avatar && me.username && me.fullName && (
          <Story me={me} />
        )}
      </Wrapper>
    </div>
  );
};
