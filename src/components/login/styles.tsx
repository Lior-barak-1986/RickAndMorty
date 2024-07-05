import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LoginContainer = styled.div`
  background-color: white;
  border: none;
  border-radius: 10px;
  padding: 0 15px;
  box-shadow: 0px 0px 8px #ddd;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
`;

export const LoginInput = styled.input`
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  outline: none;
`;

export const LoginButton = styled.button`
  border: none;
  padding: 10px;
  margin: 10px;
`;

export const LoginCloseContainer = styled.div``;

export const LoginUser = styled(FontAwesomeIcon)`
  margin: auto;
  padding: 10px;
  padding-bottom: 0;
`;
