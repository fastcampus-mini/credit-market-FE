export const API_URLS = {
  SIGNUP: '/usersignup',
  LOGIN: '/userlogin',
  LOGOUT: '/userlogout',
  RECOMMEND: '/recommend',
  CHECK_PASSWORD: '/userpasswordcheck',
  UPDATE_USER_INFO: '/userinfoupdate',
  CART: '/cart',
  DETAIL: (id: string) => `/item/${id}`,
  FAVOR: (id: string) => `/favor/${id}`,
  BUY: (id: string) => `/buy/${id}`,
  ORDER: (id: string) => `/order/${id}`,
  CART_LIST: (page: number) => `/cart/${page}`,
  BUY_LIST: (page: number) => `/buy/${page}`,
  FAVOR_LIST: (page: number) => `/favor/${page}`,
  SEARCH: {
    RESULTS_BY_KEYWORD: (keyword: string) => `/search/results?keyword=${keyword}`,
  },
};
