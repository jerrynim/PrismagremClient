import React from "react";
import styled from "styled-components";
import SquarePost from "../../Components/SquarePost";

const PostsLine = styled.div`
  @media (max-width: 735px) {
    margin-bottom: 3px;
  }
  @media (min-width: 735px) {
    margin-bottom: 28px;
  }
  display: flex;
  width: 100%;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
  @media (min-width: 736px) {
    margin-right: 28px;
    &:last-child {
      margin-right: 0px;
    }
  }
`;

const Container2 = styled.div`
  display: block;
  width: 100%;
`;
const Container3 = styled.div`
  display: block;
  overflow: hidden;
  padding-bottom: 100%;
`;

const ProfilePost = ({ posts, fullPost, setFullPost }) => {
  //배열을 3개씩 나눠서
  const last = posts.length % 3;
  if (last === 0) {
    let ThreePosts = [];
    for (let i = 0; i < posts.length; i += 3) {
      let newThreePosts = [];
      newThreePosts.push(posts[i]);
      newThreePosts.push(posts[i + 1]);
      newThreePosts.push(posts[i + 2]);
      ThreePosts.push(newThreePosts);
    }
    //expect: [[[post[0],post[1],post[2]]]
    return (
      <>
        {ThreePosts.map((threePost, index) => (
          <PostsLine key={index}>
            {threePost.map((post, index) => (
              <SquarePost
                key={index}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                file={post.files[0]}
                post={post}
                setFullPost={setFullPost}
              />
            ))}
          </PostsLine>
        ))}
      </>
    );
  } else if (last === 1) {
    let ThreePosts = [];
    for (let i = 0; i < posts.length - last; i += 3) {
      let newThreePosts = [];
      newThreePosts.push(posts[i]);
      newThreePosts.push(posts[i + 1]);
      newThreePosts.push(posts[i + 2]);
      ThreePosts.push(newThreePosts);
    }
    return (
      <>
        {ThreePosts.map((threePost, index) => (
          <PostsLine key={index}>
            {threePost.map((post) => (
              <SquarePost
                key={post.id}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                file={post.files[0]}
                post={post}
                setFullPost={setFullPost}
              />
            ))}
          </PostsLine>
        ))}
        <PostsLine>
          <SquarePost
            key={posts[posts.length - 1].id}
            likeCount={posts[posts.length - 1].likeCount}
            commentCount={posts[posts.length - 1].commentCount}
            file={posts[posts.length - 1].files[0]}
            post={posts[posts.length - 1]}
            setFullPost={setFullPost}
          />
          <Container>
            <Container2>
              <Container3 />
            </Container2>
          </Container>
          <Container>
            <Container2>
              <Container3 />
            </Container2>
          </Container>
        </PostsLine>
      </>
    );
  } else if (last === 2) {
    let ThreePosts = [];
    for (let i = 0; i < posts.length - last; i += 3) {
      let newThreePosts = [];
      newThreePosts.push(posts[i]);
      newThreePosts.push(posts[i + 1]);
      newThreePosts.push(posts[i + 2]);
      ThreePosts.push(newThreePosts);
    }
    return (
      <>
        {ThreePosts.map((threePost, index) => (
          <PostsLine key={index}>
            {threePost.map((post) => (
              <SquarePost
                key={post.id}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                file={post.files[0]}
                post={post}
                setFullPost={setFullPost}
              />
            ))}
          </PostsLine>
        ))}
        <PostsLine>
          <SquarePost
            key={posts[posts.length - 1].id}
            likeCount={posts[posts.length - 1].likeCount}
            commentCount={posts[posts.length - 1].commentCount}
            file={posts[posts.length - 1].files[0]}
            post={posts[posts.length - 1]}
            setFullPost={setFullPost}
          />
          <SquarePost
            key={posts[posts.length - 2].id}
            likeCount={posts[posts.length - 2].likeCount}
            commentCount={posts[posts.length - 2].commentCount}
            file={posts[posts.length - 2].files[0]}
            post={posts[posts.length - 2]}
            setFullPost={setFullPost}
          />
          <Container>
            <Container2>
              <Container3 />
            </Container2>
          </Container>
        </PostsLine>
      </>
    );
  }
};
export default ProfilePost;
