import React, { useEffect, createRef, useState } from "react";
import styled from "styled-components";
import { HeartEmpty, HeartFull2 } from "./Icons";
import TextareaAutosize from "react-autosize-textarea";
import CommentImg from "./Images/Comment.png";
import { useMutation } from "react-apollo-hooks";
import { ADD_COMMENT } from "./Post/PostQueries";
import useInput from "../Hooks/useInput";
const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  min-height: 100%;
  width: 100%;
  @media (min-width: 481px) {
    padding: 0 40px;
  }
  pointer-events: auto;
`;

const PostWrapper = styled.div`
  width: 100%;
  max-width: 935px;
  align-items: center;
  margin: auto;
  background-color: white;
`;
const Post = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;
const ImageWapper = styled.div`
  background-color: #000;
  position: relative;
  display: flex;
  width: 100%;
  padding-right: 335px;
  min-height: 450px;
  align-items: center;
`;
const Image = styled.div`
  width: 100%;
  display: block;
  overflow: hidden;
`;
const Image2 = styled.div`
  padding-bottom: 100%;
  background-image: url(${(props) => props.img});
  background-size: cover;
`;
const Article = styled.div`
  right: 0;
  position: absolute;
  width: 335px;
  height: 100%;
  background-color: #fff;
`;

const Writer = styled.div`
  border-left: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  height: 72px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
`;
const WriteAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const WriterAvatar = styled.div`
  width: 34px;
  height: 34px;
  cursor: pointer;
  border-radius: 50%;
  background-size: cover;
  background-image: url(${(props) => props.bg});
`;

const WriterText = styled.div`
  display: flex;
  justify-content: space-between;
  text-overflow: ellipsis;
  font-weight: 600;
`;
const Comments = styled.div`
  overflow: scroll;
  height: -webkit-calc(100%-222px);
  max-height: 372px;
  /*스크롤바 가리기*/
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Comment = styled.div`
  display: flex;
  padding: 8px 8px 16px 16px;
`;
const CommentText = styled.div`
  padding-top: 5px;
  margin-left: 18px;
  max-width: 254px;
  color: ${(props) => props.theme.darkColor};
  font-weight: 600;
`;

const TimeStamp = styled.div`
  margin-top: 16px;
  margin-bottom: 4px;
  color: #999999;
  font-size: 12px;
`;
const ArticleFooter = styled.div`
  background-color: #fff;
  height: 156px;
  width: 100%;
  bottom: 0;
  position: absolute;
`;
const Icons = styled.div`
  border-top: 1px solid #efefef;
  padding: 4px 16px 0px;
  display: flex;
  align-items: center;
`;
const IconButton = styled.div`
  outline: none;
  border: 0;
  width: 24px;
  margin: 8px 0px;
  margin-right: 16px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LikeComment = styled.div`
  width: 100%;
  padding: 0px 16px;
  margin-bottom: 4px;
  display: flex;
`;

const LikeAvartarButton = styled.button`
  padding: 0;
  outline: none;
  border: 0;
  width: 24px;
  height: 24px;
  margin-right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const LikeAvatar = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-image: url(${(props) => props.bg});
  background-size: contain;
`;
const LikeText = styled.div`
  color: #000000;
  display: flex;
  align-items: center;
`;

const LikeTimeStamp = styled.span`
  color: #999;
  padding-left: 16px;
  font-size: 10px;
  letter-spacing: 0.2px;
`;
const AddCommentBox = styled.div`
  margin-top: 8px;
  padding: 0px 16px;
  border-top: 1px solid #efefef;
  color: #999;
  height: 62px;
`;
const AddComment = styled.form`
  display: flex;
  align-items: center;
  height: 100%;
`;
const AddCommentInput = styled(TextareaAutosize)`
  border: 0;
  color: #262626;
  max-height: 56px;
  outline: 0;
  font-size: 14px;
  width: 100%;
  resize: none;
  ::placeholder {
    color: #999;
  }
`;
const CommentIcon = styled.button`
  background-image: url(${CommentImg});
  background-size: cover;
  width: 24px;
  height: 24px;
  border: 0;
  outline: 0;
  cursor: pointer;
`;
const AddCommentButton = styled.button`
  border: 0;
  font-size: 14px;
  color: #3897f0;
  padding: 0;
  outline: 0;
  font-weight: 600;
  width: 27px;
  cursor: pointer;

  :disabled {
    cursor: none;
    pointer-events: none;
    color: #cae3fc;
  }
`;

const HeartButton = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
`;

const WriterLocation = styled.div`
  font-size: 12px;
  color: #262626;
`;

const WriterInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;
export default (fullPost, setFullPost) => {
  //추가할 댓글을 client에 띄어주기위해
  const [selfComments, setSelfComments] = useState([]);
  //mutation을 위해
  const text = useInput("");
  const addCommentMutation = useMutation(ADD_COMMENT, {
    variables: {
      postId: fullPost.fullPost.id,
      text: text.value
    }
  });

  //엔터누를실
  const onKeyPress = async (event) => {
    const { which } = event;
    if (which === 13) {
      event.preventDefault();
      try {
        const {
          data: { addComment }
        } = await addCommentMutation();
        setSelfComments([...selfComments, addComment]);

        text.setValue("");
      } catch (e) {
        return false;
      }
    }
  };

  const commentSubmit = async () => {
    try {
      const {
        data: { addComment }
      } = await addCommentMutation();
      setSelfComments([...selfComments, addComment]);
      text.setValue("");
    } catch (e) {
      return false;
    }
  };

  //포스트의 Ref
  const postRef = React.createRef();
  const handleClick = (e) => {
    if (!postRef.current.contains(e.target)) {
      //바깥쪽을 클릭하면
      fullPost.setFullPost("");
    } else {
      //안쪽을 클릭하면
      return true;
    }
  };

  //클릭시 사라지게 하기위한 리스너
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return function() {
      document.removeEventListener("click", handleClick);
    };
  });

  const InputRef = createRef();
  //댓글아이콘 클릭시 input에 focus
  const InputFoucs = () => {
    InputRef.current.focus();
  };

  const {
    fullPost: {
      caption,
      comments,
      files,
      isLiked,
      likes,
      likeCount,
      location,
      user,
      createdAt
    }
  } = fullPost;

  return (
    <Container>
      <Wrapper>
        <PostWrapper>
          <Post ref={postRef}>
            <ImageWapper>
              <Image>
                <Image2 img={files[0].url} />
              </Image>
            </ImageWapper>
            <Article>
              <Writer>
                <WriterAvatar bg={user.avatar} />
                <WriterInfo>
                  <WriterText>{user.username}</WriterText>
                  <WriterLocation>{location}</WriterLocation>
                </WriterInfo>
              </Writer>
              <Comments>
                <Comment>
                  <WriteAvatarWrapper>
                    <WriterAvatar bg={user.avatar} />
                  </WriteAvatarWrapper>
                  <CommentText>
                    {caption}
                    <TimeStamp>{createdAt}</TimeStamp>
                  </CommentText>
                </Comment>
                {comments.map((comment) => (
                  <Comment key={comment.id}>
                    <WriteAvatarWrapper>
                      <WriterAvatar bg={comment.user.avatar} />
                    </WriteAvatarWrapper>
                    <CommentText>
                      {comment.text}
                      <TimeStamp>{comment.createdAt}</TimeStamp>
                    </CommentText>
                  </Comment>
                ))}
                {selfComments.map((selfComment) => (
                  <Comment key={selfComment.id}>
                    <WriteAvatarWrapper>
                      <WriterAvatar bg={selfComment.user.avatar} />
                    </WriteAvatarWrapper>
                    <CommentText>
                      {selfComment.text}
                      <TimeStamp>{selfComment.createdAt}</TimeStamp>
                    </CommentText>
                  </Comment>
                ))}
              </Comments>
              <ArticleFooter>
                <Icons>
                  <IconButton>
                    {isLiked ? (
                      <HeartButton>
                        <HeartFull2 />
                      </HeartButton>
                    ) : (
                      <HeartButton>
                        <HeartEmpty />
                      </HeartButton>
                    )}
                  </IconButton>

                  <IconButton onClick={InputFoucs}>
                    <CommentIcon />
                  </IconButton>
                </Icons>
                <LikeComment>
                  {likes[0] !== undefined && (
                    <>
                      <LikeAvartarButton>
                        <LikeAvatar bg={likes[0].user.avatar} />
                      </LikeAvartarButton>
                      <LikeText>
                        <b>{likes[0].user.username}</b>님 <b>{likeCount}</b>이
                        좋아합니다
                      </LikeText>
                    </>
                  )}
                </LikeComment>
                <LikeTimeStamp>{createdAt}</LikeTimeStamp>

                <AddCommentBox>
                  <AddComment>
                    <AddCommentInput
                      ref={InputRef}
                      onKeyPress={onKeyPress}
                      value={text.value}
                      onChange={text.onChange}
                      placeholder={"댓글 달기..."}
                    />
                    <AddCommentButton onClick={commentSubmit}>
                      게시
                    </AddCommentButton>
                  </AddComment>
                </AddCommentBox>
              </ArticleFooter>
            </Article>
          </Post>
        </PostWrapper>
      </Wrapper>
    </Container>
  );
};
