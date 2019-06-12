import React, { useRef, useState } from "react";
import styled from "styled-components";
import useInput from "../../Hooks/useInput";
import TextareaAutosize from "react-autosize-textarea";
import { useMutation } from "react-apollo-hooks";
import { EDIT_PROFILE, CHANGE_PASSWORD } from "./EditProfileQueries";
import { Helmet } from "rl-react-helmet";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
const Container = styled.div`
  margin-top: 77px;
  background-color: #fafafa;
`;
const Wrapper = styled.div`
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  margin: 133px auto 30px;
  max-width: 935px;
  overflow: hidden;
  width: 100%;
  display: flex;
  min-height: 600px;
  @media (max-width: 450px) {
    margin: 0;
  }
`;
const MenuBox = styled.ul`
  @media (max-width: 736px) {
    display: none;
  }
  border-right: 1px solid #dbdbdb;
  list-style: none;
  flex: 0 0 236px;
`;
const MenuList = styled.li`
  cursor: pointer;
`;
const Menu = styled.div`
  padding: 16px 16px 16px 30px;
  color: #262626;
  border: 2px solid transparent;
  display: block;
  font-size: 16px;
  height: 100%;
  line-height: 20px;
  width: calc(100% - 48px);
`;

const ContentBox = styled.article`
  min-width: 50px;
  display: flex;
  flex-direction: column;
  flex: 1 1 400px;
`;
const Profile = styled.div`
  margin: 32px 0 0;
  display: flex;
`;
const Avatar = styled.div`
  @media (max-width: 735px) {
    margin: 2px 20px 0;
  }
  @media (min-width: 736px) {
    margin: 2px 32px 0 124px;
  }
  height: 38px;
  width: 38px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  border-radius: 50%;
`;
const UsernameBox = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
`;
const Username = styled.h1`
  font-size: 20px;
  line-height: 22px;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ChangeAvatar = styled.button`
  border: 0;
  color: #3897f0;
  display: inline;
  padding: 0;
  font-size: 14px;
  line-height: 18px;
  outline: none;
  font-weight: 600;
  background-color: #fff;
`;
const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 16px;
`;
const Category = styled.div`
  @media (min-width: 736px) {
    flex-direction: row;
  }
  @media (max-width: 735px) {
    height: 63px;
    padding-left: 20px;
    margin-right: 20px;
  }
  flex-direction: column;
  margin-bottom: 16px;
  display: flex;
`;
const Label = styled.div`
  @media (min-width: 736px) {
    padding-right: 32px;
    text-align: right;
    flex: 0 0 194px;
  }
  @media (min-width: 736px) {
    padding-left: 32px;
  }
  margin-top: 6px;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  color: #262626;
`;
const InputWrapper = styled.input`
  @media (min-width: 736px) {
    margin-right: 60px;
  }
  display: flex;
  border: 1px solid #efefef;
  border-radius: 3px;
  font-size: 16px;
  height: 32px;
  flex: 0 1 355px;
  padding-left: 10px;
  max-width: 355px;
`;

const BioInputWrapper = styled(TextareaAutosize)`
  @media (min-width: 736px) {
    margin-right: 60px;
  }
  border: 1px solid #efefef;
  border-radius: 3px;
  font-size: 16px;
  height: 32px;
  flex: 0 1 355px;
  padding-left: 10px;
  height: 84px;
  resize: auto;
  padding: 6px 10px;
  outline: 0;
  max-width: 355px;
`;
const PrivateText = styled.span`
  margin-top: 8px;
  color: #999;
  font-size: 14px;
  font-weight: 600;
`;

const SelectDiv = styled.div`
  position: relative;
  flex: 0 1 150px;
  max-width: 150px;
`;
const SelectBox = styled.select`
  color: #999;
  background: 0 0;
  border: 1px solid #efefef;
  border-radius: 3px;
  font-size: 16px;
  height: 32px;
  padding: 0 30px 0 10px;
  -webkit-appearance: none;
  width: 100%;
`;
const SelectIcon = styled.span`
  transform: rotate(90deg);
  pointer-events: none;
  position: absolute;
  right: 12px;
  top: 12px;
  width: 12px;
  height: 12px;
`;

const SubmitButton = styled.button`
  margin-top: 16px;
  background-color: #3897f0;
  border: 1px solid #3897f0;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  outline: none;
  width: 45px;
`;
const SubmitPWButton = styled(SubmitButton)`
  width: 97px;
  :disabled {
    cursor: none;
    pointer-events: none;
    background-color: #cae3fc;
    border-color: #cae3fc;
    color: #fafafa;
  }
