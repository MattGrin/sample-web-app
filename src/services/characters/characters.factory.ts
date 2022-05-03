import initCharactersService from "./characters"
import { httpClient } from "../../utils/utils";

const createCharacterService = () => {
  return initCharactersService(httpClient);
}

export default createCharacterService;