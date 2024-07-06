import useFetchByType from "../../hooks/useFetchByType";
import { APIType } from "../../types/Api";
import { UserRoles } from "../../types/User";
import { CardsLimit } from "../cards/styles";

interface MoreInfoProps {
  id: string;
  userRole: UserRoles;
  type: APIType;
  setTitleData: (val: string) => void;
  isLast?: boolean;
}

const MoreInfo = ({
  id,
  userRole,
  type,
  setTitleData,
  isLast = false,
}: MoreInfoProps) => {
  const { data: episode } = useFetchByType(id, type);
  setTitleData(episode);
  return (
    <CardsLimit shouldBlur={userRole !== "Rick"}>
      {episode} {isLast ? "" : ","}
    </CardsLimit>
  );
};

export default MoreInfo;
