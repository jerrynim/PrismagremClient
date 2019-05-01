import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import useInput from "../Hooks/useInput";
import { Compass, HeartEmpty, User, Logo } from "./Icons";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../SharedQueries";
import searchIcon from "./Images/searchIcon.png";
import Xicon from "./Images/Xicon.png";

/*
  미구현: x버트은으로 검색창 비우기
 */

const Header = styled.header`
  position: fixed;
  width: 100%;
  border: 0;
  top: 0;
  left: 0;
  background-color: white;
  border-bottom: ${(props) => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding: 26px 20px;
  height: ${(props) => (props.scrollDirection === "up" ? "52px" : "77px")};
  vertical-align: baseline;
  transition: height 0.2s;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const SearchColumn = styled(HeaderColumn)`
  @media (max-width: 512px) {
    visibility: hidden;
  }
`;

const SearchInput = styled.input`
  background-color: ${(props) => props.theme.bgColor};
  border: solid 1px #dbdbdb;
  padding: 3px 10px 3px 26px;
  font-size: 14px;
  font-weight: 200;
  border-radius: 3px;
  width: 215px;
  height: 28px;
  color: #999999;
  &::placeholder {
    color: #999999;
    opacity: 0.8;
    font-weight: 200;
    text-align: center;
  }
  :focus {
    background-color: white;
    &::placeholder {
      text-align: left;
    }
  }
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const Bar = styled.div`
  width: 1px;
  height: 28px;
  margin: 0 16px;
  background-color: #262626;
  opacity: ${(props) => (props.scrollDirection === "up" ? 0 : 1)};
  transition: opacity 0.2s;
`;

const LogoLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
`;

const LogoText = styled.div`
  width: 103px;
  height: 36px;
  opacity: ${(props) => (props.scrollDirection === "up" ? 0 : 1)};
  transition: opacity 0.2s;
  background-size: cover;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2000px-Instagram_logo.svg.png");
`;

const SearchLabel = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  pointer-events: none;
  color: #999999;
  font-weight: 200;
`;
const SearchIcon = styled.div`
  width: 10px;
  height: 10px;
  margin: ${(props) =>
    props.searchFocused === "Off" ? "2px 6px 0px 0px" : "2px 180px 0px 0px"};
  background-size: cover;
  background-image: url(${searchIcon});
`;

const SearchIcon2 = styled.div`
  width: 10px;
  height: 10px;
  margin: ${(props) =>
    props.searchFocused === "Off" ? "2px 40px 0px 0px;" : "2px 180px 0px 0px"};
  background-size: cover;
  background-image: url(${searchIcon});
`;
const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchXIcon = styled.button`
  position: absolute;
  margin: 0px 0px 12px 95px;
  width: 14px;
  height: 14px;
  background-size: cover;
  border: 0;
  background-image: url(${Xicon});
`;

export default withRouter(({ history }) => {
  const search = useInput("");
  const [searchFocused, setFocus] = useState("Off");
  const { data } = useQuery(ME);
  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  //searchInput focus 시
  const focusAction = (e) => {
    setFocus("On");
  };
  //searchInputseachBlur시
  const blurAction = () => {
    setFocus("Off");
  };

  //헤더 축소를 위한 scorll값
  //헤더 사이즈 축소를 위한 scorll값 구하기
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollDirection, setScrollDirection] = useState();
  const handleScroll = () => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <Header scrollDirection={scrollDirection}>
      <HeaderWrapper>
        <HeaderColumn>
          <LogoLink to="/">
            <Logo />
            <Bar scrollDirection={scrollDirection} />
            <LogoText scrollDirection={scrollDirection} />
          </LogoLink>
        </HeaderColumn>
        <SearchColumn>
          {search.value === "" ? (
            <SearchForm onSubmit={onSearchSubmit}>
              <SearchLabel>
                {searchFocused === "On" && <SearchXIcon />}
                <SearchIcon2 searchFocused={searchFocused} />
              </SearchLabel>
              <SearchInput
                placeholder={"검색"}
                value={search.value}
                onChange={search.onChange}
                onFocus={focusAction}
                onBlur={blurAction}
                spellCheck="false"
              />
            </SearchForm>
          ) : (
            <SearchForm onSubmit={onSearchSubmit}>
              <SearchLabel>
                {searchFocused === "On" && <SearchXIcon />}
                <SearchIcon searchFocused={searchFocused} />
                {searchFocused === "Off" && <span>{search.value}</span>}
              </SearchLabel>
              <SearchInput
                value={searchFocused === "Off" ? "" : search.value}
                onChange={search.onChange}
                onFocus={focusAction}
                onBlur={blurAction}
                spellCheck="false"
              />
            </SearchForm>
          )}
        </SearchColumn>
        <HeaderColumn>
          <HeaderLink to="/explore">
            <Compass />
          </HeaderLink>
          <HeaderLink to="/notifications">
            <HeartEmpty />
          </HeaderLink>
          {!data.me ? (
            <HeaderLink to="/#">
              <User />
            </HeaderLink>
          ) : (
            <HeaderLink to={data.me.username}>
              <User />
            </HeaderLink>
          )}
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});
