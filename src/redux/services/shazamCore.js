import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'ShazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-KEY', 'f7e6f71808msh411a51addcf0e99p1e81cfjsndf3132583c28');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongdetails: builder.query({ query: (songid) => 
      `/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: (songid) => ``}),
  }),
});


export const { 
  useGetTopChartsQuery, 
  useGetSongdetailsQuery 
} = shazamCoreApi;
