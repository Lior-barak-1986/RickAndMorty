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

interface LoginProps {
  username: string;
  onLogin: (userData: UserPartial) => Promise<unknown>;
  onLogout: () => Promise<unknown>;
  isOpen: boolean;
  ChangeIsOpen: (val: boolean) => void;
}

function Login({
  username,
  onLogin,
  onLogout,
  isOpen,
  ChangeIsOpen,
}: LoginProps) {
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
      ChangeIsOpen(false);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onClick = () => {
    setError("");
    ChangeIsOpen(!isOpen);
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
      <LoginModalContainer isOpen={isOpen} onRequestClose={onClick}>
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
      {!isOpen && (
        <LoginCloseContainer onClick={onClick}>
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
