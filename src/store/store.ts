import { configureStore } from '@reduxjs/toolkit';
import cart from './cartSlice';
import loading from './loadingSlice';

export const store = configureStore({
  reducer: {
    loading: loading.reducer,
    cart: cart.reducer,
  },
});

export default store;
