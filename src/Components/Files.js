import React, { useState } from "react";
import styled from "styled-components";
import arrowTransparent from "../Components/Images/arrowTransparent.png";
import arrowTransparent2 from "../Components/Images/arrowTransparent2.png";

const Container = styled.div`
  position: relative;
  display: flex;
  position: relative;
  overflow-x: visible;
  overflow: hidden;
`;

const Container2 = styled.ul`
  position: relative;
  display: flex;
  width: 100%;
  transform: translateX(${(props) => props.showing * -100}%);
  transition: 0.25s;
`;
const File = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.src});
  flex-shrink: 0;
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
    <Container>
      {showing !== 0 && <ShowingLeftButton onClick={subShowing} />}
      {showing !== files.length - 1 && (
        <ShowingRightButton onClick={addShowing} />
      )}
      <Container2 showing={showing}>
        {files &&
          files.map((file, index) => <File key={file.id} src={file.url} />)}
      </Container2>
    </Container>
  );
};

export default Files;
