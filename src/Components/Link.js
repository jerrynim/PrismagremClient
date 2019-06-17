import useReactRouter from "use-react-router";
import React from "react";
import styled from "styled-components";

const Span = styled.span`
  color: #003569;
  cursor: pointer;
`;
export default ({ word, setFullPost }) => {
  const { history } = useReactRouter();
  const onClick = (e) => {
    e.preventDefault();
    history.push(`/${word.replace("@", "")}`);
    setFullPost("");
  };
  const HashonClick = (e) => {
    e.preventDefault();
    history.push(`/tags/${word.replace("#", "")}`);
    setFullPost("");
  };
  if (word.includes("@")) {
    return <Span onClick={onClick}>{word}&nbsp;</Span>;
  } else if (word.includes("#")) {
    return <Span onClick={HashonClick}>{word}&nbsp;</Span>;
  }
};
