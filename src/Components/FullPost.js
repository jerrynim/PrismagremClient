import React, { useEffect, createRef, useState } from "react";
import styled from "styled-components";
import { HeartEmpty, HeartFull2 } from "./Icons";
import TextareaAutosize from "react-autosize-textarea";
import CommentImg from "./Images/Comment.png";
import { useMutation } from "react-apollo-hooks";
import { ADD_COMMENT } from "./Post/PostQueries";
import useInput from "../Hooks/useInput";
import FullFiles from "./FullFiles";
import XIcon from "./Images/X.png";
import { TOGGLE_LIKE } from "./Post/PostQueries";
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
const ColseButton = styled.button`
  position: absolute;
  margin: 15px 10px;

  top: 0;
  right: 0;
  border: 0;
  outline: 0;
  background-size: 18px 18px;
  background-image: url(${XIcon});
  background-color: transparent;
  width: 18px;
  height: 18px;
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
  @media (max-width: 736px) {
    width: 100%;
    margin: auto;
    display: flex;
    background-color: #fff;
    justify-content: center;
  }
  position: relative;
  width: 100%;
  display: flex;
`;

const ImageWapper = styled.div`
  @media (max-width: 736px) {
    display: none;
  }
  background-color: #000;
  position: relative;
  display: flex;
  width: 100%;
  padding-right: 335px;
  min-height: 450px;
  align-items: center;
  left: 0;
  top: 0;
`;
const Image = styled.div`
  position: relative;
  width: 100%;
  display: block;
  overflow: hidden;
`;

const Article = styled.div`
  @media (max-width: 736px) {
    display: none;
  }
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
  @media (max-width: 736px) {
    padding: 0;
  }
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
  background-color: white;
`;
const LikeComment = styled.div`
  @media (max-width: 736px) {
    padding: 0;
  }
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
  background-color: white;
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
  @media (max-width: 736px) {
    display: ${(props) => (props.hiding === "" ? "none" : "")};
    margin-top: 4px;
    padding: 0;
    height: 48px;
  }
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
  background-color: white;
`;
const AddCommentButton = styled.button`
  border: 0;
  font-size: 14px;
  color: #3897f0;
  padding: 0;
  outline: 0;
  font-weight: 600;
  min-width: 25px;
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
  background-color: white;
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

const SmallAriticle = styled.article`
  @media (min-width: 736px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
`;
const SmallWriter = styled.div`
  height: 60px;
  padding: 16px;
  display: flex;
  align-items: center;
`;
const SmallAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
`;
const SmallUsername = styled.div`
  margin-left: 12px;
  font-size: 14px;
  color: #262626;
`;
const SmallArticleFooter = styled.div`
  padding: 0px 16px;
`;
const SmallImage = styled.div`
  width: 100%;
  display: block;
  overflow: hidden;
`;

export default ({ fullPost, setFullPost }) => {
  //추가할 댓글을 client에 띄어주기위해
  const [selfComments, setSelfComments] = useState([]);
  const [showing, setShowing] = useState(0);
  //mutation을 위해
  const text = useInput("");
  const addCommentMutation = useMutation(ADD_COMMENT, {
    variables: {
      postId: fullPost.id,
      text: text.value
    }
  });

  //Heart toggle을 위해
  const [isLikedS, setIsLiked] = useState(fullPost.isLiked);
  const [likeCountS, setLikeCount] = useState(fullPost.likeCount);
  //toggle Heart Mutation
  const toggleLikeMutation = useMutation(TOGGLE_LIKE, {
    variables: { postId: fullPost.id }
  });

  //toggleHeart 기능
  const toggleLike = (e) => {
    e.preventDefault();
    toggleLikeMutation();
    if (isLikedS === true) {
      setIsLiked(false);
      setLikeCount(likeCountS - 1);
    } else {
      setIsLiked(true);
      setLikeCount(likeCountS + 1);
    }
  };

  //Small addComment의 나오는 기능을 위해
  const [hiding, setHiding] = useState("");

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
  //게시 버튼으로 CommentAdd
  const commentSubmit = async (e) => {
    e.preventDefault();
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
  const handleClick = async (e) => {
    try {
      if (!postRef.current.contains(e.target)) {
        //바깥쪽을 클릭하면
        setFullPost("");
      } else {
        //안쪽을 클릭하면
        return true;
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  //클릭시 사라지게 하기위한 리스너
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return function() {
      document.removeEventListener("click", handleClick);
    };
  });
  //comment Input 의 Ref
  const InputRef = createRef();
  //댓글아이콘 클릭시 input에 focus
  const InputFoucs = () => {
    InputRef.current.focus();
  };

  const {
    caption,
    comments,
    files,
    likes,
    likeCount,
    location,
    user,
    createdAt
  } = fullPost;

  return (
    <Container>
      <ColseButton />
      <Wrapper>
        <PostWrapper>
          <Post ref={postRef}>
            <ImageWapper>
              <Image onDoubleClick={toggleLike}>
                <FullFiles
                  files={files}
                  showing={showing}
                  setShowing={setShowing}
                />
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
                    {isLikedS ? (
                      <HeartButton onClick={toggleLike}>
                        <HeartFull2 />
                      </HeartButton>
                    ) : (
                      <HeartButton onClick={toggleLike}>
                        <HeartEmpty />
                      </HeartButton>
                    )}
                  </IconButton>
                  <IconButton onClick={InputFoucs}>
                    <CommentIcon />
                  </IconButton>
                </Icons>
                <LikeComment>
                  {likeCountS !== 0 && (
                    <>
                      <LikeAvartarButton>
                        <LikeAvatar bg={likes[0].user.avatar} />
                      </LikeAvartarButton>
                      <LikeText>
                        <b>{likes[0].user.username}</b>님 외<b>{likeCount}</b>
                        명이 좋아합니다
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
            <SmallAriticle>
              <SmallWriter>
                <SmallAvatar bg={user.avatar} />
                <SmallUsername>{user.username}</SmallUsername>
              </SmallWriter>
              <SmallImage onDoubleClick={toggleLike}>
                <FullFiles
                  files={files}
                  showing={showing}
                  setShowing={setShowing}
                />
              </SmallImage>
              <SmallArticleFooter>
                <Icons>
                  <IconButton>
                    {isLikedS ? (
                      <HeartButton onClick={toggleLike}>
                        <HeartFull2 />
                      </HeartButton>
                    ) : (
                      <HeartButton onClick={toggleLike}>
                        <HeartEmpty />
                      </HeartButton>
                    )}
                  </IconButton>

                  <IconButton
                    onClick={() => {
                      setHiding("show");
                    }}
                  >
                    <CommentIcon />
                  </IconButton>
                </Icons>
                <LikeComment>
                  {likeCountS !== 0 && (
                    <>
                      <LikeAvartarButton>
                        <LikeAvatar bg={likes[0].user.avatar} />
                      </LikeAvartarButton>
                      <LikeText>
                        <b>{likes[0].user.username}</b>님 외<b>{likeCount}</b>
                        명이 좋아합니다
                      </LikeText>
                    </>
                  )}
                </LikeComment>
                <LikeTimeStamp>{createdAt}</LikeTimeStamp>
                <AddCommentBox hiding={hiding}>
                  <AddComment>
                    <AddCommentInput
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
              </SmallArticleFooter>
            </SmallAriticle>
          </Post>
        </PostWrapper>
      </Wrapper>
    </Container>
  );
};
