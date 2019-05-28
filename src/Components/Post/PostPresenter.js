import React, { useState } from "react";
import styled from "styled-components";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartFull2, HeartEmpty } from "../Icons";
import { Link } from "react-router-dom";
import more from "../Images/more.png";
import CommentItem from "../Images/Comment.png";
import Files from "../../Components/Files";
import moment from "moment";
import InputTrigger from "react-input-trigger";

const Post = styled.div`
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 614px;
  user-select: none;
  margin-bottom: 60px;
  a {
    color: inherit;
  }
`;

const Caption = styled.div`
  margin: 10px 0px;
`;

const Header = styled.header`
  padding: 13px 16px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  width: 100%;
  margin-left: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserText = styled.div`
  display: flex;
  flex-direction: column;
`;
const MoreButton = styled.button`
  width: 15px;
  height: 15px;
  border: 0px;
  outline: none;
  background-image: url(${more});
  background-size: cover;
  cursor: pointer;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Meta = styled.div`
  position: relative;
  padding: 0px 16px 16px;
  @media (max-width: 1000px) {
    padding: 16px;
  }
`;

const Buttons = styled.div`
  display: flex;
  ${Button} {
    &:first-child {
      margin-right: 16px;
    }
  }
  margin-bottom: 10px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  @media (max-width: 735px) {
    border: 0;
    padding-bottom: 0px;
    margin: 10px 0px 4px;
  }
  padding-bottom: 10px;
  border-bottom: ${(props) => props.theme.lightGreyColor} 1px solid;
`;

const Textarea = styled.textarea`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const Comments = styled.ul`
  margin-top: 10px;
`;

const Comment = styled.li`
  margin-bottom: 7px;
  span {
    margin-right: 5px;
  }
`;

const CommentIcon = styled.div`
  background-size: cover;
  background-image: url(${CommentItem});
  width: 24px;
  height: 24px;
`;

const TextBox = styled.div`
  @media (max-width: 735px) {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const TextSubmit = styled.button`
  border: 0;
  color: #3897f0;
  outline: none;
  font-weight: 600;
  cursor: pointer;
  width: 40px;
  font-weight: 600;
  font-size: 14px;
  :disabled {
    cursor: none;
    pointer-events: none;
    color: #cae3fc;
  }
`;
const Popup = styled.div`
  position: absolute;
  width: 200px;
  border-radius: 6px;
  display: ${(props) => (props.showSuggestor ? "block" : "none")};
  top: ${(props) => props.top + 15}px;
  left: ${(props) => props.left}px;
`;

const UserBox = styled.div`
  padding: 10px 20px;
  background-color: ${(props) =>
    props.index === props.currentSelection ? "#999" : "white"};
`;

export default ({
  user: { username, avatar },
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  toggleLike,
  onKeyPress,
  comments,
  selfComments,
  caption,
  commentSubmit
}) => {
  //react-input-trigger toggle
  const [showSuggestor, setShowSuggestor] = useState(false);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [text, setText] = useState();
  const [currentSelection, setCurrentSelection] = useState(0);
  const [startPosition, setStartPosition] = useState();
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

  const user = ["Charmander", "Squirtle", "Bulbasaur", "Pikachu"];

  const handleInput = (metaInformation) => {
    setText(metaInformation.text);
  };

  const handleKeyDown = (event) => {
    const { which } = event;

    if (which === 40) {
      // 40 is the character code of the down arrow
      event.preventDefault();
      setCurrentSelection((currentSelection + 1) % user.length);
    }

    if (which === 13) {
      // 13 is the character code for enter
      event.preventDefault();

      const userS = user[currentSelection];

      const newText = `${newComment.value.slice(0, startPosition)}${userS}`;
      // reset the state and set new text
      newComment.setValue(newText);
      setShowSuggestor(false);
      setLeft();
      setTop();
      setText();
      setStartPosition();
      console.log(metaInformation);
    }
  };

  const date = moment(createdAt)
    .startOf("day")
    .fromNow();
  return (
    <Post>
      <Header>
        <Avatar size="sm" url={avatar} />
        <UserColumn>
          <UserText>
            <Link to={`/${username}`}>
              <FatText text={username} />
            </Link>
            <Location>{location}</Location>
          </UserText>
          <MoreButton />
        </UserColumn>
      </Header>
      <Files files={files} />
      <Meta>
        <Buttons>
          <Button onClick={toggleLike}>
            {isLiked ? <HeartFull2 /> : <HeartEmpty />}
          </Button>
          <Button>
            <CommentIcon />
          </Button>
        </Buttons>
        <FatText
          text={likeCount === 1 ? "좋아요 1개" : `좋아요${likeCount}개`}
        />
        <Caption>
          <FatText text={username} /> {caption}
        </Caption>
        {comments && (
          <Comments>
            {comments.map((comment) => (
              <Comment key={comment.id}>
                <FatText text={comment.user.username} />
                {comment.text}
              </Comment>
            ))}
            {selfComments.map((comment) => (
              <Comment key={comment.id}>
                <FatText text={comment.user.username} />
                {comment.text}
              </Comment>
            ))}
          </Comments>
        )}
        <Timestamp>{date}</Timestamp>
        <TextBox onKeyDown={handleKeyDown}>
          <InputTrigger
            endTrigger={(endHandler) => {}}
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
              placeholder={"댓글 달기..."}
              value={newComment.value}
              onChange={newComment.onChange}
            />
          </InputTrigger>
          <Popup showSuggestor={showSuggestor} left={left} top={top}>
            {user
              .filter((user) => user.indexOf(text) !== -1)
              .map((user, index) => (
                <UserBox
                  key={index}
                  index={index}
                  currentSelection={currentSelection}
                >
                  {user}
                </UserBox>
              ))}
          </Popup>

          {newComment.value === "" ? (
            <TextSubmit disabled>게시</TextSubmit>
          ) : (
            <TextSubmit onClick={commentSubmit}>게시</TextSubmit>
          )}
        </TextBox>
      </Meta>
    </Post>
  );
};
