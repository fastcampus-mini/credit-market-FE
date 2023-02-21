export interface IModal {
  isOpen: boolean;
  text: string;
  onClickOk: Function;
  onClickCancel?: Function;
}
