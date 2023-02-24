import { axiosInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

interface Response {
  token: string;
  userName: string;
}

export const login = async (data: Object) => {
  const response: Response = await axiosInstance.post(API_URLS.LOGIN, data);
  return response;
};

export const signup = async (data: Object) => {
  await axiosInstance.post(API_URLS.SIGNUP, data);
};

export const logout = async () => {
  await axiosInstance.post(API_URLS.LOGOUT);
};

export const checkPassword = async (data: Object) => {
  await axiosInstance.post(API_URLS.USERPASSWORD, data);
};

export const getUserInfo = async () => {
  const response = await axiosInstance.get(API_URLS.USERINFO);
  return response;
};

export const userInfoUpdate = async (data: Object) => {
  const response = await axiosInstance.post(API_URLS.USERINFOUPDATE, data);
  return response;
};
