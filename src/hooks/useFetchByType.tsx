import { useQuery } from "@tanstack/react-query";
import {
  fetchCharacters,
  fetchEpisodes,
  fetchLocations,
} from "../services/FetchData";
import {
  APIType,
  typeCharacter,
  typeEpisode,
  typeLocation,
} from "../types/Api";

const useFetchByType = (val: string, type: APIType) => {
  const { data, status, isError, isLoading } = useQuery({
    queryKey: ["fetch", type, val],
    queryFn: async () => {
      if (!val) return [];
      try {
        const response = await getFetch(type, val);
        return response.name;
      } catch (e: any) {
        throw new Error(e);
      }
    },
    refetchOnWindowFocus: false,
    retryOnMount: false,
  });
  return {
    data,
    status,
    isError,
    isLoading,
  };
};

const getFetch = (type: APIType, val: string) => {
  switch (type) {
    case typeCharacter:
      return fetchCharacters(val);
    case typeLocation:
      return fetchLocations(val);
    case typeEpisode:
      return fetchEpisodes(val);
    default:
      throw new Error("Type not found");
  }
};

export default useFetchByType;
