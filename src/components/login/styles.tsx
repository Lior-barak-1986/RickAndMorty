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
`;

export const LoginInput = styled.input`
  background-color: white;
  width: 100%;
  height: 2.5rem;
  border: none;
  display: flex;
  align-items: center;
  position: relative;
`;

export const LoginUser = styled(FontAwesomeIcon)`
  margin: auto;
  padding: 10px;
  padding-bottom: 0;
`;
