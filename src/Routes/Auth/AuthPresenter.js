import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Helmet from "rl-react-helmet";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FACEBOOK_APPID } from "../../keys";
import Footer from "../../Components/Footer";
const Wrapper = styled.div`
  @media (max-width: 450px) {
    width: 100%;
    align-items: flex-start;
  }
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const PhoneImage = styled.div`
  width: 454px;
  height: 618px;
  margin: 96px 400px 0px 30px;
  background-image: url("https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png");
  @media (max-width: 900px) {
    display: none;
  }
`;

const LoginSection = styled.div`
  padding: 95px 0px 0px 403px;
  position: absolute;

  @media (max-width: 900px) {
    padding: 52px 0px 0px 0px;
  }
  @media (max-width: 450px) {
    padding: 0;
    position: relative;
  }
`;

const SignUpSection = styled.div`
  @media (max-width: 450px) {
    padding: 0%;
  }
  padding: 12px 0px;
`;
const Box = styled.div`
  @media (max-width: 450px) {
    width: 100%;
    padding: 0%;
  }
  ${(props) => props.theme.whiteBox}
  border-radius:1px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  @media (max-width: 450px) {
    max-width: none;
  }
  border: 1px solid #e6e6e6;
  height: 70px;
  text-align: center;
  padding: 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  :focus {
    outline: none;
  }
`;

const SignUpButton = styled(FacebookButton)`
  margin-top: 8px;
  height: 30px;
  padding-bottom: 4px;
  :disabled {
    cursor: none;
    pointer-events: none;
    color: #fafafa;
    background-color: #c0dff9;
  }
  :focus {
    outline: none;
  }
`;

const FirstForm = styled.div`
  border: 1px solid #e6e6e6;
  @media (max-width: 450px) {
    width: 100%;
  }
  width: 350px;
  margin: 0px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const LoginForm = styled.div`
  @media (max-width: 450px) {
    width: 100%;
  }
  border: 1px solid #e6e6e6;
  width: 350px;
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

const InfoText = styled.div`
  padding: 18px 64px 20px;
  color: #999999;
  font-weight: 400;
  text-align: center;
  font-size: 14px;
  line-height: 18px;
`;

const InLink = styled(Link)`
  color: #999999;
  font-weight: 600;
`;

const FacebookText = styled.div`
  margin-left: 8px;
  color: white;
`;

const FacebookText2 = styled.span`
  color: #003569;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  padding-left: 9px;
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

const DownText = styled.div`
  text-align: center;
  margin: 19px 20px;
`;

const FacebookBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const AppLinks = styled.div`
  @media (max-width: 450px) {
    width: 100%;
  }
  width: 350;
  height: 44;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
  img {
    padding: 0px 4px;
  }
`;

const LoginScreen = styled.div`
  @media (max-width: 450px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 0px;
`;

const InputLabel = styled.label`
  position: absolute;
  color: #999999;
  font-size: ${(props) => (props.input.value === "" ? "12px" : "10px")};
  padding: ${(props) => (props.input.value === "" ? "13px 9px" : "5px 9px")};
  transition: 0.15s;
  pointer-events: none;
`;

const Inputs = styled.div`
  margin: 25px 0px 0px;
`;

const FindSecret = styled(Link)`
  font-size: 12px;
  color: #003569;
  margin: 20px;
`;

const LogInLink = styled(Link)`
  color: #003569;
  font-weight: 600;
`;

const LogInText = styled.span`
  color: #999999;
`;

const File = styled.div`
  width: 240px;
  height: 427px;
  position: absolute;
  margin: 99px 0px 0px 151px;
  background-image: url(${(props) => props.src}});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const ErrorText = styled.div`
  width: 268px;
  color: #ed4956;
  text-align: center;
  margin: 20px 0px 0px;
`;
const SignErrorText = styled.div`
  width: 268px;
  color: #ed4956;
  text-align: center;
  margin: 0px 0px 40px;
`;

const InputWrapper = styled.div`
  margin: 20px 0px 10px;
`;

const PhoneText = styled.div`
  text-align: center;
  padding: 0px 40px 0px;
`;

const PhoneFindLink = styled(Link)`
  color: ${(props) => props.theme.blueColor};
  font-weight: 600;
`;

const PhoneLinkWrapper = styled.div`
  margin: 40px 40px;
  text-align: center;
`;

const FooterWrapper = styled.div`
  margin: 82px 0px 40px;
  padding: 0px 20px;
