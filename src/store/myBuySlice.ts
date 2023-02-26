import { IBuy } from '@/interfaces/buy';
import { createSlice } from '@reduxjs/toolkit';

const myBuy = createSlice({
  name: 'myBuy',
  initialState: [],
  reducers: {
    setMyBuyState(state, action) {
      return (state = action.payload);
    },
    deleteMybuyState(state, action) {
      return (state = state.filter((item: IBuy) => item.orderId !== action.payload));
    },
  },
});

export let { setMyBuyState, deleteMybuyState } = myBuy.actions;

export default myBuy;
