import { IModal } from './../interfaces/modal';
import { createSlice } from '@reduxjs/toolkit';

const modal = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    onClickOk: () => {},
    text: '',
    okText: '',
    cancelText: '',
    route: '',
  },
  reducers: {
    setModal(state, action) {
      return (state = action.payload);
    },
  },
});

export let { setModal } = modal.actions;

export default modal;
