import React, { useMemo, useState } from "react";
import { EpisodeType } from "../../types/Episodes";
import { EpisodeContainer, EpisodeHeader } from "./styles";
import { UserRoles } from "../../types/User";
import { CardsLimit, CardsLine } from "../cards/styles";
import MoreInfo from "../moreInfo/MoreInfo";
import { typeCharacter } from "../../types/Api";
import { addData, dateToISO8601 } from "../../util";

interface EpisodeProps {
  data: EpisodeType;
  userRole: UserRoles;
}

function Episode({ data, userRole }: EpisodeProps) {
  const { name, created, episode, air_date, characters, id } = data;
  const [isFlipped, setIsFlipped] = useState(false);
  const [titleData, setTitleData] = useState("");

  const onClick = () => {
    setIsFlipped((val) => !val);
  };

  const addStringData = (val: string) => addData(val, setTitleData);

  const MoreInfoComponents = useMemo(
    () =>
      characters.map((val, ind) => (
        <MoreInfo
          id={val.substring(val.lastIndexOf("/"))}
          userRole={userRole}
          type={typeCharacter}
          setTitleData={addStringData}
          isLast={ind === characters.length - 1}
        />
      )),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [episode, userRole, id]
  );

  const createDate = new Date(created);

  const airDate = new Date(air_date);

  return (
    <EpisodeContainer onClick={onClick} rotate={isFlipped}>
      <EpisodeHeader>{name}</EpisodeHeader>
      <CardsLine>
        Episode: <CardsLimit>{episode}</CardsLimit>
      </CardsLine>
      <CardsLine>
        Air date:{" "}
        <CardsLimit shouldBlur={userRole !== "Rick"}>
          {" "}
          {dateToISO8601(airDate)}
        </CardsLimit>
      </CardsLine>
      <CardsLine
        title={userRole === "Rick" ? titleData.slice(0, -1) : undefined}
      >
        Characters: {MoreInfoComponents}
      </CardsLine>
      <CardsLine>
        Created at:
        <CardsLimit> {dateToISO8601(createDate)}</CardsLimit>
      </CardsLine>
    </EpisodeContainer>
  );
}

export default Episode;
