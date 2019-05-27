import React, { useState } from "react";
import styled from "styled-components";
import arrowTransparent from "../Components/Images/arrowTransparent.png";
import arrowTransparent2 from "../Components/Images/arrowTransparent2.png";

const Container = styled.div`
  position: relative;
  height: 600px;
  padding-bottom: 100%;
  display: flex;
  overflow: hidden;
`;

const File = styled.div`
  max-width: 100%;
  min-width: 100%;
  height: 600px;
  top: 0;
  background-size: cover;
  background-image: url(${(props) => props.src});
  transform: translateX(${(props) => props.showing * -612}px);
  transition: 0.2s;
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

const Files = ({ files }) => {
  const [showing, setShowing] = useState(0);
  const addShowing = () => {
    setShowing(showing + 1);
  };
  const subShowing = () => {
    setShowing(showing - 1);
  };
  return (
    <Container showing={showing}>
      {showing !== 0 && <ShowingLeftButton onClick={subShowing} />}
      {showing !== files.length - 1 && (
        <ShowingRightButton onClick={addShowing} />
      )}
      {files &&
        files.map((file, index) => (
          <File key={file.id} src={file.url} showing={showing} />
        ))}
    </Container>
  );
};

export default Files;
