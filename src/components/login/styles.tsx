import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactModal from "react-modal";

export const LoginContainer = styled.div`
  background-color: white;
  border: none;
  border-radius: 10px;
  padding: 0 15px;
  box-shadow: 0px 0px 8px #ddd;
  margin-right: 10px;
  align-self: flex-end;
`;

export const LoginModalContainer = styled(ReactModal)`
  outline: none;
`;

export const LoginForm = styled.form`
  display: flex;
  width: 300px;
  flex-direction: column;
  background-color: white;
  margin: 200px auto;
  border-radius: 10px;
  height: 250px;
`;

export const LoginInputContainer = styled.div<{ isError: boolean }>`
  border-radius: 10px;
  padding: 10px;
  margin: 10px auto;
  border: 1px solid ${({ isError }) => (isError ? "red" : "black")};
`;

export const LoginFA = styled(FontAwesomeIcon)`
  margin: 0 10px;
`;

export const LoginInput = styled.input`
  outline: none;
  border: none;
  width: 150px;
`;

export const LoginButtonContainer = styled.div`
  margin: 10px auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const LoginButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 100px;
`;

export const LoginError = styled.div`
  text-align: center;
  color: red;
`;
export const LoginCloseContainer = styled.div`
  text-align: center;
`;

export const LoginUser = styled(FontAwesomeIcon)`
  margin: auto;
  padding: 10px;
  padding-bottom: 0;
`;

export const LoginDiv = styled.div`
  margin: auto;
  padding: 10px;
  padding-top: 0;
`;

export const LoginSpan = styled.span`
  color: blue;
  &:hover {
    cursor: pointer;
  }
`;
