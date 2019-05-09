import React from "react";
import styled from "styled-components";

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
    pointer-events: none;
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
  overflow: hidden;
  overflow-y: scroll;
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
          </Article>
        </Post>
      </PostWrapper>
    </Wrapper>
  </Container>
);
