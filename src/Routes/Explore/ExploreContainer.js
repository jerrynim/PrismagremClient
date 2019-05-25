import React, { useState } from "react";
import ExplorePresenter from "./ExplorePresenter";
import { useQuery } from "react-apollo-hooks";
import { GET_USERS, GET_POSTS } from "../../SharedQueries";

export default () => {
  const { data: userData, loading: userLoading } = useQuery(GET_USERS);
  const { data: postData, loading: postLoading } = useQuery(GET_POSTS);
  const [fullPost, setFullPost] = useState("");
  return (
    <>
      {!userLoading && !postLoading && (
        <ExplorePresenter
          userData={userData}
          postData={postData}
          fullPost={fullPost}
          setFullPost={setFullPost}
        />
      )}
    </>
  );
};
