import { CharacterType } from "./Characters";
import { EpisodeType } from "./Episodes";
import { LocationType } from "./Locations";

export type APIError = {
  error: string;
};

export type APIData = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Array<CharacterType | EpisodeType | LocationType>;
};

type APITypeCharacter = "Character";

type APITypeEpisode = "Episode";

type APITypeLocation = "Location";

export const typeCharacter: APITypeCharacter = "Character";
export const typeEpisode: APITypeEpisode = "Episode";
export const typeLocation: APITypeLocation = "Location";

export type APIType = APITypeCharacter | APITypeEpisode | APITypeLocation;
