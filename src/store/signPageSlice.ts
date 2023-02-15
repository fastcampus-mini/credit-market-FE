import { createSlice } from '@reduxjs/toolkit';

const signPage = createSlice({
  name: 'signPage',
  initialState: false,
  reducers: {
    showSignPage(state) {
      return (state = true);
    },
    hideSignPage(state) {
      return (state = false);
    },
  },
});

export let { showSignPage, hideSignPage } = signPage.actions;

export default signPage;
