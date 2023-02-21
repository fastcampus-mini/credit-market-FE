import { createSlice } from '@reduxjs/toolkit';

const favor = createSlice({
  name: 'favor',
  initialState: [],
  reducers: {
    toggleFavor(state, action) {
      return state;
    },
  },
});

export let { toggleFavor } = favor.actions;

export default favor;
