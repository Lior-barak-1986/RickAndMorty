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
