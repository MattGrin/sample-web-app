import { Service } from '../../utils/utils.types';
import { CharactersService } from './characters.types';


const initCharactersService: Service<CharactersService> = (httpClient) => {

  const getCharacters: CharactersService['getCharacters'] = ({}) => httpClient.get(`/`)

  return {
    getCharacters,
  }
};

export default initCharactersService