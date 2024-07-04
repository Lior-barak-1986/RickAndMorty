import React, { useState } from "react";
import { EpisodeType } from "../../types/Episodes";
import { EpisodeContainer, EpisodeHeader, EpisodeLimit } from "./styles";

interface EpisodeProps {
  data: EpisodeType;
}

function Episode({ data }: EpisodeProps) {
  const { name, created, episode, id, url, air_date, characters } = data;
  const [isFlipped, setIsFlipped] = useState(false);
  const onClick = () => {
    setIsFlipped((val) => !val);
  };

  return (
    <EpisodeContainer onClick={onClick} rotate={isFlipped}>
      <EpisodeHeader>{name}</EpisodeHeader>
      <EpisodeLimit>Episode: {episode}</EpisodeLimit>
      <EpisodeLimit>Air date: {air_date}</EpisodeLimit>
      <EpisodeLimit>Characters: {characters}</EpisodeLimit>
      <EpisodeLimit>Created at: {created}</EpisodeLimit>
    </EpisodeContainer>
  );
}

export default Episode;
