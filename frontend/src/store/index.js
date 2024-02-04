import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import { apiSlice } from './slices/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productSlice } from './slices/productSlice';
import cartReducer from './slices/cart';

const store = configureStore({
  reducer: {
    users: userSlice,
    cart: cartReducer,
    [productSlice.reducerPath]: productSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productSlice.middleware),
});

setupListeners(store.dispatch);
export default store;
