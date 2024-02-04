import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';
import { apiSlice } from '../features/api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['apiProductSlice'],
};

const rootReducers = combineReducers({
  prducts: productsReducer,
  cart: cartReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
})
setupListeners(store.dispatch)

export const persistor = persistStore(store);
