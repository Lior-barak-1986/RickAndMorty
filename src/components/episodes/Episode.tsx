import React, { useMemo, useState, MouseEvent } from "react";
import { EpisodeType } from "../../types/Episodes";
import { EpisodeContainer, EpisodeHeader } from "./styles";
import { UserRoles, typeAdmin } from "../../types/User";
import { CardsLimit, CardsLine } from "../cards/styles";
import MoreInfo from "../moreInfo/MoreInfo";
import { typeCharacter } from "../../types/Api";
import { addData, dateToISO8601 } from "../../util";

interface EpisodeProps {
  data: EpisodeType;
  userRole: UserRoles;
  openLogin: (e: MouseEvent<any>) => void;
}

function Episode({ data, userRole, openLogin }: EpisodeProps) {
  const { name, created, episode, air_date, characters, id } = data;
  const [isFlipped, setIsFlipped] = useState(false);
  const [titleData, setTitleData] = useState("");
  const [seeMore, setSeeMore] = useState(false);

  const onClick = () => {
    setIsFlipped((val) => !val);
  };

  const addStringData = (val: string) => addData(val, setTitleData);

  const MoreInfoComponents = useMemo(
    () =>
      characters.map((val, ind) => (
        <MoreInfo
          key={val.substring(val.lastIndexOf("/"))}
          id={val.substring(val.lastIndexOf("/"))}
          userRole={userRole}
          type={typeCharacter}
          setTitleData={addStringData}
          isLast={ind === characters.length - 1}
          openLoginMenu={openLogin}
        />
      )),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [episode, userRole, id]
  );

  const onClickSeeMore = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setSeeMore((val) => !val);
  };

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
        <CardsLimit shouldBlur={userRole !== typeAdmin} onClick={openLogin}>
          {" "}
          {dateToISO8601(airDate)}
        </CardsLimit>
      </CardsLine>
      <CardsLine
        title={userRole === typeAdmin ? titleData.slice(0, -2) : undefined}
        onClick={onClickSeeMore}
      >
        Characters: {seeMore ? MoreInfoComponents : "Click to see More"}
      </CardsLine>
      <CardsLine>
        Created at:
        <CardsLimit> {dateToISO8601(createDate)}</CardsLimit>
      </CardsLine>
    </EpisodeContainer>
  );
}

export default Episode;
