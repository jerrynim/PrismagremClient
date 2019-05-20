import React, { useRef } from "react";
import styled from "styled-components";
import useInput from "../../Hooks/useInput";
import TextareaAutosize from "react-autosize-textarea";
import { useMutation } from "react-apollo-hooks";
import { EDIT_PROFILE } from "./EditProfileQueries";
import { Helmet } from "rl-react-helmet";

const Container = styled.div`
  margin-top: 77px;
  background-color: #fafafa;
`;
const Wrapper = styled.div`
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  margin: 133px auto 0;
  max-width: 935px;
  overflow: hidden;
  width: 100%;
  display: flex;
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
  background-color: #fafafa;
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

const FindPw = styled.button`
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
  color: white;
  opacity: 0;
  height: 10px;
  &:focus {
    outline: none;
  }
`;

const EditProfilePresenter = ({
  action,
  setAction,
  onKeyPress,
  user,
  onInputChange,
  upload
}) => {
  const username = useInput(user.username);
  const bio = useInput(user.bio);
  const email = useInput(user.email);
  const gender = useInput(user.gender);
  const lastName = useInput(user.lastName);
  const phoneNumber = useInput(user.phoneNumber);
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

  //파일 input의 Ref
  const photoRef = useRef(null);

  const handleFile = (e) => {
    e.preventDefault();
    const { files } = photoRef.current;
    const file = files[0];
    let reader = new FileReader();
    console.log(reader.readAsDataURL(file));
    // upload({ variables: { file } });
  };

  //EditProflie 버튼
  const onSubmit = (e) => {
    e.preventDefault();

    try {
      editProfileMutation();
      console.log("editSuccess");
    } catch (e) {
      console.log(e.message);
    }
    //API 전송
    //하단에 토스트생성
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
                <Avatar />
                <UsernameBox>
                  <Username>{username.value}</Username>
                  <div>
                    <PhotoInput
                      id={"photo"}
                      type="file"
                      accept="image/*"
                      onChange={onInputChange}
                    />
                    {action === "editProfile" && (
                      <ChangeAvatar htmlFor="photo" onClick={onInputChange}>
                        프로필 사진 바꾸기
                      </ChangeAvatar>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    ref={photoRef}
                    onChange={handleFile}
                  />
                  <input
                    type="file"
                    required
                    onChange={({
                      target: {
                        validity,
                        files: [file]
                      }
                    }) => validity.valid && upload({ variables: { file } })}
                  />
                  <button onClick={handleFile} />
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
                      onKeyPress={onKeyPress}
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
                <PwForm>
                  <Category>
                    <Label>이전 비밀번호</Label>
                    <PwInput
                      onKeyPress={onKeyPress}
                      type={"password"}
                      autoComplete="current-password"
                      required
                    />
                  </Category>
                  <Category>
                    <Label>새 비밀번호</Label>
                    <PwInput
                      onKeyPress={onKeyPress}
                      type={"password"}
                      autoComplete="new-password"
                      required
                    />
                  </Category>
                  <Category>
                    <Label>새 비밀번호 확인</Label>
                    <PwInput
                      onKeyPress={onKeyPress}
                      type={"password"}
                      autoComplete="new-password"
                      required
                    />
                  </Category>
                  <Category>
                    <Label />
                    <SubmitPWButton>비밀번호 변경</SubmitPWButton>
                  </Category>
                  <Category>
                    <Label />
                    <FindPw>비밀번호를 잊으셨나요?</FindPw>
                  </Category>
                </PwForm>
              )}
            </ContentBox>
          </Wrapper>
        )}
      </Container>
    </>
  );
};
export default EditProfilePresenter;
