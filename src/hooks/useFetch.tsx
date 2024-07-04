import { useQuery } from "@tanstack/react-query";
import {
  fetchAllCharacters,
  fetchAllEpisodes,
  fetchAllLocations,
} from "../services/FetchData";

const useFetch = (val: string) => {
  const { data, status, isError, isLoading } = useQuery({
    queryKey: ["fetch", val],
    queryFn: async () => {
      if (!val) return [];
      try {
        const responses = await Promise.all([
          fetchAllCharacters(`name=${val}`),
          fetchAllLocations(`name=${val}`),
          fetchAllEpisodes(`name=${val}`),
        ]);
        // console.log(responses);
        return responses.reduce(
          (curr, acc) => curr.concat(...acc.map((val) => val.results)),
          []
        );
      } catch (e: any) {
        // console.log("here");
        // console.log(e);
        throw new Error(e);
      }
    },
    refetchOnWindowFocus: false,
  });
  return {
    data,
    status,
    isError,
    isLoading,
  };
};

export default useFetch;
