import { MouseEvent } from "react";
import useFetchByType from "../../hooks/useFetchByType";
import { APIType } from "../../types/Api";
import { UserRoles, typeAdmin } from "../../types/User";
import { CardsLimit } from "../cards/styles";

interface MoreInfoProps {
  id: string;
  userRole: UserRoles;
  type: APIType;
  setTitleData: (val: string) => void;
  openLoginMenu: (e: MouseEvent<any>) => void;
  isLast?: boolean;
}

const MoreInfo = ({
  id,
  userRole,
  type,
  setTitleData,
  openLoginMenu,
  isLast = false,
}: MoreInfoProps) => {
  const { data: episode } = useFetchByType(id, type);
  setTitleData(episode);
  return (
    <CardsLimit shouldBlur={userRole !== typeAdmin} onClick={openLoginMenu}>
      {episode} {isLast ? "" : ","}
    </CardsLimit>
  );
};

export default MoreInfo;
