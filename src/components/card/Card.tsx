import React, { MouseEvent } from "react";
import { CharacterType } from "../../types/Characters";
import { EpisodeType } from "../../types/Episodes";
import { LocationType } from "../../types/Locations";
import Character from "../character/Character";
import Episode from "../episodes/Episode";
import Location from "../locations/Location";
import useLogin from "../../hooks/useLogin";
import { UserRoles } from "../../types/User";
import {
  APIType,
  typeCharacter,
  typeEpisode,
  typeLocation,
} from "../../types/Api";
import { instanceOf } from "../../util";

interface CardProps {
  data: EpisodeType | CharacterType | LocationType;
  openLogin: (e: MouseEvent<unknown>) => void;
}

const Card = ({ data, openLogin }: CardProps) => {
  const {
    userObj: { role },
  } = useLogin();
  try {
    const type = instanceOf(data);
    return (
      <CardFactoryComponent
        data={data}
        openLogin={openLogin}
        userRole={role}
        type={type}
      />
    );
  } catch (e) {
    return null;
  }
};

interface CardFactoryComponentInterface {
  data: EpisodeType | CharacterType | LocationType;
  userRole: UserRoles;
  openLogin: (e: MouseEvent<unknown>) => void;
  type: APIType;
}

const CardFactoryComponent = ({
  data,
  openLogin,
  userRole,
  type,
}: CardFactoryComponentInterface) => {
  switch (type) {
    case typeCharacter:
      return (
        <Character
          data={data as CharacterType}
          openLogin={openLogin}
          userRole={userRole}
        />
      );
    case typeEpisode:
      return (
        <Episode
          data={data as EpisodeType}
          openLogin={openLogin}
          userRole={userRole}
        />
      );
    case typeLocation:
      return (
        <Location
          data={data as LocationType}
          openLogin={openLogin}
          userRole={userRole}
        />
      );
    default:
      return null;
  }
};

export default Card;
