import { IProduct } from '@/interfaces/product';
import { createSlice } from '@reduxjs/toolkit';

const favor = createSlice({
  name: 'favor',
  initialState: [],
  reducers: {
    setFavorState(state, action) {
      return (state = action.payload);
    },
    deleteFavorState(state, action) {
      return (state = state.filter((item: IProduct) => item.productId !== action.payload));
    },
  },
});

export let { setFavorState, deleteFavorState } = favor.actions;

export default favor;
