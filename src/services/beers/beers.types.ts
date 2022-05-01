import { ServerRes } from "../../utils/utils.types";

export interface IngredientSpec {
  name: string;
  amount: {
    value: number;
    unit: string;
  }
  add?: string;
  attribute?: string;
}

type Malt = IngredientSpec;
type Hop = IngredientSpec;
type Yeast = string;

interface MeasurableUnit {
  value: number;
  unit: string;
}

export type Temp = MeasurableUnit;

export interface MashTemp {
  temp: Temp;
  duration: number | null;
}

export interface Fermentation {
  temp: Temp;
}

export interface Method {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist: string | null;
}

export interface IngredientsSummary {
  malt: Malt[];
  hops: Hop[];
  yeast: Yeast;
}

export type BoilVolume = MeasurableUnit;

export type Volume = MeasurableUnit;


export interface BeerItem {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: BoilVolume;
  method: Method;
  ingredients: IngredientsSummary;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

export type BeerList = BeerItem[]

export type BeersAPI = ServerRes<BeerList>

export interface BeersService {
  getBeers: (params: {
    page?: number,
    perPage?: number,
  }) => BeersAPI,
  findBeer: (params: {
    name: string,
  }) => BeersAPI,
}