`;
export default ({
  action,
  setAction,
  username,
  lastName,
  email,
  secret,
  onSubmit,
  screenShots,
  currentItem,
  errorMessage,
  confirmKey,
  loginCallback
}) => (
  <>
    <Helmet>
      <title>Instagram</title>
    </Helmet>
    <Wrapper>
      {action === "First" && (
        <InWrapper>
          <PhoneImage>
            {screenShots.map((file, index) => (
              <File
                key={file.id}
                src={file.src}
                showing={index === currentItem}
              />
            ))}
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
              <SignUpText>
                친구들의 사진과 동영상을 보려면 가입하세요.
              </SignUpText>
              <FacebookLogin
                appId={FACEBOOK_APPID}
                autoLoad={false}
                fields="name,first_name,last_name,email"
                callback={loginCallback}
                render={(renderProps) => (
                  <Link onClick={renderProps.onClick}>
                    <FacebookButton>
                      <FacebookIcon>
                        <img
                          src={require("../../Components/Images/FacebookIcon16.png")}
                          alt=""
                        />
                      </FacebookIcon>
                      <FacebookText>Facebook으로 로그인</FacebookText>
                    </FacebookButton>
                  </Link>
                )}
              />
              <Or>
                <Line />
                <OrText>또는</OrText>
                <Line />
              </Or>
              <form onSubmit={onSubmit}>
                <div>
                  <InputLabel input={email}>이메일 주소</InputLabel>
                  <Input {...email} />
                </div>
                <div>
                  <InputLabel input={lastName}>성명</InputLabel>
                  <Input {...lastName} />
                </div>
                <div>
                  <InputLabel input={username}>사용자 이름</InputLabel>
                  <Input {...username} />
                </div>
                <div>
                  <InputLabel input={secret}>비밀번호</InputLabel>
                  <Input
                    type={"password"}
                    autoComplete="current-password"
                    allowFontScaling={false}
                    required
                    {...secret}
                  />
                </div>
                <SignUpButton>가입</SignUpButton>
                {errorMessage !== "" && <ErrorText>{errorMessage}</ErrorText>}
              </form>
              <InfoText>
                가입하면 Instagram의
                <InLink to="/"> 약관</InLink>,
                <InLink to="/"> 데이터 정책 </InLink>및
                <InLink to="/"> 쿠키 정책</InLink>에 동의하게 됩니다.
              </InfoText>
            </FirstForm>
            <StateChanger>
              {action === "logIn" ? (
                <>
                  계정이 없으신가요?
                  <Link onClick={() => setAction("signUp")}>가입하기</Link>
                </>
              ) : (
                <>
                  <p>계정이 있으신가요?&nbsp;</p>
                  <Link onClick={() => setAction("logIn")}> 로그인</Link>
                </>
              )}
            </StateChanger>
            <DownText>앱을 다운로드하세요.</DownText>
            <AppLinks>
              <Link to="/">
                <img
                  alt=""
                  width="140"
                  height="40"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                />
              </Link>
              <Link to="/">
                <img
                  alt=""
                  width="140"
                  height="40"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                />
              </Link>
            </AppLinks>
          </LoginSection>
        </InWrapper>
      )}
      {action === "logIn" && (
        <>
          <Helmet>
            <title>로그인 • Instagram</title>
          </Helmet>
          <Wrapper>
            <LoginScreen>
              <LoginForm>
                <Logo>
                  <img
                    width="184px"
                    height="67px"
                    alt=""
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2000px-Instagram_logo.svg.png"
                  />
                </Logo>
                <form onSubmit={onSubmit}>
                  <Inputs>
                    <div>
                      <InputLabel input={email}>
                        전화번호, 사용자 이름 또는 이메일
                      </InputLabel>
                      <Input {...email} />
                    </div>
                    <div>
                      <InputLabel input={secret}>비밀번호</InputLabel>
                      <Input
                        type={"password"}
                        autoComplete="current-password"
                        allowFontScaling={false}
                        required
                        {...secret}
                      />
                    </div>
                  </Inputs>
                  {email.value === "" || secret.value === "" ? (
                    <SignUpButton disabled>로그인</SignUpButton>
                  ) : (
                    <SignUpButton>로그인</SignUpButton>
                  )}
                </form>
                <Or>
                  <Line />
                  <OrText>또는</OrText>
                  <Line />
                </Or>
                <FacebookBox>
                  <img
                    alt=""
                    src={require("../../Components/Images/facebookIcon16-drakblue.png")}
                  />
                  <FacebookLogin
                    appId={FACEBOOK_APPID}
                    autoLoad={false}
                    fields="name,first_name,last_name,email"
                    callback={loginCallback}
                    render={(renderProps) => (
                      <Link onClick={renderProps.onClick}>
                        <FacebookText2>Facebook으로 로그인</FacebookText2>
                      </Link>
                    )}
                  />
                </FacebookBox>
                <div>
                  {errorMessage !== "" && <ErrorText>{errorMessage}</ErrorText>}
                </div>
                <FindSecret>비밀번호를 잊으셨나요?</FindSecret>
              </LoginForm>
              <StateChanger>
                {action === "logIn" ? (
                  <>
                    <LogInText> 계정이 없으신가요?&nbsp;</LogInText>
                    <LogInLink onClick={() => setAction("signUp")}>
                      가입하기
                    </LogInLink>
                  </>
                ) : (
                  <>
                    <p>계정이 있으신가요?&nbsp;</p>
                    <Link onClick={() => setAction("logIn")}> 로그인</Link>
                  </>
                )}
              </StateChanger>
              <DownText>앱을 다운로드하세요.</DownText>
              <AppLinks>
                <img
                  alt=""
                  width="140"
                  height="40"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                />
                <img
                  alt=""
                  width="140"
                  height="40"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                />
              </AppLinks>
            </LoginScreen>
          </Wrapper>
        </>
      )}
      {action === "signUp" && (
        <>
          <Helmet>
            <title>가입하기 • Instagram</title>
          </Helmet>
          <SignUpSection>
            <FirstForm>
              <Logo>
                <img
                  width="184px"
                  height="67px"
                  alt=""
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2000px-Instagram_logo.svg.png"
                />
              </Logo>
              <SignUpText>
                친구들의 사진과 동영상을 보려면 가입하세요.
              </SignUpText>
              <FacebookLogin
                appId={FACEBOOK_APPID}
                autoLoad={false}
                fields="name,first_name,last_name,email"
                callback={loginCallback}
                render={(renderProps) => (
                  <Link onClick={renderProps.onClick}>
                    <FacebookButton>
                      <FacebookIcon>
                        <img
                          src={require("../../Components/Images/FacebookIcon16.png")}
                          alt=""
                        />
                      </FacebookIcon>
                      <FacebookText>Facebook으로 로그인</FacebookText>
                    </FacebookButton>
                  </Link>
                )}
              />

              <Or>
                <Line />
                <OrText>또는</OrText>
                <Line />
              </Or>
              <form onSubmit={onSubmit}>
                <div>
                  <InputLabel input={email}>
                    휴대폰 번호 또는 이메일 주소
                  </InputLabel>
                  <Input {...email} />
                </div>
                <div>
                  <InputLabel input={lastName}>성명</InputLabel>
                  <Input {...lastName} />
                </div>
                <div>
                  <InputLabel input={username}>사용자 이름</InputLabel>
                  <Input {...username} />
                </div>
                <div>
                  <InputLabel input={secret}>비밀번호</InputLabel>
                  <Input
                    type={"password"}
                    autoComplete="current-password"
                    allowFontScaling={false}
                    required
                    {...secret}
                  />
                </div>
                <SignUpButton>가입</SignUpButton>
              </form>
              <InfoText>
                가입하면 Instagram의
                <InLink to="/"> 약관</InLink>,
                <InLink to="/"> 데이터 정책 </InLink>및
                <InLink to="/"> 쿠키 정책</InLink>에 동의하게 됩니다.
              </InfoText>
              <div>
                {errorMessage !== "" && (
                  <SignErrorText>{errorMessage}</SignErrorText>
                )}
              </div>
            </FirstForm>
            <StateChanger>
              {action === "logIn" ? (
                <>
                  계정이 없으신가요?
                  <Link onClick={() => setAction("signUp")}>가입하기</Link>
                </>
              ) : (
                <>
                  <p>계정이 있으신가요?&nbsp;</p>
                  <Link onClick={() => setAction("logIn")}> 로그인</Link>
                </>
              )}
            </StateChanger>
            <DownText>앱을 다운로드하세요.</DownText>
            <AppLinks>
              <img
                alt=""
                width="140"
                height="40"
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              />
              <img
                alt=""
                width="140"
                height="40"
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              />
            </AppLinks>
          </SignUpSection>
        </>
      )}
      {action === "confirm" && (
        <InWrapper>
          <PhoneImage>
            {screenShots.map((file, index) => (
              <File
                key={file.id}
                src={file.src}
                showing={index === currentItem}
              />
            ))}
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
              <PhoneText>
                마지막 단계입니다.{email.value}으로 전송된 6자리 코드를
                입력하세요.
              </PhoneText>
              <form onSubmit={onSubmit}>
                <InputWrapper>
                  <InputLabel input={confirmKey}>######</InputLabel>
                  <Input {...confirmKey} />
                </InputWrapper>
                <SignUpButton>확인</SignUpButton>
              </form>
              <PhoneLinkWrapper>
                <PhoneFindLink>휴대폰 번호 변경 </PhoneFindLink>|
                <PhoneFindLink> 새 코드 요청하기</PhoneFindLink>
              </PhoneLinkWrapper>
            </FirstForm>
            <StateChanger>
              {action === "logIn" ? (
                <>
                  <LogInText> 계정이 없으신가요?&nbsp;</LogInText>
                  <LogInLink onClick={() => setAction("signUp")}>
                    가입하기
                  </LogInLink>
                </>
              ) : (
                <>
                  <p>계정이 있으신가요?&nbsp;</p>
                  <Link onClick={() => setAction("logIn")}> 로그인</Link>
                </>
              )}
            </StateChanger>
            <DownText>앱을 다운로드하세요.</DownText>
            <AppLinks>
              <Link to="/">
                <img
                  alt=""
                  width="140"
                  height="40"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                />
              </Link>
              <Link to="/">
                <img
                  alt=""
                  width="140"
                  height="40"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                />
              </Link>
            </AppLinks>
          </LoginSection>
        </InWrapper>
      )}
    </Wrapper>
    <FooterWrapper>
      <Footer />
    </FooterWrapper>
  </>
);
