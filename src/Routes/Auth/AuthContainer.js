import React, { useState, useEffect } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import {
  CREATE_ACCOUNT,
  LOCAL_LOG_IN,
  LOG_IN,
  CONFIRM_SECRET
} from "./AuthQueries";

/*미구현 :input blur시 db에서 확인하는 기능 
        랜덤한 사용자이름
        비밀번호 표시
*/

export default () => {
  const [action, setAction] = useState("First");
  const email = useInput("");
  const lastName = useInput("");
  const username = useInput("");
  const secret = useInput("");
  const confirmKey = useInput("");
  const [errorMessage, setErrorMessage] = useState("");
  const screenShots = [
    {
      id: 1,
      src:
        "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg"
    },
    {
      id: 2,
      src:
        "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"
    },
    {
      id: 3,
      src:
        "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg"
    },
    {
      id: 4,
      src:
        "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg"
    },
    {
      id: 5,
      src:
        "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg"
    }
  ];

  const [currentItem, setCurrentItem] = useState(0);

  const slide = () => {
    const totalFiles = screenShots.length;
    if (currentItem === totalFiles - 1) {
      setTimeout(() => setCurrentItem(0), 3000);
    } else {
      setTimeout(() => setCurrentItem(currentItem + 1), 3000);
    }
  };
  useEffect(() => {
    slide();
  }, [currentItem]);

  const createAccountMutation = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      username: username.value,
      lastName: lastName.value,
      secret: secret.value
    }
  });

  const requestSecretMutation = useMutation(LOG_IN, {
    variables: {
      email: email.value
    }
  });

  const confirmSecretMutation = useMutation(CONFIRM_SECRET, {
    variables: {
      secret: confirmKey.value,
      email: email.value
    }
  });

  const localLogInMutation = useMutation(LOCAL_LOG_IN);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (action === "First" || action === "signUp") {
      if (
        //빈칸인지 확인
        email.value === "" &&
        username.value === "" &&
        lastName.value === "" &&
        secret.value === ""
      ) {
        setErrorMessage("This field is required.");
      } else {
        //휴대폰 번호체크
        const phoneCheck = /^\d{3}-\d{3,4}-\d{4}$/.test(email.value);
        const emailCheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
          email.value
        );
        const usernameCheck = /^[a-zA-Z0-9_]{4,16}$/.test(username.value);
        //username 확인
        if (!usernameCheck) {
          setErrorMessage(
            "사용자 이름에는 문자, 숫자, 밑줄 및 마침표만 사용할 수 있습니다."
          );
        }
        //비밀번호가 6자리보다 작다면
        if (secret.value.length < 6) {
          setErrorMessage("6자 이상의 비밀번호를 만드세요.");
        }

        if (phoneCheck) {
          //휴대폰이라면 문자전송 + action==="PhoneVerification"
        } else if (emailCheck) {
          try {
            //유저 생성
            const {
              data: { createAccount }
            } = await createAccountMutation();
            if (!createAccount) {
              console.log("유저를 생성하지 못했습니다.");
            } else {
              //이메일 전송
              try {
                const {
                  data: { requestSecret }
                } = await requestSecretMutation();
                if (!requestSecret) {
                  setErrorMessage("이메일 전송에 실패했습니다.");
                } else {
                  setAction("confirm");
                }
              } catch (e) {
                console.log(e.message);
              }
            }
          } catch (e) {
            console.log(e.message);
          }
        } else {
          //잘못된 Input
          setErrorMessage("Enter a valid email address Or Phonenumber");
        }
      }
    } else if (action === "logIn") {
      //email && secret 로 prisma mutation check후 token 으로 local로그인
    } else if (action === "confirm") {
      try {
        const {
          data: { confirmSecret: token }
        } = await confirmSecretMutation();
        if (token !== "" && token !== undefined) {
          localLogInMutation({ variables: { token } });
          this.props.history.push({ path: "/" });
        } else {
          throw Error();
        }
      } catch (e) {
        console.log(e.message);
      }
    }
  };

  return (
    <AuthPresenter
      action={action}
      setAction={setAction}
      username={username}
      lastName={lastName}
      email={email}
      secret={secret}
      confirmKey={confirmKey}
      onSubmit={onSubmit}
      screenShots={screenShots}
      currentItem={currentItem}
      errorMessage={errorMessage}
    />
  );
};
