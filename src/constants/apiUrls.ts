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
  SEARCH: (data: ISearch) => {
    let URL = `/search/results?keyword=` + `${data.keyword}`;
    if (data.loan) {
      URL + `&loan=${data.loan}`;
    } else if (data.age) {
      URL + `&age=${data.age}`;
    } else if (data.gender) {
      URL + `&gender=${data.gender}`;
    } else if (data.interest) {
      URL + `&interest=${data.interest}`;
    } else if (data.avg) {
      URL + `&avg=${data.avg}`;
    } else if (data.page) {
      URL + `&page=${data.page}`;
    }
    return URL;
  },

  RANDOM_SEARCH: `/search/results`,
};
