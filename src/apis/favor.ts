import { axiosInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

export const getFavorList = async () => {
  const { data } = await axiosInstance.get(API_URLS.FAVOR_LIST);
  return data;
};

export const updateFavor = async (data: Object) => {
  await axiosInstance.patch(API_URLS.FAVOR, data);
};
