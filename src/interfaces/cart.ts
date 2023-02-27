import { IProduct } from '@/interfaces/product';

export interface ICart extends IProduct {
  cartId: string;
}
