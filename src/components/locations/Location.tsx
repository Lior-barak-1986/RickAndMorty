import React, { useState } from "react";
import { LocationType } from "../../types/Locations";
import { LocationContainer, LocationHeader, LocationLimit } from "./styles";

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
      <LocationLimit>Residents: {residents}</LocationLimit>
      <LocationLimit>Dimension: {dimension}</LocationLimit>
      <LocationLimit>Type: {type}</LocationLimit>
      <LocationLimit>Created at: {created}</LocationLimit>
    </LocationContainer>
  );
}

export default Location;
