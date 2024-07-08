import React, { MouseEvent } from "react";
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
  openLogin: (e: MouseEvent<unknown>) => void;
}

const Card = ({ data, userRole, openLogin }: CardProps) => {
  return (
    <>
      {(data as CharacterType).image && (
        <Character
          data={data as CharacterType}
          openLogin={openLogin}
          userRole={userRole}
        />
      )}
      {(data as EpisodeType).air_date && (
        <Episode
          data={data as EpisodeType}
          openLogin={openLogin}
          userRole={userRole}
        />
      )}
      {(data as LocationType).residents && (
        <Location
          data={data as LocationType}
          openLogin={openLogin}
          userRole={userRole}
        />
      )}
    </>
  );
};

export default Card;
