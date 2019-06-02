import React, { useState } from "react";
import { gql } from "apollo-boost";
import { withRouter } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo-hooks";
import ProfilePresenter from "./ProfilePresenter";
import Footer from "../../Components/Footer";

const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      userId
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
        postId
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
          user {
            avatar
            username
          }
        }
        comments {
          text
          user {
            avatar
            username
          }
          createdAt
        }
        createdAt
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
    fetchPolicy: "network-only",
    errorPolicy: "ignore",
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
    </>
  );
});
