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
  openLoginMenu: (e: MouseEvent<unknown>) => void;
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
  const { data } = useFetchByType(id, type);
  setTitleData(data);
  return (
    <CardsLimit shouldBlur={userRole !== typeAdmin} onClick={openLoginMenu}>
      {data} {isLast ? "" : ","}
    </CardsLimit>
  );
};

export default MoreInfo;
