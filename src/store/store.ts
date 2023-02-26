import { configureStore } from '@reduxjs/toolkit';
import cart from './cartSlice';
import loading from './loadingSlice';
import modal from './modalSlice';
import search from './SearchSlice';
import reduxProducts from './reduxProducts';
import favor from './favorSlice';
import myBuy from './myBuySlice';

export const store = configureStore({
  reducer: {
    loading: loading.reducer,
    cart: cart.reducer,
    favor: favor.reducer,
    myBuy: myBuy.reducer,
    modal: modal.reducer,
    search: search.reducer,
    reduxProducts: reduxProducts.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
