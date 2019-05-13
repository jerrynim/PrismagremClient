import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { HeartFull, CommentFull } from "./Icons";

const Overlay = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  flex-direction: column;
  align-items: center;
  opacity: 0;
`;

const Container = styled.button`
  display: block;
  position: relative;
  width: 100%;
  border: 0;
  padding: 0;
  outline: 0;
  cursor: pointer;
  @media (max-width: 735px) {
    margin-right: 3px;
  }
  @media (min-width: 735px) {
    margin-right: 28px;
    &:last-child {
      margin-right: 0px;
    }
  }
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
`;

const Container2 = styled.div`
  background-color: #efefef;
  display: block;
  width: 100%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
`;
const Container3 = styled.div`
  display: block;
  overflow: hidden;
  padding-bottom: 100%;
`;

const OverlayUl = styled.ul`
  align-items: center;
  color: #fff;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  height: 100%;
  justify-content: center;
  width: 100%;
  list-style: none;
`;
const Number = styled.div`
  color: white;
  display: flex;
  align-items: center;
  &:first-child {
    margin-right: 30px;
  }
`;

const NumberText = styled.span`
  margin-left: 7px;
`;

const SquarePost = ({ likeCount, commentCount, file, post, setFullPost }) => {
  return (
    <Container
      onClick={() => {
        setFullPost(post);
      }}
    >
      <Overlay>
        <OverlayUl>
          <Number>
            <HeartFull />
            <NumberText>{likeCount}</NumberText>
          </Number>
          <Number>
            <CommentFull />
            <NumberText>{commentCount}</NumberText>
          </Number>
        </OverlayUl>
      </Overlay>
      <Container2 bg={file.url}>
        <Container3 />
      </Container2>
    </Container>
  );
};

SquarePost.propTypes = {
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  file: PropTypes.object.isRequired
};

export default SquarePost;
