import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWrapper } from '../../_helpers/fetch-wrapper';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(cartAddItem.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload);
    });
  },
});

export default cartSlice.reducer;

const cartAddItem = createAsyncThunk(
  'cart/getItem',
  //   async () => await axios.get('http://localhost:5000/api/products')
  async () => await fetchWrapper.get('http://localhost:5000/api/products')
);
