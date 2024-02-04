import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiSlice = createApi({
  reducerPath: 'apiProductSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
      providesTags: ['Product'],
    }),
    getProduct: builder.query({
        query: id => `/products/${id}`
      })
  }),
});
export const { useGetProductsQuery, useGetProductQuery } = apiSlice;
