import { axiosInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

export const login = async (data: Object) => {
  const response = await axiosInstance.post(API_URLS.LOGIN, data);
  return response;
};

export const signup = async (data: Object) => {
  await axiosInstance.post(API_URLS.SIGNUP, data);
};

export const logout = async () => {
  try {
    const response = await axiosInstance.post(API_URLS.LOGOUT);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
