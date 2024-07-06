import React, { useState } from "react";
import { CharacterType } from "../../types/Characters";
import { CharacterContainer, CharacterHeader, CharacterImage } from "./styles";
import { UserRoles } from "../../types/User";
import { typeEpisode } from "../../types/Api";
import { CardsLimit, CardsLine } from "../cards/styles";
import MoreInfo from "../moreInfo/MoreInfo";

interface CharacterProps {
  data: CharacterType;
  userRole: UserRoles;
}

function Character({ data, userRole }: CharacterProps) {
  const {
    name,
    created,
    episode,
    gender,
    image,
    location,
    origin,
    species,
    status,
    type,
  } = data;
  const [isFlipped, setIsFlipped] = useState(false);
  const onClick = () => {
    setIsFlipped((val) => !val);
  };

  const createDate = new Date(created);
  return (
    <CharacterContainer onClick={onClick} rotate={isFlipped}>
      <CharacterHeader>{name}</CharacterHeader>
      {isFlipped ? (
        <>
          <CardsLine>
            Appeared at:
            {episode.map((val) => (
              <MoreInfo
                id={val.substring(val.lastIndexOf("/"))}
                userRole={userRole}
                type={typeEpisode}
              />
            ))}
          </CardsLine>
          <CardsLine>
            Gender: <CardsLimit>{gender}</CardsLimit>
          </CardsLine>
          <CardsLine>
            Located at:{" "}
            <CardsLimit shouldBlur={userRole !== "Rick"}>
              {location.name}
            </CardsLimit>
          </CardsLine>
          <CardsLine>
            Origin: <CardsLimit>{origin.name}</CardsLimit>
          </CardsLine>
          <CardsLine>
            Species: <CardsLimit>{species}</CardsLimit>
          </CardsLine>
          <CardsLine>
            Status: <CardsLimit>{status}</CardsLimit>
          </CardsLine>
          {type && (
            <CardsLine>
              Type: <CardsLimit> {type}</CardsLimit>
            </CardsLine>
          )}
          <CardsLine>
            Created at:{" "}
            <CardsLimit>
              {createDate.getDate() +
                "/" +
                (createDate.getMonth() + 1) +
                "/" +
                createDate.getFullYear()}
            </CardsLimit>
          </CardsLine>
        </>
      ) : (
        <CharacterImage src={image} alt={name} />
      )}
    </CharacterContainer>
  );
}

export default Character;
