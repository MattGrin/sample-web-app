import axios from 'axios';
import env from '../config/env';

/**
 * Root Axios instance, every configurable attribute can be set here
 */
const httpClient = axios.create({
  baseURL: env.base_url,
  timeout: process.env.NODE_ENV === 'development' ? 30000 : 40000,
})

export {
  httpClient,
}