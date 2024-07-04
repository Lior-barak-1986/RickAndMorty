import React, { useState } from "react";
import { CharacterType } from "../../types/Characters";
import {
  CharacterContainer,
  CharacterHeader,
  CharacterImage,
  CharacterLimit,
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
          <CharacterLimit>Appeared at: {episode}</CharacterLimit>
          <CharacterLimit>Gender: {gender}</CharacterLimit>
          <CharacterLimit>Located at: {location.name}</CharacterLimit>
          <CharacterLimit>Origin: {origin.name}</CharacterLimit>
          <CharacterLimit>Species: {species}</CharacterLimit>
          <CharacterLimit>Status: {status}</CharacterLimit>
          {type && <CharacterLimit>Type: {type}</CharacterLimit>}
          <CharacterLimit>Created at: {created}</CharacterLimit>
        </>
      ) : (
        <CharacterImage src={image} alt={name} />
      )}
    </CharacterContainer>
  );
}

export default Character;
