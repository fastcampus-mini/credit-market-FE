export const API_URLS = {
  SIGNUP: '/signup',
  LOGIN: '/login',
  LOGOUT: '/logout',
  CART: '/cart',
  BUY: '/buy',
  MYPAGE: '/mypage',
  FAVOR: '/favor',
  FAVOR_LIST: '/favor/list',
  ORDER: '/order',
  BUY_LIST: '/buy/list',
  SEARCH: {
    GET_RESULTS_BY_KEYWORD: (keyword: string) => `/products?keyword=${keyword}`,
  },
};
