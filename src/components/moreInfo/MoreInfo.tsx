import useFetchByType from "../../hooks/useFetchByType";
import { APIType } from "../../types/Api";
import { UserRoles } from "../../types/User";
import { CardsLimit } from "../cards/styles";

interface MoreInfoProps {
  id: string;
  userRole: UserRoles;
  type: APIType;
}

const MoreInfo = ({ id, userRole, type }: MoreInfoProps) => {
  const { data: episode } = useFetchByType(id, type);
  return (
    <CardsLimit
      shouldBlur={userRole !== "Rick"}
      title={userRole === "Rick" ? JSON.stringify(episode) : undefined}
    >
      {episode},
    </CardsLimit>
  );
};

export default MoreInfo;
