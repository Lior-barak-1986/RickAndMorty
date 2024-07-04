import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchBarContainer = styled.div`
  background-color: white;
  height: 2.5rem;
  border: none;
  border-radius: 10px;
  padding: 0 15px;
  box-shadow: 0px 0px 8px #ddd;
  width: 40%;
  position: relative;
`;

export const SearchBarBarContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 2.5rem;
  border: none;
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchBarSearch = styled(FontAwesomeIcon)`
  &:hover {
    cursor: pointer;
  }
`;

export const SearchBarInput = styled.input`
  background-color: transparent;
  border: none;
  height: 100%;
  font-size: 1.25rem;
  width: 100%;
  margin-left: 5px;
  &:focus {
    outline: none;
  }
`;

export const SearchBarDropDown = styled.div`
  box-shadow: 0px 0px 8px #ddd;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
  margin-top: 1px;
  background-color: white;
  width: 100%;
  border: none;
  align-items: center;
  z-index: 10;
`;
