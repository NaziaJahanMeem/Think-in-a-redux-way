import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
  tagTypes: ['Videos'],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => '/videos',
      keepUnusedDataFor: 600,
      providesTags: ['Videos', 'Video', 'RelatedVideos'],
    }),
    getVideo: builder.query({
      query: (videoId) => `/videos/${videoId}`,
      providesTags: (result, error, arg) => [{ type: 'Video', arg: arg }],
    }),
    getRelatedVideos: builder.query({
      query: ({ id, title }) => {
        const tags = title.split(' ');
        const likes = tags.map((tag) => `title_like=${tag}`);
        const queryString = `/videos?${likes.join('&')}&_limit=4`;
        return queryString;
      },
      providesTags: (result, error, arg) => [
        { type: 'RelatedVideos', arg: arg.id },
      ],
    }),
    addVideo: builder.mutation({
      query: (data) => ({
        url: '/videos',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Videos'],
    }),
    editVideo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/videos/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        'Videos',
        { type: 'Video', arg: arg.id },
        { type: 'RelatedVideos', arg: arg.id },
      ],
    }),
    deleteVideo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/videos/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        'Videos',
        { type: 'Video', arg: arg.id },
        { type: 'RelatedVideos', arg: arg.id },
      ],
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetVideoQuery,
  useGetRelatedVideosQuery,
  useAddVideoMutation,
  useEditVideoMutation,
} = apiSlice;
