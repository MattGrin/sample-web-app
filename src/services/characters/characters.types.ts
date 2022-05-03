import { ServerRes } from "../../utils/utils.types";

interface Linkable {
  name: string,
  url: string
}

export interface Character {
  id: number,
  name: string,
  status: 'alive' | 'dead' | 'unknown', 
  species: string,
  type: string,
  gender: 'female' | 'male' | 'genderless' | 'unknown',
  origin: Linkable,
  location: Linkable,
  image: string,
  episode: string[],
  url: string,
  created: string
}

interface ResponsePaginationMeta {
  count: number,
  pages: number,
  next: string | null,
  prev: string | null,
}

export type CharacterList = Character[]

export interface CharactersAPI {
  info: ResponsePaginationMeta,
  results: CharacterList
}

export interface FiltrableParams extends Partial<Pick<
    Character,
    'name' | 'status' | 'species' | 'type' | 'gender'
  >> {
  page?: number,
}

export interface CharactersService {
  getCharacters: (params: FiltrableParams) => ServerRes<CharactersAPI>,
}