import React from "react";
import { CharacterType } from "../../types/Characters";
import { EpisodeType } from "../../types/Episodes";
import { LocationType } from "../../types/Locations";
import Character from "../character/Character";
import Episode from "../episodes/Episode";
import Location from "../locations/Location";
import { UserRoles } from "../../types/User";

interface CardProps {
  data: EpisodeType | CharacterType | LocationType;
  userRole: UserRoles;
}

const Card = ({ data, userRole }: CardProps) => {
  return (
    <>
      {(data as CharacterType).image && (
        <Character data={data as CharacterType} userRole={userRole} />
      )}
      {(data as EpisodeType).air_date && (
        <Episode data={data as EpisodeType} userRole={userRole} />
      )}
      {(data as LocationType).dimension && (
        <Location data={data as LocationType} userRole={userRole} />
      )}
    </>
  );
};

export default Card;
