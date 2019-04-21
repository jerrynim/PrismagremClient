import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Helmet from "rl-react-helmet";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const PhoneImage = styled.div`
  padding: 96px 370px 0px 0px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const LoginSection = styled.div`
  padding: 0px 0px 76px 403px;
  position: absolute;

  @media (max-width: 900px) {
    padding: 52px 0px 0px 0px;
  }
`;
const Box = styled.div`
  ${(props) => props.theme.whiteBox}
  border-radius:1px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${(props) => props.theme.blueColor};
  cursor: pointer;
`;
const InWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FacebookButton = styled.button`
  width: 268px;
  height: 32px;
  border: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  border-radius: 4px;
  background-color: ${(props) => props.theme.blueColor};
  text-align: center;
  padding-top: 4px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FirstForm = styled.div`
  border: 1px solid #e6e6e6;
  width: 350px;
  height: 546px;
  margin: 0px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const Logo = styled.div`
  max-width: 500px;
  margin: 22px 86.5px 4px;
`;

const SignUpText = styled.h2`
  margin: 0px 40px 18px;
  font-size: 17px;
  color: #999999;
  text-align: center;
  font-weight: 600;
  line-height: 20px;
`;

const Form = styled(Box)`
  border: 1px solid #e6e6e6;
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

const FacebookText = styled.div`
  margin-left: 8px;
`;

const FacebookIcon = styled.div`
  padding-top: 1px;
`;

const Or = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18px 40px 18px;
`;
const Line = styled.div`
  width: 104px;
  height: 1px;
  background-color: #efefef;
`;
const OrText = styled.div`
  font-size: 13px;
  font-weight: 600;
  line-height: 15px;
  margin: 0 18px;
  text-transform: uppercase;
  color: #999999;
  margin: 0px 18px;
`;
export default ({
  action,
  username,
  firstName,
  lastName,
  email,
  setAction,
  onSubmit,
  secret
}) => (
  <Wrapper>
    {action === "First" && (
      <InWrapper>
        <PhoneImage>
          <img
            src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
            alt=""
          />
        </PhoneImage>
        <LoginSection>
          <FirstForm>
            <Logo>
              <img
                width="184px"
                height="67px"
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2000px-Instagram_logo.svg.png"
              />
            </Logo>
            <SignUpText>친구들의 사진과 동영상을 보려면 가입하세요.</SignUpText>
            <FacebookButton>
              <FacebookIcon>
                <img
                  src={require("../../Components/Images/FacebookIcon16.png")}
                  alt=""
                />
              </FacebookIcon>
              <FacebookText>Facebook으로 로그인</FacebookText>
            </FacebookButton>
            <Or>
              <Line />
              <OrText>또는</OrText>
              <Line />
            </Or>
          </FirstForm>
        </LoginSection>
      </InWrapper>
    )}
  </Wrapper>
);
