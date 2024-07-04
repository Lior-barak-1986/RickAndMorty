import React from "react";
import { CharacterType } from "../../types/Characters";
import { EpisodeType } from "../../types/Episodes";
import { LocationType } from "../../types/Locations";
import Character from "../character/Character";
import Episode from "../episodes/Episode";
import Location from "../locations/Location";

interface CardProps {
  data: EpisodeType | CharacterType | LocationType;
}

const Card = ({ data }: CardProps) => {
  return (
    <>
      {(data as CharacterType).image && (
        <Character data={data as CharacterType} />
      )}
      {(data as EpisodeType).air_date && <Episode data={data as EpisodeType} />}
      {(data as LocationType).dimension && (
        <Location data={data as LocationType} />
      )}
    </>
  );
};

export default Card;
