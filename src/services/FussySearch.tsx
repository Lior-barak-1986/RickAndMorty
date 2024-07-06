import Fuse, { IFuseOptions } from "fuse.js";

export const getFuzzyResults = (
  items: Array<unknown>,
  options: IFuseOptions<unknown>,
  searchTerm: string,
  limit = 10
) => {
  const fuse = new Fuse(items, options);
  return fuse.search(searchTerm).slice(0, limit);
};
