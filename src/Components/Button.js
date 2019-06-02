import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  width: 100%;
  border-radius: 3px;
  height: 28px;
  border: ${(props) =>
    props.isFollowing
      ? "1px solid #dbdbdb"
      : `1px solid ${props.theme.blueColor}`};

  font-weight: 600;
  background-color: ${(props) =>
    props.isFollowing ? "#FAFAFA" : props.theme.blueColor};

  color: ${(props) => (props.isFollowing ? "#262626" : "white")};
  text-align: center;
  font-size: 14px;
  outline: none;
`;

const Button = ({ text, onClick, isFollowing }) => (
  <Container isFollowing={isFollowing} onClick={onClick}>
    {text}
  </Container>
);
Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
