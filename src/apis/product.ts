import { IProduct } from '@/interfaces/product';
import { axiosInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';
import { ISearch } from '@/interfaces/search';

export const getRecommentList = async () => {
  const data: IProduct[] = await axiosInstance.get(API_URLS.RECOMMEND);
  return data;
};

export const getSearchList = async (Formdata: ISearch) => {
  const data: IProduct[] = await axiosInstance.get(API_URLS.SEARCH(Formdata));
  return data;
};

export const getRandomSearchList = async () => {
  const data: IProduct[] = await axiosInstance.get(API_URLS.RANDOM_SEARCH);
  return data;
};

export const getProductDetail = async (id: string) => {
  const data: IProduct = await axiosInstance.get(API_URLS.DETAIL(id));
  return data;
};

export const getAutoSearch = async (data: Object) => {
  const response: [] = await axiosInstance.post(API_URLS.AUTOSEARCH, data);
  return response;
};
