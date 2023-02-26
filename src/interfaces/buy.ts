import { IProduct } from './product';

export interface IBuy extends IProduct {
  orderId: string;
  orderStatus: boolean;
}
