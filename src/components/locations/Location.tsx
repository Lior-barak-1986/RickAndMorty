import React, { useState } from "react";
import { LocationType } from "../../types/Locations";
import { LocationContainer, LocationHeader } from "./styles";
import { UserRoles } from "../../types/User";
import { CardsLimit, CardsLine } from "../cards/styles";

interface LocationProps {
  data: LocationType;
  userRole: UserRoles;
}

function Location({ data, userRole }: LocationProps) {
  const { name, created, type, dimension, residents, url, id } = data;
  const [isFlipped, setIsFlipped] = useState(false);
  const onClick = () => {
    setIsFlipped((val) => !val);
  };

  return (
    <LocationContainer onClick={onClick} rotate={isFlipped}>
      <LocationHeader>{name}</LocationHeader>
      <CardsLine>
        Residents:
        <CardsLimit shouldBlur={userRole !== "Rick"}>{residents}</CardsLimit>
      </CardsLine>
      <CardsLine>
        Dimension:
        <CardsLimit shouldBlur={userRole !== "Rick"}>{dimension}</CardsLimit>
      </CardsLine>
      <CardsLine>
        Type:
        <CardsLimit>{type}</CardsLimit>
      </CardsLine>
      <CardsLine>
        Created at:
        <CardsLimit>{new Date(created).toISOString()}</CardsLimit>
      </CardsLine>
    </LocationContainer>
  );
}

export default Location;
