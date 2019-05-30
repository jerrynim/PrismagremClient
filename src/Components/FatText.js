import React from "react";
import styled from "styled-components";

const Text = styled.span`
  color: ${(props) => props.theme.blackColor};
  font-weight: 600;
`;

const FatText = ({ text, className }) => {
  return <Text className={className}>{text}</Text>;
};

export default FatText;
