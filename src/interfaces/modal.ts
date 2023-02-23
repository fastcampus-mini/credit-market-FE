export interface IModal {
  isOpen: boolean;
  text: string;
  onClickOk: any;
  onClickCancel?: Function;
  okText?: string;
  cancelText?: string;
  isPassword?: boolean;
  linkURL?: string;
}
