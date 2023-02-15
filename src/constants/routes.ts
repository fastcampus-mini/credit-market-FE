export const ROUTES = {
  HOME: '/',
  SIGNUP: '/signup',
  LOGIN: '/login',
  CART: '/cart',
  BUY: '/buy',
  MYPAGE: '/mypage',
  MYPAGE_FAVOR: '/favor',
  MYPAGE_BUY: '/buy',
  MYPAGE_INFO: '/info',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/products/:id',
  PRODUCT_BY_ID: (id: string) => `/products/${id}`,
};
