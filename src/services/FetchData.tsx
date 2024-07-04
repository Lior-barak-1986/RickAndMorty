import { baseURL, fetchData } from "../util";

export const fetchAllLocations = async (params = "") => {
  const res = [];
  try {
    const response = await fetchLocations(params);
    if (response.error) {
      if (response.error === "There is nothing here") {
        return [];
      }
      throw new Error(response.error);
    }
    res.push(response);
    for (let i = 2; i < response?.info?.pages + 1; i++) {
      res.push(await fetchLocations(`page=${i}&${params}`));
    }
  } catch (e: any) {
    throw new Error(e);
  }
  return res;
};
export const fetchAllCharacters = async (params = "") => {
  const res = [];
  try {
    const response = await fetchCharacters(params);
    if (response.error) {
      if (response.error === "There is nothing here") {
        return [];
      }
      throw new Error(response.error);
    }
    res.push(response);
    for (let i = 2; i < response.info.pages + 1; i++) {
      res.push(await fetchCharacters(`page=${i}&${params}`));
    }
  } catch (e: any) {
    throw new Error(e);
  }
  return res;
};
export const fetchAllEpisodes = async (params = "") => {
  const res = [];
  try {
    const response = await fetchEpisodes(params);
    if (response.error) {
      if (response.error === "There is nothing here") {
        return [];
      }
      throw new Error(response.error);
    }
    res.push(response);
    for (let i = 2; i < response.info.pages + 1; i++) {
      res.push(await fetchEpisodes(`page=${i}&${params}`));
    }
  } catch (e: any) {
    throw new Error(e);
  }
  return res;
};

export const fetchLocations = async (params = "") => {
  return await fetchData(baseURL + `/location/?${params}`);
};
export const fetchCharacters = async (params = "") => {
  return await fetchData(baseURL + `/character/?${params}`);
};
export const fetchEpisodes = async (params = "") => {
  return await fetchData(baseURL + `/episode/?${params}`);
};
