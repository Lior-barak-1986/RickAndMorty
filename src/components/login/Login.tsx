import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";

import {
  LoginButton,
  LoginButtonContainer,
  LoginCloseContainer,
  LoginContainer,
  LoginDiv,
  LoginError,
  LoginFA,
  LoginForm,
  LoginInput,
  LoginInputContainer,
  LoginModalContainer,
  LoginSpan,
  LoginUser,
} from "./styles";
import { faUser, faLock, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { UserPartial } from "../../types/User";
import useLogin from "../../hooks/useLogin";

function Login() {
  const {
    userObj: { username },
    onLogin,
    onLogout,
    isLoginOpen,
    openLogin,
    closeLogin,
  } = useLogin();
  const [userData, setUserData] = useState<UserPartial>({
    username,
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setUserData((val) => ({ ...val, [e.target.name]: e.target.value }));
  };
  const onClickLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      await onLogin(userData);
      setUserData({
        username,
        password: "",
      });
      closeLogin();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onClick = () => {
    setError("");
    closeLogin();
  };

  const onClickLogout = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    onLogout();
    setUserData({
      username: "",
      password: "",
    });
  };

  return (
    <LoginContainer>
      <LoginModalContainer isOpen={isLoginOpen} onRequestClose={onClick}>
        <LoginForm onSubmit={onClickLogin}>
          <LoginInputContainer isError={error.length > 0}>
            <LoginFA icon={faUser} />
            <LoginInput
              required
              value={userData.username}
              onChange={onChange}
              name="username"
              placeholder="Username"
            />
          </LoginInputContainer>
          <LoginInputContainer isError={error.length > 0}>
            <LoginFA icon={faLock} />
            <LoginInput
              required
              value={userData.password}
              type="password"
              onChange={onChange}
              name="password"
              placeholder="******"
            />
          </LoginInputContainer>
          <LoginButtonContainer>
            <LoginButton type="submit">Login</LoginButton>
            <LoginButton onClick={onClick}>Close</LoginButton>
          </LoginButtonContainer>
          {isLoading && <LoginFA icon={faSpinner} spin />}
          <LoginError>{error}</LoginError>
        </LoginForm>
      </LoginModalContainer>
      {!isLoginOpen && (
        <LoginCloseContainer onClick={openLogin}>
          <LoginUser icon={faUser} />
          <LoginDiv>
            {username}
            {username.length > 0 ? (
              <LoginSpan onClick={onClickLogout}>(Logout)</LoginSpan>
            ) : (
              "Login"
            )}
          </LoginDiv>
        </LoginCloseContainer>
      )}
    </LoginContainer>
  );
}

export default Login;
