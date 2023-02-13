import { axiosInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

export const getMypageItemList = async () => {
  const { data } = await axiosInstance.get(API_URLS.MYPAGE);
  return data;
};
