import {  useState } from 'react';
import { AxiosResponse } from 'axios';
import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import { serialize } from '../utils/utils';
import { createCharacterService } from '../services/characters';
import { CharactersAPI, FiltrableParams } from '../services/characters/characters.types';

const useCharacters = () => {

  const [searchParams, setSearchParams] = useState<FiltrableParams>({
    page: 1,
    name: undefined,
    status: undefined,
    species: undefined,
    type: undefined,
  });

  /**
   * Characters service instance
   */
  const { getCharacters } = createCharacterService();

  /**
   * React query tool to handle requests
   */
  const infiniteQueryRequester = (queryObserverResult: QueryFunctionContext) => {
    const targetPage = queryObserverResult.pageParam || 1;
    return getCharacters({
      ...searchParams,
      page: targetPage,
    });
  };

  const infiniteQueryRequestConfig = {
    getNextPageParam: (lastPage: CharactersAPI, pages: CharactersAPI[]) => {
      /**
       * hasNextPage is true only if 
       * getNextPageParam returns is different than undefined
       */
      return lastPage?.info?.next ? pages.length + 1 : undefined
    },
    keepPreviousData: true,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    initialData: {
      pageParams: [1],
      pages: [],
    },
  }

  const charactersResponseSerializer = (response: AxiosResponse<CharactersAPI>): CharactersAPI => {
    const cameWithData = response.data.results.length > 0;
    if (!cameWithData) {
      return {
        info: {
          count: 0,
          pages: 0,
          next: null,
          prev: null,
        },
        results: [],
      };
    }
    const sanitizedData = {
      ...response.data,
      results: response.data.results.map(character => {
        const { created } = character;
        const createdDate = new Date(created);
        const createdMonth = createdDate.getMonth();
        const createdYear = createdDate.getFullYear();
        const simplifiedDate = createdMonth + '/' + createdYear;
        return {
          ...character,
          created: simplifiedDate,
        };
      }),
    }
    return sanitizedData;
  };

  const charactersResponseHandler = serialize(charactersResponseSerializer, infiniteQueryRequester);

  const {
    /* Data */
    data: charactersData,

    /* flags */
    isError,
    isFetching,
    isRefetchError,
    isFetchingNextPage,
    hasNextPage,

    /* Tools */
    fetchNextPage,
  } = useInfiniteQuery(
    ['characters'],
    charactersResponseHandler,
    infiniteQueryRequestConfig,
  );

  const charactersList = charactersData?.pages.map(page => page.results).flat() || [];

  const shouldDisplayMainError = isError && !isFetching && !isRefetchError && charactersList.length === 0;

  const shouldDisplayPageLoader = isFetchingNextPage && hasNextPage;

  return {
    /* Data */
    charactersList,

    /* flags */
    failedCharacterService: isError,
    fetchingCharacters: isFetching,
    fetchingMoreCharacters: isFetchingNextPage,
    failedFetchingMoreCharacters: isRefetchError,
    hasMoreCharacters: hasNextPage,
    shouldDisplayMainError,
    shouldDisplayPageLoader,

    /* Tools */
    getNextPage: fetchNextPage,
    searchCharacters: setSearchParams,
  };
}

export default useCharacters;