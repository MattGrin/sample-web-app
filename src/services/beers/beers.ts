import { Service } from '../../utils/utils.types';
import { BeersService } from './beers.types';


const initBeersService: Service<BeersService> = (httpClient) => {

  const BEERS_API_URL = 'beers'
  /**
   * Get List of BeersItems
   */
  const getBeers: BeersService['getBeers'] = ({
    page = 1,
    perPage = 10,
  }) => httpClient.get(`${BEERS_API_URL
    }?page=${page}&per_page=${perPage}`)


  /**
   * Get list of matched BeerItems
   */
  const findBeer: BeersService['findBeer'] = ({
    name,
  }) => {
    const sanitizedSearchNameParam = name.replace(/\s/g, '_');
    return httpClient.get(`${BEERS_API_URL}?beer_name=${sanitizedSearchNameParam}`);
  }

  return {
    getBeers,
    findBeer,
  }
};

export default initBeersService