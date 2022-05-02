import { Service } from '../../utils/utils.types';
import { CharactersService } from './characters.types';


const initCharactersService: Service<CharactersService> = (httpClient) => {

  const getCharacters: CharactersService['getCharacters'] = ({
    page = 1,
    name,
    status,
    species,
    type,
    gender,
  }) => {
    const queryParamsPayload = Object.assign(
      { page },
      name && { name },
      status && { status },
      species && { species },
      type && { type },
      gender && { gender }
    )
    const queryParamsString = new URLSearchParams(queryParamsPayload)

    return httpClient.get('/character/?' + queryParamsString)
  }

  return {
    getCharacters,
  }
};

export default initCharactersService