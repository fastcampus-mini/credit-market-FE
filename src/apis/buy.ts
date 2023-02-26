import { axiosInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';
import { IBuy } from '../interfaces/buy'

export const getBuyList = async (page: number) => {
  const data: IBuy[] = await axiosInstance.post(API_URLS.BUY_LIST(page));
  return data;
};

export const createBuy = async (data: Object) => {
  await axiosInstance.post(API_URLS.ORDER, data);
};

export const deleteBuy = async (id: string) => {
  await axiosInstance.patch(API_URLS.BUY(id));
};
