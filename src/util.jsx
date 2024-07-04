export const baseURL = "https://rickandmortyapi.com/api";

export const fetchData = async (...args) => {
  const res = await fetch(...args);
  return await res.json();
};
