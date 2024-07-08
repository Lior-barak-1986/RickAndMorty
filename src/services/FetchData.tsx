import { users } from "../db/users";
import { APIType } from "../types/Api";
import { UserPartial } from "../types/User";
import { baseURL, fetchData } from "../util";

export const fetchAllByType = async (dataType: APIType, params = "") => {
  const res = [];
  try {
    const response = await fetchByType(dataType, `?${params}`);
    res.push(response);
    for (let i = 2; i < response.info.pages + 1; i++) {
      res.push(await fetchByType(dataType, `?page=${i}&${params}`));
    }
  } catch (e: any) {
    throw new Error(e);
  }
  return res;
};

export const fetchByType = async (dataType: APIType, params = "") => {
  return await fetchData(baseURL + `/${dataType.toLowerCase()}/${params}`);
};

export const login = ({ username, password }: UserPartial) => {
  const user = users.find((user) => user.username === username);
  if (user && user.password === password) {
    return { username: user.username, role: user.role };
  }
  throw new Error("Username and Password are incorrect");
};
