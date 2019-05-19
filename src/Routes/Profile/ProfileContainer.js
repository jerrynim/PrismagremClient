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
  console.log(username);
  const { data } = useQuery(GET_USER, {
    variables: { username }
  });

  const logOut = useMutation(LOG_OUT);
  const [fullPost, setFullPost] = useState("");
  const [SetOverlay, setSetOverlay] = useState("");

  console.log(data);

  return (
    <>
      {data && (
        <ProfilePresenter
          logOut={logOut}
          data={data}
          fullPost={fullPost}
          setFullPost={setFullPost}
          SetOverlay={SetOverlay}
          setSetOverlay={setSetOverlay}
        />
      )}
    </>
  );
});
