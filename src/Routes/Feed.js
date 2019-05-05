import React from "react";
import { Helmet } from "rl-react-helmet";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import Post from "../Components/Post";
import Story from "../Components/Story";

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

export default () => {
  const { data, loading } = useQuery(FEED_QUERY);
  const {
    data: { me, loading: meLoading }
  } = useQuery(GET_ME);
  return (
    <div>
      {loading && meLoading && <Loader />}
      <Wrapper>
        <Helmet>
          <title>Feed | Prismagram</title>
        </Helmet>
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
