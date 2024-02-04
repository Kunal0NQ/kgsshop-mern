import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import usersSlice from '../users1/usersSlice';

const initialState = {
  loading: false,
  products: [],
  error: '',
};

export const fetchProductsList = createAsyncThunk(
  'products/fetchProductsList',
  () => {
    return axios
      .get('/api/products')
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
  }
);

export const fetchProductDetails = createAsyncThunk(
  'products/fetchProductsDetails',
  (id) => {
    return axios
      .get(`/api/products/${id}`)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProductsList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductsList.fulfilled, (state, action) => {
      (state.loading = false), (state.products = action.payload);
      state.error = '';
    });
    builder.addCase(fetchProductsList.rejected, (state, action) => {
      (state.loading = false),
        (state.products = []),
        (state.error = action.error.message);
    });

    builder.addCase(fetchProductDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
      (state.loading = false), (state.product = action.payload);
      state.error = '';
    });
    builder.addCase(fetchProductDetails.rejected, (state, action) => {
      (state.loading = false),
        (state.products = []),
        (state.error = action.error.message);
    });
  },
});

export default productsSlice.reducer;
