import React from "react";
import Link from "./Link";

export default ({ text, setFullPost }) => {
  //text를 공백 단위로 나눠서 @||#가있다면 링크를 넣는 component
  return (
    <span>
      {text.split(" ").map((word, index) => {
        if (word.includes("@") || word.includes("#")) {
          return <Link key={index} word={word} setFullPost={setFullPost} />;
        } else {
          return `${word} `;
        }
      })}
    </span>
  );
};
