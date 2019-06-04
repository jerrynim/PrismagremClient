import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Span = styled.span``;

const ColorSapn = styled.span`
  color: #003569;
`;
export default ({ text }) => {
  //text를 공백 단위로 나눠서 @||#가있다면 링크를 넣는 component
  return (
    <Span>
      {text.split(" ").map((word, index) => {
        if (word.includes("@")) {
          return (
            <Link key={index} to={`/${word.replace("@", "")}`}>
              <ColorSapn>{word}&nbsp;</ColorSapn>
            </Link>
          );
        } else if (word.includes("#")) {
          return (
            <Link key={index} to={`/tags/${word.replace("#", "")}`}>
              <ColorSapn>{word}&nbsp;</ColorSapn>
            </Link>
          );
        } else {
          return `${word} `;
        }
      })}
    </Span>
  );
};
