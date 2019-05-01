import React from "react";
import styled, { keyframes } from "styled-components";
import { Logo } from "./Icons";

const Animation = keyframes`
    0%{
        opacity:0
    }
    50%{
        opacity:1
    }
    100%{
        opacity:0;
    }
`;

const Loader = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 80vh;
  animation: ${Animation} 1s linear infinite;
`;

export default () => (
  <Loader>
    <Logo size={36} />
  </Loader>
);
