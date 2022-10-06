import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_REDUCER_PATH, LOCAL_API_URL } from '../utils/constants';

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: API_REDUCER_PATH,
  baseQuery: fetchBaseQuery({ baseUrl: LOCAL_API_URL }),
  endpoints: () => ({}),
});
