import React, { useState } from "react";
import { gql } from "apollo-boost";
import { withRouter } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo-hooks";
import ProfilePresenter from "./ProfilePresenter";

const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      avatar
      username
      fullName
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
  const { data, loading } = useQuery(GET_USER, { variables: { username } });
  const logOut = useMutation(LOG_OUT);
  const [fullPost, setFullPost] = useState("");
  return (
    <ProfilePresenter
      loading={loading}
      logOut={logOut}
      data={data}
      fullPost={fullPost}
      setFullPost={setFullPost}
    />
  );
});
