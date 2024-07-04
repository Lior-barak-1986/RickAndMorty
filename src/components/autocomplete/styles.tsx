import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AutoCompleteContainer = styled.div`
  padding: 10px;
`;

export const SearchBarContainer = styled.div`
  background-color: #fffff0;
  width: 100%;
  height: 2.5rem;
  border: none;
  border-radius: 10px;
  padding: 0 15px;
  box-shadow: 0px 0px 8px #ddd;
  background-color: white;
  display: flex;
  align-items: center;
  width: 40%;
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
  font-size: 1.25rem;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
  background: white;
  width: 400px;
  margin-top: 10px;
  top: 70px;
`;
