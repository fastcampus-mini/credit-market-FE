import { configureStore } from '@reduxjs/toolkit';
import loading from './loadingSlice';

export default configureStore({
  reducer: { loading: loading.reducer },
});
