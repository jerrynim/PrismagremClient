import React, { useState, useEffect, useRef } from "react";
import { useQuery } from "react-apollo-hooks";
import { SEARCH_USER } from "./Post/PostQueries";
import styled from "styled-components";
import InputTrigger from "react-input-trigger";
import FatText from "./FatText";

const Textarea = styled.textarea`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
  max-height: 80px;
  outline: 0;
  height: 18px;
`;
const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

const TextSubmit = styled.button`
  border: 0;
  color: #3897f0;
  outline: none;
  font-weight: 600;
  cursor: pointer;
  width: 45px;
  font-weight: 600;
  font-size: 14px;
  :disabled {
    cursor: none;
    pointer-events: none;
    color: #cae3fc;
  }
  background-color: #fff;
`;
const Popup = styled.div`
  position: absolute;
  min-width: 270px;
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);
  top: ${(props) => props.top + 35}px;
  left: ${(props) => props.left}px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  z-index: 1;
`;
const PopupAvatar = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${(props) => props.src});
  border-radius: 50%;
  background-size: cover;
  margin: 10px;
`;
const PopupInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const InputTriggerS = styled(InputTrigger)`
  width: 100%;
  outline: 0;
`;

const UserBox = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.index === props.currentSelection ? "#fafafa" : "white"};
  border-bottom: ${(props) => props.theme.boxBorder};
  :last-child() {
    border-bottom: 0;
  }
  cursor: pointer;
  :hover {
    background-color: #fafafa;
  }
`;

export default ({ newComment, commentSubmit }) => {
  //react-input-trigger toggle
  const [showSuggestor, setShowSuggestor] = useState(false);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [text, setText] = useState();
  const [currentSelection, setCurrentSelection] = useState(0);
  const [startPosition, setStartPosition] = useState();
  const [searchData, setSearchData] = useState({ searchUser: [] });
  const { data } = useQuery(SEARCH_USER, {
    skip: text === undefined,
    variables: { term: text }
  });

  //text변경시에만 render되도록 useEffect
  useEffect(() => {
    if (data) {
      setSearchData(data);
    }
  }, [data]);
  const { searchUser } = searchData;

  const toggleSuggestor = (metaInformation) => {
    const { hookType, cursor } = metaInformation;
    if (hookType === "start") {
      setShowSuggestor(true);
      setLeft(cursor.left);
      setTop(cursor.top);
      setStartPosition(cursor.selectionStart);
    }
    if (hookType === "cancel") {
      // reset the state
      setShowSuggestor(false);
      setLeft();
      setTop();
      setText();
      setStartPosition();
    }
  };

  const endRef = useRef();

  const handleInput = (metaInformation) => {
    //텍스트를 가지고 state변경 변경된 state로 useQuery를 시도해보자
    setText(metaInformation.text);
  };

  const handleKeyDown = (event) => {
    const { which } = event;

    if (showSuggestor) {
      if (which === 38) {
        event.preventDefault();
        if (searchUser) {
          setCurrentSelection(
            (currentSelection + searchUser.length - 1) % searchUser.length
          );
        }
      }

      if (which === 40) {
        // 40 is the character code of the down arrow
        event.preventDefault();
        if (searchUser) {
          setCurrentSelection((currentSelection + 1) % searchUser.length);
        }
      }

      if (which === 13) {
        event.preventDefault();
        // 13 is the character code for enter

        const userS = searchUser[currentSelection];
        const newText = `${newComment.value.slice(0, startPosition)}${
          userS.username
        }`;
        // reset the state and set new text
        newComment.setValue(newText);
        setShowSuggestor(false);
        setLeft();
        setTop();
        setText();
        setStartPosition();
        setSearchData({ searchUser: [] });
        if (endRef.current) {
          endRef.current.resetState();
        }
      }
    } else {
      if (which === 13) {
        event.preventDefault();
      }
    }
  };

  const popupClick = (e) => {
    e.preventDefault();
    // 13 is the character code for enter

    const userS = searchUser[currentSelection];
    const newText = `${newComment.value.slice(0, startPosition)}${
      userS.username
    }`;
    // reset the state and set new text
    newComment.setValue(newText);
    setShowSuggestor(false);
    setLeft();
    setTop();
    setText();
    setStartPosition();
    setSearchData({ searchUser: [] });
    if (endRef.current) {
      endRef.current.resetState();
    }
  };

  return (
    <TextBox onKeyDown={handleKeyDown}>
      <InputTriggerS
        width="100%"
        ref={endRef}
        trigger={{
          keyCode: 50,
          shiftKey: true
        }}
        onStart={(metaData) => {
          toggleSuggestor(metaData);
        }}
        onCancel={(metaData) => {
          toggleSuggestor(metaData);
        }}
        onType={(metaData) => {
          handleInput(metaData);
        }}
      >
        <Textarea
          spellCheck="false"
          rows="auto"
          placeholder={"댓글 달기..."}
          value={newComment.value}
          onChange={newComment.onChange}
        />
      </InputTriggerS>
      {showSuggestor && (
        <Popup onClick={popupClick} left={left} top={top}>
          {searchUser &&
            searchUser.map((user, index) => (
              <UserBox
                key={index}
                index={index}
                currentSelection={currentSelection}
                onMouseEnter={() => setCurrentSelection(index)}
              >
                <PopupAvatar src={user.avatar} />
                <PopupInfo>
                  <FatText text={user.username} />
                  <span>{user.lastName}</span>
                </PopupInfo>
              </UserBox>
            ))}
        </Popup>
      )}

      {newComment.value === "" ? (
        <TextSubmit disabled>게시</TextSubmit>
      ) : (
        <TextSubmit onClick={commentSubmit}>게시</TextSubmit>
      )}
    </TextBox>
  );
};
