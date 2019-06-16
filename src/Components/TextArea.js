import React, { useReactRouter } from "react";
import styled from "styled-components";

const Span = styled.span``;

const ColorSapn = styled.span`
  color: #003569;
`;
const Link = styled.span``;
export default ({ text, callback }) => {
  //text를 공백 단위로 나눠서 @||#가있다면 링크를 넣는 component to={`/${word.replace("@", "")}`}
  return (
    <Span>
      {text.split(" ").map((word, index) => {
        if (word.includes("@")) {
          return (
            <Link key={index}>
              <ColorSapn>{word}&nbsp;</ColorSapn>
            </Link>
          );
        } else if (word.includes("#")) {
          return <ColorSapn>{word}&nbsp;</ColorSapn>;
        } else {
          return `${word} `;
        }
      })}
    </Span>
  );
};
