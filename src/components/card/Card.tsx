import React, { MouseEvent } from "react";
import { CharacterType } from "../../types/Characters";
import { EpisodeType } from "../../types/Episodes";
import { LocationType } from "../../types/Locations";
import Character from "../character/Character";
import Episode from "../episodes/Episode";
import Location from "../locations/Location";
import useLogin from "../../hooks/useLogin";

interface CardProps {
  data: EpisodeType | CharacterType | LocationType;
  openLogin: (e: MouseEvent<unknown>) => void;
}

const Card = ({ data, openLogin }: CardProps) => {
  const {
    userObj: { role },
  } = useLogin();
  return (
    <>
      {(data as CharacterType).image && (
        <Character
          data={data as CharacterType}
          openLogin={openLogin}
          userRole={role}
        />
      )}
      {(data as EpisodeType).air_date && (
        <Episode
          data={data as EpisodeType}
          openLogin={openLogin}
          userRole={role}
        />
      )}
      {(data as LocationType).residents && (
        <Location
          data={data as LocationType}
          openLogin={openLogin}
          userRole={role}
        />
      )}
    </>
  );
};

export default Card;
