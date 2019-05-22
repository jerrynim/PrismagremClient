import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const fadeIn = keyframes`
  0% {
   opacity: 0.4;
  }
  100% {
    opacity: 1; 
  }
`;
const Box = styled.div`
  animation: 0.4s ${fadeIn} ease-out;
  background-color: #fff;
  border-radius: 12px;
  width: 260px;
  margin: 20px;
  @media (min-width: 736px) {
    width: 400px;
  }
`;

const Lists = styled.ul`
  display: flex;
  flex-direction: column;
`;
const List = styled.button`
  &:first-child {
    border-top: none;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  outline: 0;
  color: inherit;
  background-color: transparent;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  border-top: 1px solid #efefef;
  cursor: pointer;
  line-height: 1.5;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  min-height: 48px;
  padding: 4px 8px;
  text-align: center;
`;
export default ({ SetOverlay, setSetOverlay }) => {
  //Box Ref
  const boxRef = React.createRef();
  const handleClick = (e) => {
    try {
      if (!boxRef.current.contains(e.target)) {
        //바깥쪽을 클릭하면
        setSetOverlay("");
      } else {
        //안쪽을 클릭하면
        return true;
      }
    } catch (e) {
      throw Error();
    }
  };

  //클릭시 사라지게 하기위한 리스너
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return function() {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <Container>
      <Box ref={boxRef}>
        <Lists>
          <List>비밀번호 변경</List>
          <List>네임태그</List>
          <List>허가된 앱</List>
          <List>알림</List>
          <List>공개범위 및 보안</List>
          <List>로그아웃 취소</List>
          <List
            onClick={() => {
              setSetOverlay("");
            }}
          >
            취소
          </List>
        </Lists>
      </Box>
    </Container>
  );
};
