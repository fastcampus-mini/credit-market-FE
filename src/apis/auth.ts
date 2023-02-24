import { axiosInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

interface Response {
  token: string;
}

export const login = async (data: Object) => {
  const response: Response = await axiosInstance.post(API_URLS.LOGIN, data);
  return response.token;
};

export const signup = async (data: Object) => {
  await axiosInstance.post(API_URLS.SIGNUP, data);
};

export const logout = async () => {
  await axiosInstance.post(API_URLS.LOGOUT);
};
