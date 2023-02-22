import { PasswordModal } from './../interfaces/modal';
import { createSlice } from '@reduxjs/toolkit';

const passwordModal = createSlice({
  name: 'passwordModal',
  initialState: {
    isOpen: false,
    linkURL: 'ROUTE.HOME',
  },
  reducers: {
    setPasswordModal(state, action) {
      return (state = action.payload);
    },
  },
});

export let { setPasswordModal } = passwordModal.actions;

export default passwordModal;
