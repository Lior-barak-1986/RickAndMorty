import React, { useState } from "react";
import { CharacterType } from "../../types/Characters";
import {
  CharacterContainer,
  CharacterHeader,
  CharacterImage,
  CharacterLimit,
  CharacterLine,
} from "./styles";

interface CharacterProps {
  data: CharacterType;
}

function Character({ data }: CharacterProps) {
  const {
    name,
    created,
    episode,
    gender,
    id,
    image,
    location,
    origin,
    species,
    status,
    type,
    url,
  } = data;
  const [isFlipped, setIsFlipped] = useState(false);
  const onClick = () => {
    setIsFlipped((val) => !val);
  };

  return (
    <CharacterContainer onClick={onClick} rotate={isFlipped}>
      <CharacterHeader>{name}</CharacterHeader>
      {isFlipped ? (
        <>
          <CharacterLine>
            Appeared at:
            <CharacterLimit shouldBlur={true}>{episode}</CharacterLimit>
          </CharacterLine>
          <CharacterLine>
            Gender:
            <CharacterLimit>{gender}</CharacterLimit>
          </CharacterLine>
          <CharacterLine>
            Located at:
            <CharacterLimit shouldBlur={true}>{location.name}</CharacterLimit>
          </CharacterLine>
          <CharacterLine>
            Origin:
            <CharacterLimit>{origin.name}</CharacterLimit>
          </CharacterLine>
          <CharacterLine>
            Species:
            <CharacterLimit>{species}</CharacterLimit>
          </CharacterLine>
          <CharacterLine>
            Status:
            <CharacterLimit>{status}</CharacterLimit>
          </CharacterLine>
          {type && (
            <CharacterLine>
              Type:
              <CharacterLimit> {type}</CharacterLimit>
            </CharacterLine>
          )}
          <CharacterLine>
            Created at:
            <CharacterLimit>{created}</CharacterLimit>
          </CharacterLine>
        </>
      ) : (
        <CharacterImage src={image} alt={name} />
      )}
    </CharacterContainer>
  );
}

export default Character;
