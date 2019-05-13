import React from "react";
import styled from "styled-components";
import arrowTransparent from "../Components/Images/arrowTransparent.png";
import arrowTransparent2 from "../Components/Images/arrowTransparent2.png";

const Container = styled.div`
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  display: flex;
  background-image: url(${(props) => props.src});
  background-size: cover;
  transition: translateX() 0.2s;
`;

const File = styled.div`
  display: block;
  padding-bottom: 100%;
  overflow: hidden;
`;
const ShowingLeftButton = styled.button`
  justify-self: center;
  margin: 16px 8px;
  position: absolute;
  top: 45%;
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

const FullFiles = ({ files, showing, setShowing }) => {
  const length = files.length;
  const addShowing = () => {
    setShowing(showing + 1);
  };
  const subShowing = () => {
    setShowing(showing - 1);
  };
  return (
    <Container src={files[showing].url}>
      {showing !== 0 && <ShowingLeftButton onClick={subShowing} />}
      {showing !== length - 1 && <ShowingRightButton onClick={addShowing} />}
      {files &&
        files.map((file, index) => (
          <File key={index} src={file.url} showing={showing} />
        ))}
    </Container>
  );
};

export default FullFiles;
