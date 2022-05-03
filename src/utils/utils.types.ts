import { AxiosResponse, AxiosInstance } from 'axios';

export type ServerRes<T> = Promise<AxiosResponse<T>>;

export type Service<T> = (httpClient: AxiosInstance) => T;

export type ReactDispatcher<T> = React.Dispatch<React.SetStateAction<T>>;
