import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import useInput from "../Hooks/useInput";
import { Compass, HeartEmpty, User, Logo } from "./Icons";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../SharedQueries";
import searchIcon from "./Images/searchIcon.png";
import Xicon from "./Images/Xicon.png";
import heartCircle from "./Images/heartCircle.png";
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
  text-align: center;
`;

const SearchColumn = styled(HeaderColumn)`
  @media (max-width: 512px) {
    display: none;
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
const HeaderButton = styled.button`
  position: relative;
  margin-right: 30px;
  outline: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
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
  margin: 7px 0px 0px 88px;
  width: 14px;
  height: 14px;
  background-size: cover;
  border: 0;
  background-image: url(${Xicon});
  outline: none;
`;

const HeartPop = styled.div`
  position: absolute;
  top: 40px;
  margin-left: -423px;
  background: #fff;
  border: solid 1px #e6e6e6;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.0975);
  width: 500px;
  cursor: auto;
`;
const HeartPopItems = styled.div`
  display: flex;
  min-height: 240px;
  padding: 0 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const HeartPopTriangle = styled.div`
  position: absolute;
  border-color: transparent transparent #fff;
  border-style: solid;
  border-width: 0 10px 10px;
  height: 0;
  margin-top: 5px;
  width: 0;
  z-index: 12;
  margin-left: 2px;
`;
const HeartPopTriangleShadow = styled.div`
  background: #fff;
  border: 1px solid #e6e6e6;
  -webkit-box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
  height: 14px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  width: 14px;
  margin-left: 5px;
  margin-top: 5px;
  position: absolute;
`;
const HeartCircle = styled.div`
  width: 62px;
  height: 62px;
  background-image: url(${heartCircle});
  background-size: cover;
`;
const HeartPopText = styled.h2`
  margin-top: 16px;
  font-size: 14px;
`;
export default withRouter(({ history }) => {
  const search = useInput("");
  const [searchFocused, setFocus] = useState("Off");
  const { data } = useQuery(ME);
  const [heartPop, setHeartPop] = useState(null);
  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  const HeartPopRef = useRef();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (!HeartPopRef.current.contains(e.target)) {
        //바깥쪽을 클릭하면
        setHeartPop(null);
      } else {
        //안쪽을 클릭하면
        return true;
      }
    } catch (e) {}
  };
  useEffect(() => {
    if (heartPop !== null) {
      document.addEventListener("click", handleClick);
    }
    return function() {
      document.removeEventListener("click", handleClick);
    };
  }, [heartPop]);
  //searchInput focus 시
  const focusAction = (e) => {
    e.stopPropagation();

    setFocus("On");
  };
  //searchInputseachBlur시
  const blurAction = () => {
    setFocus("Off");
  };
  //검색어 리셋
  const clearSearch = () => {
    search.setValue("");
  };

  //헤더 축소를 위한 scorll값
  //헤더 사이즈 축소를 위한 scorll값 구하기
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );
  // eslint-disable-next-line no-unused-vars
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
  });

  return (
    <Header scrollDirection={scrollDirection}>
      <HeaderWrapper>
        <HeaderColumn>
          <LogoLink to="/" replace={true}>
            <Logo />
            <Bar scrollDirection={scrollDirection} />
            <LogoText scrollDirection={scrollDirection} />
          </LogoLink>
        </HeaderColumn>
        <SearchColumn>
          {<SearchXIcon onClick={clearSearch} />}
          {search.value === "" ? (
            <SearchForm onSubmit={onSearchSubmit}>
              <SearchLabel>
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
          <HeaderButton
            onClick={() => {
              setHeartPop("On");
            }}
          >
            <HeartEmpty />
            {heartPop && (
              <>
                <HeartPopTriangleShadow />
                <HeartPopTriangle />
                <HeartPop ref={HeartPopRef}>
                  <HeartPopItems>
                    <HeartCircle />
                    <HeartPopText>게시물 활동</HeartPopText>
                    <HeartPopText>
                      아직 알림이 만들어지지 않았습니다.
                    </HeartPopText>
                  </HeartPopItems>
                </HeartPop>
              </>
            )}
          </HeaderButton>
          {!data.me ? (
            <HeaderLink to="/#">
              <User />
            </HeaderLink>
          ) : (
            <HeaderLink to={`/${data.me.username}`}>
              <User />
            </HeaderLink>
          )}
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});
