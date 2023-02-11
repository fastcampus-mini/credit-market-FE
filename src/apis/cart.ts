import { axiosInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

export const getCartItemList = async () => {
  const { data } = await axiosInstance.get(API_URLS.CART);
  return data;
};

export const createCartItem = async (data: Object) => {
  await axiosInstance.post(API_URLS.CART, data);
};

export const updateCartItem = async (data: Object) => {
  await axiosInstance.patch(API_URLS.CART, data);
};

export const deleteCartItem = async (id: string) => {
  await axiosInstance.delete(`${API_URLS.CART}/${id}`);
};
