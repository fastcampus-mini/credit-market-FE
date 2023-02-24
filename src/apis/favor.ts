import { axiosInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

export const getFavorList = async (page: number) => {
  const data = await axiosInstance.get(API_URLS.FAVOR_LIST(page));
  return data;
};

export const createFavor = async (id: string) => {
  await axiosInstance.post(API_URLS.FAVOR(id));
};

export const deleteFavor = async (id: string) => {
  await axiosInstance.delete(API_URLS.FAVOR(id));
};
