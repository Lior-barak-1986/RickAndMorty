import styled from "styled-components";

export const CharacterContainer = styled.div<{ rotate: boolean }>`
  background-color: #fffff0;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 0px 8px #ddd;
  background-color: white;
  align-text: center;
  width: 300px;
  height: 350px;
  margin: auto;
  transition: transform 1s ease;
  ${({ rotate }) => rotate && `transform: rotate(360deg)`}
`;

export const CharacterHeader = styled.h1`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const CharacterImage = styled.img`
  width: 250px;
  height: 250px;
`;
