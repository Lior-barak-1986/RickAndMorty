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
