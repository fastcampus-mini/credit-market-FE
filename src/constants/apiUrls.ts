import { ISearch } from '@/interfaces/Search';

export const API_URLS = {
  SIGNUP: '/usersignup',
  LOGIN: '/userlogin',
  LOGOUT: '/userlogout',
  RECOMMEND: '/recommend',
  CHECK_PASSWORD: '/userpasswordcheck',
  UPDATE_USER_INFO: '/userinfoupdate',
  CART: '/cart',
  ORDER: '/order',
  DETAIL: (id: string) => `/item/${id}`,
  FAVOR: (id: string) => `/favor/${id}`,
  BUY: (id: string) => `/buy/${id}`,
  BUY_LIST: (page: number) => `/buy/${page}`,
  FAVOR_LIST: (page: number) => `/favor/${page}`,
  SEARCH: (data: ISearch) =>
    `/search/results?keyword=${data.keyword}&loan=${data.loan}&age=${data.age}&gender=${data.gender}&interest=${data.interest}`,
  //&avg=${data.avg}&page=${data.page}
  RANDOM_SEARCH: `/search/results`,
  USERINFO: '/userinfo',
  USERINFOUPDATE: '/userinfoupdate',
  USERPASSWORD: '/userpasswordcheck',
};
