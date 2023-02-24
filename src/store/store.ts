import { configureStore } from '@reduxjs/toolkit';
import cart from './cartSlice';
import loading from './loadingSlice';
import modal from './modalSlice';

export const store = configureStore({
  reducer: {
    loading: loading.reducer,
    cart: cart.reducer,
    modal: modal.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
