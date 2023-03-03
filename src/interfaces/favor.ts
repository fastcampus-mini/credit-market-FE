import { IProduct } from './product';

export interface IFavorList extends IProduct {
  list: Array<IFavor>;
  totalNum: number;
}

export interface IFavor extends IProduct {
  favoriteId: string;
}
