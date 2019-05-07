import React from "react";
import styled from "styled-components";
import SquarePost from "../../Components/SquarePost";

const PostsLine = styled.div`
  margin-bottom: 28px;
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;
const Container = styled.div`
  width: 100%;
  cursor: pointer;

  margin-right: 28px;

  &:last-child {
    margin-right: 0px;
  }
`;

const Container2 = styled.div`
  display: block;
  width: 100%;
  padding-bottom: 100%;
`;
const makePosts = ({ posts }) => {
  //배열을 3개씩 나눠서
  const one = posts.splice(0, 3);
  const two = posts.splice(0, 3);

  return (
    <>
      <PostsLine>
        {one.map((post) => (
          <SquarePost
            key={post.id}
            likeCount={post.likeCount}
            commentCount={post.commentCount}
            file={post.files[0]}
          />
        ))}
      </PostsLine>
      <PostsLine>
        {two.map((post) => (
          <SquarePost
            key={post.id}
            likeCount={post.likeCount}
            commentCount={post.commentCount}
            file={post.files[0]}
          />
        ))}
        <Container>
          <Container2 />
        </Container>
        <Container>
          <Container2 />
        </Container>
      </PostsLine>
    </>
  );
};
export default makePosts;
