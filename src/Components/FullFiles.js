import React from "react";
import styled, { keyframes } from "styled-components";
import arrowTransparent from "../Components/Images/arrowTransparent.png";
import arrowTransparent2 from "../Components/Images/arrowTransparent2.png";
import whiteHeart from "../Components/Images/whiteHeart.png";
import { Player, LoadingSpinner, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css";

const Container = styled.div`
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  display: flex;
  background-image: url(${(props) => props.src});
  background-size: cover;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const File = styled.div`
  display: block;
  padding-bottom: 100%;
  overflow: hidden;
`;
const ShowingLeftButton = styled.button`
  @media (max-width: 736px) {
    top: 35%;
  }
  justify-self: center;
  margin: 16px 8px;
  position: absolute;
  top: 45%;
  left: 0;
  z-index: 5;
  background-size: cover;
  background-image: url(${arrowTransparent2});
  background-color: transparent;
  border: 0;
  width: 30px;
  height: 30px;
  outline: none;
  cursor: pointer;
`;

const ShowingRightButton = styled.button`
  @media (max-width: 736px) {
    top: 35%;
  }
  justify-self: center;
  margin: 16px 8px;
  position: absolute;
  top: 45%;
  z-index: 5;
  background-size: cover;
  background-image: url(${arrowTransparent});
  background-color: transparent;
  border: 0;
  width: 30px;
  height: 30px;
  outline: none;
  cursor: pointer;
  right: 0;
`;

const Animation = keyframes`
    0%{
        height:0;
        width:0;
    }
    25%{
      height:100px;
        width:100px;
    }
    75%{
      height:100px;
        width:100px;
        opacity:1;
    }
    100%{
      height:0;
        width:0;
        opacity:0;

    }
`;

const Heart = styled.div`
  animation: 1s ${Animation} ease-in;

  background-image: url(${whiteHeart});
  background-size: cover;
`;
const FullFiles = ({ files, showing, setShowing, heartPop }) => {
  const length = files.length;
  const addShowing = (e) => {
    e.preventDefault();
    setShowing(showing + 1);
  };
  const subShowing = (e) => {
    e.preventDefault();
    setShowing(showing - 1);
  };
  return (
    <Container src={files[showing].url}>
      {heartPop === "Pop" && <Heart />}

      {showing !== 0 && <ShowingLeftButton onClick={subShowing} />}
      {showing !== length - 1 && <ShowingRightButton onClick={addShowing} />}
      {files &&
        files.map((file, index) => {
          if (file.url.slice(-3) === "mp4") {
            return (
              <Player key={index} fluid={true} aspectRatio={"1:1"}>
                <BigPlayButton position="center" />
                <LoadingSpinner />
                <source src={file.url} />
              </Player>
            );
          } else {
            return <File key={file.id} src={file.url} />;
          }
        })}
    </Container>
  );
};

export default FullFiles;
