import { CharacterType } from "./Characters";
import { EpisodeType } from "./Episodes";
import { LocationType } from "./Locations";

export interface APIError {
  error: string;
}

export interface APIData {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: (CharacterType | EpisodeType | LocationType)[];
}

type APITypeCharacter = "Character";

type APITypeEpisode = "Episode";

type APITypeLocation = "Location";

export const typeCharacter: APITypeCharacter = "Character";
export const typeEpisode: APITypeEpisode = "Episode";
export const typeLocation: APITypeLocation = "Location";

export type APIType = APITypeCharacter | APITypeEpisode | APITypeLocation;
