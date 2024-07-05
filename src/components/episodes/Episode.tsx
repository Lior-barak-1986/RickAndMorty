import React, { useState } from "react";
import { EpisodeType } from "../../types/Episodes";
import {
  EpisodeContainer,
  EpisodeHeader,
  EpisodeLimit,
  EpisodeLine,
} from "./styles";

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
      <EpisodeLine>
        Episode:
        <EpisodeLimit>{episode}</EpisodeLimit>
      </EpisodeLine>
      <EpisodeLine>
        Air date:
        <EpisodeLimit shouldBlur>{air_date}</EpisodeLimit>
      </EpisodeLine>
      <EpisodeLine>
        Characters:
        <EpisodeLimit shouldBlur>{characters}</EpisodeLimit>
      </EpisodeLine>
      <EpisodeLine>
        Created at:
        <EpisodeLimit>{created}</EpisodeLimit>
      </EpisodeLine>
    </EpisodeContainer>
  );
}

export default Episode;
