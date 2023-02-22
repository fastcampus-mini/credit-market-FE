import { configureStore } from '@reduxjs/toolkit';
import cart from './cartSlice';
import loading from './loadingSlice';
import modal from './modalSlice';
import passwordModal from './passModalSlice';

export const store = configureStore({
  reducer: {
    loading: loading.reducer,
    cart: cart.reducer,
    modal: modal.reducer,
    passwordModal: passwordModal.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