`;
const ActMenu = styled(Menu)`
  border-left: 2px solid #262626;
`;

const PwForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 32px;
`;
const PwInput = styled.input`
  padding: 4px 12px;
  margin-right: 60px;
  background: #fafafa;
  outline: 0 !important;
  flex-grow: 1;
  font-size: 14px;
  line-height: 30px;
  border-radius: 6px;
  border: 1px solid #efefef;
  color: #262626;
  :focus {
    border: 1px solid #b2b2b2;
  }
`;

const FindPw = styled(Link)`
  border: 0;
  color: #3897f0;
  display: inline;
  padding: 0;
  outline: 0;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
`;

const PhotoInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 18px;
  width: 105px;
  outline: none;
`;
const PhotoInput2 = styled.input`
  @media (max-width: 735px) {
    margin: 2px 20px 0;
  }
  @media (min-width: 736px) {
    margin: 2px 32px 0 124px;
  }
  height: 38px;
  width: 38px;
  opacity: 0;
  border-radius: 50%;
  position: absolute;
  outline: none;
`;

const EditProfilePresenter = ({ action, setAction, onKeyPress, user }) => {
  const username = useInput(user.username);
  const bio = useInput(user.bio);
  const email = useInput(user.email);
  const gender = useInput(user.gender);
  const lastName = useInput(user.lastName);
  const phoneNumber = useInput(user.phoneNumber);
  const [avatar, setAvatar] = useState(user.avatar);
  const editProfileMutation = useMutation(EDIT_PROFILE, {
    variables: {
      username: username.value,
      bio: bio.value,
      email: email.value,
      gender: gender.value,
      lastName: lastName.value,
      phoneNumber: phoneNumber.value
    }
  });
  //photoUpload를 상태 확인값
  //비밀번호 변경을 위해
  const currentPs = useInput("");
  const newPs = useInput("");
  const confirmNewPs = useInput("");

  const changePsMutation = useMutation(CHANGE_PASSWORD);

  //파일 input의 Ref
  const photoRef = useRef(null);
  const photoRef2 = useRef(null);
  const onChange = async (ref) => {
    const file = await ref.current.files[0];
    const sendRequset = () => {
      return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        //progress
        //너무빨라서 퍼센트 보기가 힘듬
        // req.upload.addEventListener("progress", (event) => {
        //   if (event.lengthComputable) {
        //     console.log("percentage");
        //   }
        // });

        req.onreadystatechange = () => {
          if (req.readyState === 4) {
            resolve(req.response);
          }
        };

        req.upload.addEventListener("error", (event) => {
          console.log("error");
          reject(req.response);
        });

        let formData = new FormData();

        formData.append("name", file.name);
        formData.append("file", file);
        req.open(
          "POST",
          "https://gy5gohx54e.execute-api.us-west-2.amazonaws.com/dev/upload"
        );
        req.setRequestHeader("header", user.id);
        req.send(formData);
      });
    };
    if (file) {
      try {
        sendRequset(file).then(
          (res) => {
            //when promise filled
            setAvatar(res);
          },
          (res) => {
            // if request rejected
            throw Error();
          }
        );
      } catch (e) {
        throw Error();
      }
    }
  };

  //EditProflie 버튼
  const onSubmit = (e) => {
    e.preventDefault();
    try {
      editProfileMutation();
      toast.success("updated Profile");
    } catch (e) {
      throw Error();
    }

    //API 전송
    //하단에 토스트생성
  };

  const changePassword = async (e) => {
    e.preventDefault();
    if (newPs.value !== confirmNewPs.value) {
      toast.error("두 비밀번호가 일치하는지 확인하세요");
    } else {
      const {
        data: { changePassword }
      } = await changePsMutation({
        variables: {
          currentPs: currentPs.value,
          newPs: newPs.value
        }
      });
      if (changePassword === "비밀번호가 변경되었습니다.") {
        //성공적으로 변경됨
        toast.success("성공적으로 변경 되었습니다.");
      } else {
        toast.error(changePassword);
      }
    }
  };
  return (
    <>
      <Helmet>
        <title>프로필 편집 • Instagram</title>
      </Helmet>
      <Container>
        {user && (
          <Wrapper>
            <MenuBox>
              <MenuList>
                {action === "editProfile" ? (
                  <ActMenu>프로필 편집</ActMenu>
                ) : (
                  <Menu
                    onClick={() => {
                      setAction("editProfile");
                    }}
                  >
                    프로필 편집
                  </Menu>
                )}
                {action === "changePW" ? (
                  <ActMenu>비밀번호 변경</ActMenu>
                ) : (
                  <Menu
                    onClick={() => {
                      setAction("changePW");
                    }}
                  >
                    비밀번호 변경
                  </Menu>
                )}
                <Menu>허가된 앱</Menu>
                <Menu>이메일 및 SMS</Menu>
                <Menu>연락처 관리</Menu>
                <Menu>공개 범위 및 보안</Menu>
              </MenuList>
            </MenuBox>
            <ContentBox>
              <Profile>
                <PhotoInput2
                  type="file"
                  ref={photoRef2}
                  onChange={() => onChange(photoRef2)}
                  accept="image/*"
                />
                <Avatar bg={avatar} />
                <UsernameBox>
                  <Username>{username.value}</Username>
                  <div>
                    <PhotoInput
                      type="file"
                      ref={photoRef}
                      onChange={() => onChange(photoRef)}
                      accept="image/*"
                    />
                    {action === "editProfile" && (
                      <ChangeAvatar htmlFor="photo">
                        프로필 사진 바꾸기
                      </ChangeAvatar>
                    )}
                  </div>
                </UsernameBox>
              </Profile>
              {action === "editProfile" && (
                <EditForm onSubmit={onSubmit}>
                  <Category>
                    <Label>이름</Label>
                    <InputWrapper
                      onKeyPress={onKeyPress}
                      value={lastName.value}
                      onChange={lastName.onChange}
                    />
                  </Category>
                  <Category>
                    <Label>사용자 이름</Label>
                    <InputWrapper
                      onKeyPress={onKeyPress}
                      value={username.value}
                      onChange={username.onChange}
                    />
                  </Category>
                  <Category>
                    <Label>소개</Label>
                    <BioInputWrapper
                      value={bio.value}
                      onChange={bio.onChange}
                    />
                  </Category>
                  <Category>
                    <Label />
                    <PrivateText>개인 정보</PrivateText>
                  </Category>
                  <Category>
                    <Label>이메일</Label>
                    <InputWrapper
                      onKeyPress={onKeyPress}
                      value={email.value}
                      onChange={email.onChange}
                    />
                  </Category>
                  <Category>
                    <Label>전화번호</Label>
                    <InputWrapper
                      onKeyPress={onKeyPress}
                      value={phoneNumber.value}
                      onChange={phoneNumber.onChange}
                    />
                  </Category>
                  <Category>
                    <Label>성별</Label>
                    <SelectDiv>
                      <SelectIcon>></SelectIcon>
                      <SelectBox
                        value={gender.value}
                        onChange={gender.onChange}
                      >
                        <option value={"MALE"}>남성</option>
                        <option value={"FEMALE"}>여성</option>
                        <option value={""}>선택 안함</option>
                      </SelectBox>
                    </SelectDiv>
                  </Category>
                  <Category>
                    <Label />
                    <SubmitButton>제출</SubmitButton>
                  </Category>
                </EditForm>
              )}
              {action === "changePW" && (
                <PwForm onSubmit={changePassword}>
                  <Category>
                    <Label>이전 비밀번호</Label>
                    <PwInput
                      onKeyPress={onKeyPress}
                      type={"password"}
                      value={currentPs.value}
                      onChange={currentPs.onChange}
                      autoComplete="current-password"
                      required
                    />
                  </Category>
                  <Category>
                    <Label>새 비밀번호</Label>
                    <PwInput
                      onKeyPress={onKeyPress}
                      value={newPs.value}
                      onChange={newPs.onChange}
                      type={"password"}
                      autoComplete="new-password"
                      required
                    />
                  </Category>
                  <Category>
                    <Label>새 비밀번호 확인</Label>
                    <PwInput
                      onKeyPress={onKeyPress}
                      value={confirmNewPs.value}
                      onChange={confirmNewPs.onChange}
                      type={"password"}
                      autoComplete="new-password"
                      required
                    />
                  </Category>
                  <Category>
                    <Label />
                    {currentPs.value !== "" &&
                    newPs.value !== "" &&
                    confirmNewPs.value !== "" ? (
                      <SubmitPWButton>비밀번호 변경</SubmitPWButton>
                    ) : (
                      <SubmitPWButton disabled>비밀번호 변경</SubmitPWButton>
                    )}
                  </Category>
                  <Category>
                    <Label />
                    <FindPw to="/editProfile">비밀번호를 잊으셨나요?</FindPw>
                  </Category>
                </PwForm>
              )}
            </ContentBox>
          </Wrapper>
        )}
      </Container>
      <Footer />
    </>
  );
};
export default EditProfilePresenter;
