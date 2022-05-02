import { ServerRes } from "../../utils/utils.types";

export interface Character {
  id: number;
}

export type CharacterList = Character[]

export type CharactersAPI = CharacterList

export interface CharactersService {
  getCharacters: (params: {}) => ServerRes<CharactersAPI>,
}