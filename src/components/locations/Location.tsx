import React, { useState } from "react";
import { LocationType } from "../../types/Locations";
import {
  LocationContainer,
  LocationHeader,
  LocationLimit,
  LocationLine,
} from "./styles";

interface LocationProps {
  data: LocationType;
}

function Location({ data }: LocationProps) {
  const { name, created, type, dimension, residents, url, id } = data;
  const [isFlipped, setIsFlipped] = useState(false);
  const onClick = () => {
    setIsFlipped((val) => !val);
  };

  return (
    <LocationContainer onClick={onClick} rotate={isFlipped}>
      <LocationHeader>{name}</LocationHeader>
      <LocationLine>
        Residents:
        <LocationLimit shouldBlur> {residents}</LocationLimit>
      </LocationLine>
      <LocationLine>
        Dimension:
        <LocationLimit shouldBlur>{dimension}</LocationLimit>
      </LocationLine>
      <LocationLine>
        Type:
        <LocationLimit>{type}</LocationLimit>
      </LocationLine>
      <LocationLine>
        Created at:
        <LocationLimit>{new Date(created).toISOString()}</LocationLimit>
      </LocationLine>
    </LocationContainer>
  );
}

export default Location;
