import { useRef } from 'react';
import { AxiosResponse } from 'axios';
import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import { createBeerService } from '../services/beers';
import { BeerList, BeersAPI } from '../services/beers/beers.types';
import { serialize } from '../utils/utils';

const useBeers = () => {
  /**
   * Beers service instance
   */
  const { getBeers } = createBeerService();
  const requestPageSize = useRef(2);

  /**
   * React query tool to handle requests
   */
  const infiniteQueryBeersRequester = (queryObserverResult: QueryFunctionContext) => {
    const targetPage = queryObserverResult.pageParam || 1;
    return getBeers({ page: targetPage, perPage: requestPageSize.current });
  };

  const infiniteQueryRequestConfig = {
    getNextPageParam: (response: BeersAPI, pages: any) => {
      return pages.length + 1
    },
    keepPreviousData: true,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    initialData: {
      pageParams: [1],
      pages: [],
    },
  }


  /**
   * Serializer to transform response to a list of BeerItems
   */
  const beersResponseSerializer = (response: AxiosResponse<BeersAPI>): BeerList => {
    const cameWithData = response.data.length > 0;
    if (!cameWithData) {
      return [];
    }
    return response.data;
  };

  const beersResponseHandler = serialize(beersResponseSerializer, infiniteQueryBeersRequester);

  const {
    /* Data */
    data: beersData,

    /* flags */
    isError,
    isFetching,
    isRefetchError,
    isFetchingNextPage,
    hasNextPage,

    /* Tools */
    fetchNextPage,
  } = useInfiniteQuery(
    ['beers'],
    beersResponseHandler,
    infiniteQueryRequestConfig,
  );

  const beersList = beersData?.pages.flat();

  return {
    /* Data */
    beersList,

    /* flags */
    failedBeersService: isError,
    fetchingItems: isFetching,
    fetchingMoreItems: isFetchingNextPage,
    failedFetchingMoreItems: isRefetchError,
    hasMoreItems: hasNextPage,

    /* Tools */
    fetchNextPage
  };
}

export default useBeers;