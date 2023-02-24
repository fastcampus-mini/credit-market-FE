import { axiosInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';
import { IFavor } from '@/interfaces/favor';

export const getFavorList = async (page: number) => {
  const data: IFavor[] = await axiosInstance.get(API_URLS.FAVOR_LIST(page));
  return data;
};

export const createFavor = async (id: string) => {
  await axiosInstance.post(API_URLS.FAVOR(id));
};

export const deleteFavor = async (id: string) => {
  await axiosInstance.delete(API_URLS.FAVOR(id));
};
