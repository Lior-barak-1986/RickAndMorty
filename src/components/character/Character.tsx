import React, { MouseEvent, useMemo, useState } from "react";
import { CharacterType } from "../../types/Characters";
import { CharacterContainer, CharacterHeader, CharacterImage } from "./styles";
import { UserRoles, typeAdmin } from "../../types/User";
import { typeEpisode } from "../../types/Api";
import { CardsLimit, CardsLine } from "../cards/styles";
import MoreInfo from "../moreInfo/MoreInfo";
import { addData, dateToISO8601 } from "../../util";

interface CharacterProps {
  data: CharacterType;
  userRole: UserRoles;
  openLogin: (e: MouseEvent<any>) => void;
}

function Character({ data, userRole, openLogin }: CharacterProps) {
  const {
    name,
    created,
    episode,
    gender,
    image,
    location,
    origin,
    species,
    status,
    type,
    id,
  } = data;
  const [isFlipped, setIsFlipped] = useState(false);
  const [titleData, setTitleData] = useState("");
  const [seeMore, setSeeMore] = useState(false);
  const onClick = () => {
    setIsFlipped((val) => !val);
  };

  const addStringData = (val: string) => addData(val, setTitleData);

  const MoreInfoComponents = useMemo(
    () =>
      episode.map((val, ind) => (
        <MoreInfo
          key={val.substring(val.lastIndexOf("/"))}
          id={val.substring(val.lastIndexOf("/"))}
          userRole={userRole}
          type={typeEpisode}
          setTitleData={addStringData}
          openLoginMenu={openLogin}
          isLast={ind === episode.length - 1}
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

  return (
    <CharacterContainer onClick={onClick} rotate={isFlipped}>
      <CharacterHeader>{name}</CharacterHeader>
      {isFlipped ? (
        <>
          <CardsLine
            title={userRole === typeAdmin ? titleData.slice(0, -2) : undefined}
            onClick={onClickSeeMore}
          >
            Appeared at: {seeMore ? MoreInfoComponents : "Click to see More"}
          </CardsLine>
          <CardsLine>
            Gender: <CardsLimit>{gender}</CardsLimit>
          </CardsLine>
          <CardsLine>
            Located at:{" "}
            <CardsLimit shouldBlur={userRole !== typeAdmin} onClick={openLogin}>
              {location.name}
            </CardsLimit>
          </CardsLine>
          <CardsLine>
            Origin: <CardsLimit>{origin.name}</CardsLimit>
          </CardsLine>
          <CardsLine>
            Species: <CardsLimit>{species}</CardsLimit>
          </CardsLine>
          <CardsLine>
            Status: <CardsLimit>{status}</CardsLimit>
          </CardsLine>
          {type && (
            <CardsLine>
              Type: <CardsLimit> {type}</CardsLimit>
            </CardsLine>
          )}
          <CardsLine>
            Created at: <CardsLimit>{dateToISO8601(createDate)}</CardsLimit>
          </CardsLine>
        </>
      ) : (
        <CharacterImage src={image} alt={name} />
      )}
    </CharacterContainer>
  );
}

export default Character;
