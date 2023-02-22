import { ROUTES } from '@/constants/routes';

export interface IModal {
  isOpen: boolean;
  text: string;
  onClickOk: Function;
  onClickCancel?: Function;
}

export interface PasswordModal {
  isOpen: boolean;
  linkURL: string;
}
