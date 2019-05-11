import React from "react";
import styled from "styled-components";
import { HeartEmpty } from "./Icons";
import TextareaAutosize from "react-autosize-textarea";
import CommentImg from "./Images/Comment.png";
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
  background-color: red;
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
  background-color: red;
`;

const WriterText = styled.div`
  margin-left: 16px;
  display: flex;
  justify-content: space-between;
  text-overflow: ellipsis;
  font-weight: 600;
`;
const Comments = styled.div`
  overflow: scroll;
  height: 351px;
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
  background-color: red;
  background-size: contain;
`;
const LikeText = styled.div`
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
export default () => (
  <Container>
    <Wrapper>
      <PostWrapper>
        <Post>
          <ImageWapper>
            <Image>
              <Image2 />
            </Image>
          </ImageWapper>
          <Article>
            <Writer>
              <WriterAvatar />
              <WriterText>assd</WriterText>
            </Writer>
            <Comments>
              <Comment>
                <WriteAvatarWrapper>
                  <WriterAvatar />
                </WriteAvatarWrapper>
                <CommentText>
                  aksdjnf klasnjdfk lasndflk asdnfkl asdf kasdf asd fasd
                  <TimeStamp>97 주 </TimeStamp>
                </CommentText>
              </Comment>
              <Comment>
                <WriteAvatarWrapper>
                  <WriterAvatar />
                </WriteAvatarWrapper>
                <CommentText>
                  aksdjnf klasnjdfk lasndflk asdnfkl asdf kasdf asd fasd
                  <TimeStamp>97 주 </TimeStamp>
                </CommentText>
              </Comment>
              <Comment>
                <WriteAvatarWrapper>
                  <WriterAvatar />
                </WriteAvatarWrapper>
                <CommentText>
                  aksdjnf klasnjdfk lasndflk asdnfkl asdf kasdf asd fasd
                  <TimeStamp>97 주 </TimeStamp>
                </CommentText>
              </Comment>
              <Comment>
                <WriteAvatarWrapper>
                  <WriterAvatar />
                </WriteAvatarWrapper>
                <CommentText>
                  aksdjnf klasnjdfk lasndflk asdnfkl asdf kasdf asd fasd
                  <TimeStamp>97 주 </TimeStamp>
                </CommentText>
              </Comment>
              <Comment>
                <WriteAvatarWrapper>
                  <WriterAvatar />
                </WriteAvatarWrapper>
                <CommentText>
                  aksdjnf klasnjdfk lasndflk asdnfkl asdf kasdf asd fasd
                  <TimeStamp>97 주 </TimeStamp>
                </CommentText>
              </Comment>
              <Comment>
                <WriteAvatarWrapper>
                  <WriterAvatar />
                </WriteAvatarWrapper>
                <CommentText>
                  aksdjnf klasnjdfk lasndflk asdnfkl asdf kasdf asd fasd
                  <TimeStamp>97 주 </TimeStamp>
                </CommentText>
              </Comment>
            </Comments>
            <ArticleFooter>
              <Icons>
                <IconButton>
                  <HeartEmpty />
                </IconButton>

                <IconButton>
                  <CommentIcon />
                </IconButton>
              </Icons>
              <LikeComment>
                <LikeAvartarButton>
                  <LikeAvatar />
                </LikeAvartarButton>
                <LikeText>
                  <span>asdfasd</span>님 <span>111명</span>이 좋아합니다
                </LikeText>
              </LikeComment>
              <LikeTimeStamp>2019년 5월 11일</LikeTimeStamp>

              <AddCommentBox>
                <AddComment>
                  <AddCommentInput placeholder={"댓글 달기..."} />
                  <AddCommentButton>게시</AddCommentButton>
                </AddComment>
              </AddCommentBox>
            </ArticleFooter>
          </Article>
        </Post>
      </PostWrapper>
    </Wrapper>
  </Container>
);
