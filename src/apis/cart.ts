import { axiosInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

export const getCartList = async () => {
  const { data } = await axiosInstance.get(API_URLS.CART);
  return data;
};

export const createCart = async (data: Object) => {
  await axiosInstance.post(API_URLS.CART, data);
};

export const deleteCart = async (data: Object) => {
  await axiosInstance.delete(API_URLS.CART, data);
};
