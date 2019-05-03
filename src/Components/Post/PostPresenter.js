import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartFull, HeartEmpty } from "../Icons";
import { Link } from "react-router-dom";
import more from "../Images/more.png";
import CommentItem from "../Images/Comment.png";
const Post = styled.div`
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 614px;
  user-select: none;
  margin-bottom: 25px;
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

const Files = styled.div`
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
  background-image: url(${(props) => props.src}});
  background-size: cover;
  background-position: center;
  transform: translateX(${(props) => props.currentItem * 612}px) 0.2s;
  ${(props) => console.log(props)};
`;

const Button = styled.span`
  cursor: pointer;
`;

const Meta = styled.div`
  padding: 16px;
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
  padding-bottom: 10px;
  border-bottom: ${(props) => props.theme.lightGreyColor} 1px solid;
`;

const Textarea = styled(TextareaAutosize)`
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
  display: flex;
  justify-content: space-between;
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
`;

export default ({
  user: { username, avatar },
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  currentItem,
  toggleLike,
  onKeyPress,
  comments,
  selfComments,
  caption
}) => (
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
    <Files>
      {files &&
        files.map((file, index) => (
          <File key={file.id} src={file.url} currentItem={currentItem} />
        ))}
    </Files>
    <Meta>
      <Buttons>
        <Button onClick={toggleLike}>
          {isLiked ? <HeartFull /> : <HeartEmpty />}
        </Button>
        <Button>
          <CommentIcon />
        </Button>
      </Buttons>
      <FatText text={likeCount === 1 ? "좋아요 1개" : `좋아요${likeCount}개`} />
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
      <Timestamp>{createdAt}</Timestamp>
      <TextBox>
        <Textarea
          onKeyPress={onKeyPress}
          placeholder={"댓글 달기..."}
          value={newComment.value}
          onChange={newComment.onChange}
        />
        <TextSubmit>게시</TextSubmit>
      </TextBox>
    </Meta>
  </Post>
);
