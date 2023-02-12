import axios from 'axios';
import { getStorageItem } from './../utils/storage';

const API_BASE_URL: string = import.meta.env.VITE_BASE_URL;

const axiosApi = (url: string) => {
  const instance = axios.create({ baseURL: url });
  instance.defaults.timeout = 3000;

  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.request.use(
    (config) => {
      const token = getStorageItem('token', '');
      if (token) config.headers['Authorization'] = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return instance;
};

export const axiosInstance = axiosApi(API_BASE_URL);
