import { IProduct } from './product';

export interface IBuyList extends IProduct {
  list: Array<IBuy>;
  totalNum: number;
}

export interface IBuy extends IProduct {
  orderId: string;
  orderStatus: number;
}
