import { AxiosInstance } from 'axios';
import initBeersService from './beers';
import createBeerService from './beers.factory';

describe('Beers service', () => {
  it('factory should return an initialized service', () => {
    const receivedService = createBeerService();
    expect(receivedService).toBeDefined();
  });

  it('initialize service return BeersService instance', async () => {
    const fakeAxiosInstance = {
      get: (a: any) => new Promise((resolve) => resolve(a)),
    } as unknown as AxiosInstance

    const beersService = initBeersService(fakeAxiosInstance);
    expect(beersService).toHaveProperty('getBeers');
    expect(beersService).toHaveProperty('findBeer');

    expect(beersService.getBeers).toBeInstanceOf(Function);
    expect(beersService.findBeer).toBeInstanceOf(Function);

    const someBeersResponseArgs = {
      page: 1,
      perPage: 2,
    };

    const someBeersPromise = beersService.getBeers(someBeersResponseArgs)

    const someFoundBeerResponseArgs = {
      name: 'some beer name',
    };

    const someFoundBeerPromise = beersService.findBeer(someFoundBeerResponseArgs)

    expect(someBeersPromise).toBeInstanceOf(Promise);

    const someBeersResponse = await someBeersPromise
    const sanitizedSomeBeerRes = `beers?page=${someBeersResponseArgs.page}&per_page=${someBeersResponseArgs.perPage}`
    expect(someBeersResponse).toEqual(sanitizedSomeBeerRes);

    expect(someFoundBeerPromise).toBeInstanceOf(Promise);
    const sanitizedSomeFoundBeerRes = `beers?beer_name=${someFoundBeerResponseArgs.name.replace(/\s/g, '_')}`

    const someFoundBeerResponse = await someFoundBeerPromise
    expect(someFoundBeerResponse).toEqual(sanitizedSomeFoundBeerRes);

    //})
  });
})