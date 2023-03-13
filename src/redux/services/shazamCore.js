import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'ShazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-KEY', 'f7e6f71808msh411a51addcf0e99p1e81cfjsndf3132583c28');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track' }),
    getSongdetails: builder.query({ query: (songid) => `/songs/get-details?key=${songid}&locale=en-US` }),
  }),
});


export const { 
  useGetTopChartsQuery, 
  useGetSongdetailsQuery 
} = shazamCoreApi;
