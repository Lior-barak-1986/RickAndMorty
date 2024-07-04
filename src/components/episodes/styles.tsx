import styled from "styled-components";

export const EpisodeContainer = styled.div<{ rotate: boolean }>`
  background-color: #fffff0;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 0px 8px #ddd;
  background-color: white;
  align-text: center;
  width: 300px;
  height: 200px;
  margin: auto;
  transition: transform 1s ease;
  ${({ rotate }) => rotate && `transform: rotate(360deg)`}
`;

export const EpisodeHeader = styled.h1`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const EpisodeLimit = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
