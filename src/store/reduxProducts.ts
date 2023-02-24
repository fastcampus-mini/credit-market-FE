import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '@/interfaces/product';

const reduxProducts = createSlice({
  name: 'reduxProducts',
  initialState: {
    products: [],
  },
  reducers: {
    setReduxProducts(state, action) {
      return (state = action.payload);
    },
  },
});

export let { setReduxProducts } = reduxProducts.actions;

export default reduxProducts;
