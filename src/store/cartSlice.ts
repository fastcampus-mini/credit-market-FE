import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setCartState(state, action) {
      return (state = action.payload);
    },
  },
});

export let { setCartState } = cart.actions;

export default cart;
