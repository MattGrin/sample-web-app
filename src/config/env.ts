enum DOMAINS {
  PUNK_API = 'PUNK_API',
  RICK_AND_MORTY = 'RICK_AND_MORTY',
}

const ROOT = {
  BASE_URL_COLLECTION: {
    [DOMAINS.PUNK_API]:  'https://api.punkapi.com/v2',
    [DOMAINS.RICK_AND_MORTY]: 'https://rickandmortyapi.com/api'
  },
  ACTIVE_DOMAIN: DOMAINS.RICK_AND_MORTY,
}

export default {
  ...ROOT,
  BASE_URL: ROOT.BASE_URL_COLLECTION[ROOT.ACTIVE_DOMAIN],
};

