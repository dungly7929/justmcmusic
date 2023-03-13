import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'ShazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-KEY', 'f7e6f71808msh411a51addcf0e99p1e81cfjsndf3132583c28');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 
      'v1/charts/world' }),
    getSongdetails: builder.query({ query: (songid) => 
      `v1/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: (songid) => 
      `v1/tracks/related?track_id=${songid}`}),
      getArtistDetails: builder.query({ query: (artistId) => 
        `v2/artists/details?artist_id=${artistId}` }),
  }),
});

export const { 
  useGetTopChartsQuery, 
  useGetSongdetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,

} = shazamCoreApi;
