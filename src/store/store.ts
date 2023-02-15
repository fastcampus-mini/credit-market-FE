import { configureStore } from '@reduxjs/toolkit';
import signPage from './signPageSlice';
import loading from './loadingSlice';

export default configureStore({
  reducer: {
    loading: loading.reducer,
    signPage: signPage.reducer,
  },
});
