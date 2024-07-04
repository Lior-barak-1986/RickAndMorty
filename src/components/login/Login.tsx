import React, { ChangeEvent, useState } from "react";
import { LoginContainer, LoginInput, LoginUser } from "./styles";
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
    <LoginContainer onClick={onClick}>
      {open ? (
        <>
          <LoginInput
            value={userData.name}
            onChange={onChange}
            name="name"
            placeholder="name"
          />
          <LoginInput
            value={userData.password}
            type="password"
            onChange={onChange}
            name="password"
            placeholder="******"
          />
        </>
      ) : null}
      <LoginUser icon={faUser} />
      <br />
      Login
    </LoginContainer>
  );
}

export default Login;
