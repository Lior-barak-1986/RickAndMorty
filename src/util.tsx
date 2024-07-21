import { APIType } from "./types/Api";
import { CharacterType } from "./types/Characters";
import { EpisodeType } from "./types/Episodes";
import { LocationType } from "./types/Locations";
import { UserRoles } from "./types/User";

export const baseURL = "https://rickandmortyapi.com/api";

export const fetchData = async (val: string) => {
  const res = await fetch(val);
  const result = await res.json();
  if (result.error) {
    if (result.error === "There is nothing here")
      return { results: [], info: { pages: 0 } };
    throw new Error(result.error);
  }
  return result;
};

export const dateToISO8601 = (date: Date) => {
  return (
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
  );
};

export const addData = (
  val: string,
  setData: (value: React.SetStateAction<string>) => void
) => {
  if (val) {
    setData((curr) => (curr.includes(val) ? curr + val + " ," : curr));
  }
};

export const defaultUser: { username: string; role: UserRoles } = {
  username: "",
  role: "Visitor",
};

export const instanceOfEpisode = (object: any): object is EpisodeType => {
  return "air_date" in object;
};

export const instanceOfLocation = (object: any): object is LocationType => {
  return "residents" in object;
};

export const instanceOfCharacterType = (
  object: any
): object is CharacterType => {
  return "image" in object;
};

export const instanceOf = (object: any): APIType => {
  if (instanceOfEpisode(object)) return "Episode";
  if (instanceOfLocation(object)) return "Location";
  if (instanceOfCharacterType(object)) return "Character";
  throw new Error("type not found");
};
