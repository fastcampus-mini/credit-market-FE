import { createSlice } from '@reduxjs/toolkit';

const loading = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    showLoading(state) {
      return (state = true);
    },
    hideLoading(state) {
      return (state = false);
    },
  },
});

export let { showLoading, hideLoading } = loading.actions;

export default loading;
