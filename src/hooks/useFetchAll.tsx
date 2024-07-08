import { useQuery } from "@tanstack/react-query";
import { fetchAllByType } from "../services/FetchData";
import { allTypesArray } from "../types/Api";

const useFetchAll = (val: string) => {
  const { data, status, isError, isLoading } = useQuery({
    queryKey: ["fetch", val],
    queryFn: async () => {
      if (!val) return [];
      try {
        const responses = await Promise.all(
          allTypesArray.map((type) => fetchAllByType(type, `name=${val}`))
        );
        return responses.reduce(
          // @ts-ignore
          (curr, acc) => curr.concat(...acc.map((val) => val.results)),
          []
        );
      } catch (e: any) {
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

export default useFetchAll;
