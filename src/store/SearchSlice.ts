import { createSlice } from '@reduxjs/toolkit';
import { ISearch } from '@/interfaces/Search';

const search = createSlice({
  name: 'search',
  initialState: {
    keyword: '',
  },
  reducers: {
    setSearch(state, action) {
      return (state = action.payload);
    },
  },
});

export let { setSearch } = search.actions;

export default search;
