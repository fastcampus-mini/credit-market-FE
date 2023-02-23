import { IProduct } from '@/interfaces/product';
import { axiosInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';
import { SearchFormData } from '../constants/apiUrls';

export const getRecommentList = async () => {
  const data: IProduct[] = await axiosInstance.get(API_URLS.RECOMMEND);
  return data;
};

export const getSearchList = async (Formdata: SearchFormData) => {
  const data: IProduct[] = await axiosInstance.get(API_URLS.SEARCH(Formdata));
  return data;
};

export const getRandomSearchList = async () => {
  const data: IProduct[] = await axiosInstance.get(API_URLS.RANDOM_SEARCH);
  return data;
};
