import { AxiosInstance } from 'axios';
import initBeersService from './beers';
import createBeerService from './beers.factory';

describe('Beers service', () => {
  it('factory should return an initialized service', () => {
    const receivedService = createBeerService();
    expect(receivedService).toBeDefined();
  });

  it('initialize service return BeersService instance', () => {
    const fakeAxiosInstance = {
      get: jest.fn()
    } as unknown as AxiosInstance

    const beersService = initBeersService(fakeAxiosInstance);
    expect(beersService).toHaveProperty('getBeers');
    expect(beersService).toHaveProperty('findBeer');
  });
})