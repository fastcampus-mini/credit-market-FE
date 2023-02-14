import { createSlice } from '@reduxjs/toolkit';

const favor = createSlice({
  name: 'favor',
  initialState: [],
  reducers: {
    addFavor(state, action) {
      return state;
    },
  },
});

export let { addFavor } = favor.actions;

export default favor;
