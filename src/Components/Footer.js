import React from "react";
import styled from "styled-components";
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  padding: 10px 20px 0px;
  @media (max-width: 876px) {
    flex-direction: column;
    margin: 0 auto;
    max-width: 360px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListItem = styled.li`
  height: 30px;
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const Link = styled.a`
  color: ${(props) => props.theme.darkBlueColor};
`;

const Copyright = styled.span`
  color: ${(props) => props.theme.darkGreyColor};
  @media (max-width: 900px) {
    margin: 0;
  }
`;

export default () => (
  <Footer>
    <List>
      <ListItem>
        <Link href="#">INSTAGRAM 정보</Link>
      </ListItem>
      <ListItem>
        <Link href="#">지원</Link>
      </ListItem>
      <ListItem>
        <Link href="#">홍보센터</Link>
      </ListItem>
      <ListItem>
        <Link href="#">API</Link>
      </ListItem>
      <ListItem>
        <Link href="#">채용 정보</Link>
      </ListItem>
      <ListItem>
        <Link href="#">개인정보처리방침</Link>
      </ListItem>
      <ListItem>
        <Link href="#">약관</Link>
      </ListItem>
      <ListItem>
        <Link href="#">디렉터리</Link>
      </ListItem>
      <ListItem>
        <Link href="#">프로필</Link>
      </ListItem>
      <ListItem>
        <Link href="#">해시태그</Link>
      </ListItem>
      <ListItem>
        <Link href="#">언어</Link>
      </ListItem>
    </List>
    <Copyright>@{new Date().getFullYear()} INSTAGRAM&copy;</Copyright>
  </Footer>
);
