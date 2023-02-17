import { ICart } from '@/interfaces/cart';
import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addCart(state, action) {
      let id = state.findIndex((obj: ICart) => obj.id === action.payload.id);
      if (id === -1) {
        // state.push(action.payload);
      } else {
        return alert('이미 장바구니에 담은 상품입니다.');
      }
    },
    deleteCart(state, action) {
      let num = state.findIndex((obj: ICart) => obj.id === action.payload);
      state.splice(num, 1);
    },
  },
});

export let { addCart, deleteCart } = cart.actions;

export default cart;
