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
    getSongDetails: builder.query({ query: (songid) => 
      `v1/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: (songid) => 
      `v1/tracks/related?track_id=${songid}`}),
    getArtistDetails: builder.query({ query: (artistId) => 
        `v2/artists/details?artist_id=${artistId}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => 
      `v1/charts/country?country_code=${countryCode}` }),
    getSongsByGenre: builder.query({ query: (genreId) => 
      `v1/charts/genre-world?genre_code=${genreId}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) =>
      `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
  }),
});

export const { 
  useGetTopChartsQuery, 
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
