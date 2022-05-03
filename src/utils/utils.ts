import axios from 'axios';
import env from '../config/env';

/**
 * Root Axios instance, every configurable attribute can be set here
 */
const httpClient = axios.create({
  baseURL: env.BASE_URL,
  timeout: process.env.NODE_ENV === 'development' ? 30000 : 40000,
})

/**
 * Services responses serializer
 */
const serialize = <TSerializerFnResponse, TPromiseResult>(
  serializer: (value: TPromiseResult) => TSerializerFnResponse,
  requester: (...args: any[]) => Promise<TPromiseResult>
) => (...args: any[]) => requester(...args).then(serializer);


export {
  serialize,
  httpClient,
}