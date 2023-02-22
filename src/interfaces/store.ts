import { IModal, PasswordModal } from './modal';

export interface IStore {
  loading: Boolean;
  modal: IModal;
}

export interface PasswordModalStore {
  loading: Boolean;
  passwordModal: PasswordModal;
}
