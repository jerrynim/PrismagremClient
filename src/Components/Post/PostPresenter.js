import React from "react";
import styled from "styled-components";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartFull2, HeartEmpty } from "../Icons";
import { Link } from "react-router-dom";
import more from "../Images/more.png";
import CommentItem from "../Images/Comment.png";
import Files from "../../Components/Files";
import moment from "moment";
import CommentInput from "../CommentInput";
import TextArea from "../TextArea";

const Post = styled.div`
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  width: 100%;
  max-width: 614px;
  user-select: none;
  margin-bottom: 60px;
  a {
    color: inherit;
  }
  background-color: #fff;
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
  background-color: white;
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
  @media (max-width: 735px) {
    border: 0;
    padding-bottom: 0px;
    margin: 10px 0px 4px;
  }
  padding-bottom: 10px;
  border-bottom: ${(props) => props.theme.lightGreyColor} 1px solid;
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
          text={likeCount === 1 ? "좋아요 1개" : `좋아요 ${likeCount}개`}
        />
        <Caption>
          <FatText text={username} />
          <TextArea text={caption} />
        </Caption>
        {comments && (
          <Comments>
            {comments.map((comment) => (
              <Comment key={comment.id}>
                <FatText text={comment.user.username} />
                <TextArea text={comment.text} />
              </Comment>
            ))}
            {selfComments.map((comment) => (
              <Comment key={comment.id}>
                <FatText text={comment.user.username} />
                <TextArea text={comment.text} />
              </Comment>
            ))}
          </Comments>
        )}
        <Timestamp>{date}</Timestamp>
        <CommentInput newComment={newComment} commentSubmit={commentSubmit} />
      </Meta>
    </Post>
  );
};
