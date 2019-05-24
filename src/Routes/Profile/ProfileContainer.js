import React, { useState } from "react";
import { gql } from "apollo-boost";
import { withRouter } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo-hooks";
import ProfilePresenter from "./ProfilePresenter";
import styled from "styled-components";
import Footer from "../../Components/Footer";
const Message = styled.div`
  text-align: center;
  margin-top: 100px;
`;
const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      avatar
      username
      lastName
      isFollowing
      isSelf
      bio
      followingCount
      followersCount
      postsCount
      posts {
        id
        location
        caption
        user {
          avatar
          username
          isFollowing
          isSelf
        }
        files {
          url
        }
        likes {
          id
          user {
            avatar
            username
          }
        }
        comments {
          id
          text
          user {
            avatar
            username
          }
          createdAt
        }
        isLiked
        likeCount
        commentCount
      }
    }
  }
`;

export const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;

export default withRouter(({ match: { params: { username } } }) => {
  const { data, loading } = useQuery(GET_USER, {
    variables: { username }
  });

  const logOut = useMutation(LOG_OUT);
  const [fullPost, setFullPost] = useState("");
  const [SetOverlay, setSetOverlay] = useState("");

  return (
    <>
      {data && (
        <ProfilePresenter
          loading={loading}
          logOut={logOut}
          data={data}
          fullPost={fullPost}
          setFullPost={setFullPost}
          SetOverlay={SetOverlay}
          setSetOverlay={setSetOverlay}
        />
      )}
      <Footer />
      <Message>만약 뜨지 않는다면 새로고침을 해주세요</Message>
    </>
  );
});
