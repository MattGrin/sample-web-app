import { AxiosResponse, AxiosInstance } from 'axios';

export type ServerRes<T> = Promise<AxiosResponse<T>>;

export type Service<T> = (httpClient: AxiosInstance) => T;
