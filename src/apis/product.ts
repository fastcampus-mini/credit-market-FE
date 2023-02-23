import { IProduct } from '@/interfaces/product';
import { axiosInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

export const getRecommentList = async () => {
  const data: IProduct[] = await axiosInstance.get(API_URLS.RECOMMEND);
  return data;
};
