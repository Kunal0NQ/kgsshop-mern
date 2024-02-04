import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://localhost:5000/api';
// const API_URL = '/api/products';

// Define our single API slice object
export const productSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    productById: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useProductByIdQuery } = productSlice;
