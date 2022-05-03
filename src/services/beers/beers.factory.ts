import initBeersService from "./beers"
import { httpClient } from "../../utils/utils";

const createBeerService = () => {
  return initBeersService(httpClient);
}

export default createBeerService;