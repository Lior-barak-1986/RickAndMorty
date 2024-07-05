import styled from "styled-components";

export const MainContainer = styled.div`
  padding-top: 5vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
`;

export const MainHeader = styled.h1`
  color: white;
`;

export const MainCardContainer = styled.div`
  text-align: center;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
  margin: 10px auto;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  gap: 10px;
`;
