import React, { useMemo, useState } from "react";
import { LocationType } from "../../types/Locations";
import { LocationContainer, LocationHeader } from "./styles";
import { UserRoles } from "../../types/User";
import { CardsLimit, CardsLine } from "../cards/styles";
import { addData, dateToISO8601 } from "../../util";
import MoreInfo from "../moreInfo/MoreInfo";
import { typeCharacter } from "../../types/Api";

interface LocationProps {
  data: LocationType;
  userRole: UserRoles;
}

function Location({ data, userRole }: LocationProps) {
  const { name, created, type, dimension, residents, id } = data;
  const [titleData, setTitleData] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const onClick = () => {
    setIsFlipped((val) => !val);
  };

  const addStringData = (val: string) => addData(val, setTitleData);

  const MoreInfoComponents = useMemo(
    () =>
      residents.map((val, ind) => (
        <MoreInfo
          id={val.substring(val.lastIndexOf("/"))}
          userRole={userRole}
          type={typeCharacter}
          setTitleData={addStringData}
          isLast={ind === residents.length - 1}
        />
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [residents, userRole, id]
  );

  const createDate = new Date(created);

  return (
    <LocationContainer onClick={onClick} rotate={isFlipped}>
      <LocationHeader>{name}</LocationHeader>
      {residents.length > 0 && (
        <CardsLine title={titleData}>Residents: {MoreInfoComponents}</CardsLine>
      )}
      <CardsLine>
        Dimension:{" "}
        <CardsLimit shouldBlur={userRole !== "Rick"}>{dimension}</CardsLimit>
      </CardsLine>
      <CardsLine>
        Type: <CardsLimit>{type}</CardsLimit>
      </CardsLine>
      <CardsLine>
        Created at: <CardsLimit> {dateToISO8601(createDate)}</CardsLimit>
      </CardsLine>
    </LocationContainer>
  );
}

export default Location;
