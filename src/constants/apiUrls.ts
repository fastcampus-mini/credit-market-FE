export const API_URLS = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  LOGOUT: '/logout',
  CART: '/cart',
  FAVOR: '/favor',
  FAVOR_LIST: '/favor/list',
  ORDER: '/order',
  BUY: '/buy',
  BUY_LIST: '/buy/list',
  SEARCH: {
    GET_RESULTS_BY_KEYWORD: (keyword: string) => `/products?keyword=${keyword}`,
  },
};
