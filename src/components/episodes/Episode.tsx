import React, { useState } from "react";
import { EpisodeType } from "../../types/Episodes";
import { EpisodeContainer, EpisodeHeader } from "./styles";
import { UserRoles } from "../../types/User";
import { CardsLimit, CardsLine } from "../cards/styles";

interface EpisodeProps {
  data: EpisodeType;
  userRole: UserRoles;
}

function Episode({ data, userRole }: EpisodeProps) {
  const { name, created, episode, id, url, air_date, characters } = data;
  const [isFlipped, setIsFlipped] = useState(false);
  const onClick = () => {
    setIsFlipped((val) => !val);
  };

  return (
    <EpisodeContainer onClick={onClick} rotate={isFlipped}>
      <EpisodeHeader>{name}</EpisodeHeader>
      <CardsLine>
        Episode:
        <CardsLimit>{episode}</CardsLimit>
      </CardsLine>
      <CardsLine>
        Air date:
        <CardsLimit shouldBlur={userRole !== "Rick"}>{air_date}</CardsLimit>
      </CardsLine>
      <CardsLine>
        Characters:
        <CardsLimit shouldBlur={userRole !== "Rick"}>{characters}</CardsLimit>
      </CardsLine>
      <CardsLine>
        Created at:
        <CardsLimit>{created}</CardsLimit>
      </CardsLine>
    </EpisodeContainer>
  );
}

export default Episode;
