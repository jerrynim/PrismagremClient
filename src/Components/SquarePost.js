import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Overlay 포기 ^^

const Container = styled.div`
  width: 100%;
  cursor: pointer;

  margin-right: 28px;

  &:last-child {
    margin-right: 0px;
  }
`;

const Container2 = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  display: block;
  width: 100%;
  padding-bottom: 100%;
`;

const SquarePost = ({ likeCount, commentCount, file }) => (
  <Container>
    <Container2 bg={file.url} />
  </Container>
);

SquarePost.propTypes = {
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  file: PropTypes.object.isRequired
};

export default SquarePost;
