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
  SEARCH: {
    RESULTS_BY_KEYWORD: (keyword: string) => `/search/results?keyword=${keyword}`,
  },
};
