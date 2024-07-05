import React, { ChangeEvent, useState } from "react";
import {
  LoginButton,
  LoginCloseContainer,
  LoginContainer,
  LoginInput,
  LoginUser,
} from "./styles";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface LoginProps {}

function Login({}: LoginProps) {
  const [userData, setUserData] = useState({ name: "", password: "" });
  const [open, setOpen] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setUserData((val) => ({ ...val, [e.target.name]: e.target.value }));
  };
  const onClick = () => setOpen((val) => !val);
  return (
    <LoginContainer>
      {open ? (
        <>
          <LoginInput
            value={userData.name}
            onChange={onChange}
            name="name"
            placeholder="username"
          />
          <LoginInput
            value={userData.password}
            type="password"
            onChange={onChange}
            name="password"
            placeholder="******"
          />
          <LoginButton>Login</LoginButton>
          <LoginButton onClick={onClick}>Close</LoginButton>
        </>
      ) : (
        <LoginCloseContainer onClick={onClick}>
          <LoginUser icon={faUser} />
          <br />
          Login
        </LoginCloseContainer>
      )}
    </LoginContainer>
  );
}

export default Login;
