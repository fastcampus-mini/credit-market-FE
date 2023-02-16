export const ROUTES = {
  HOME: '/',
  SIGNUP: '/signup',
  LOGIN: '/login',
  CART: '/cart',
  BUY: '/buy',
  MYPAGE: '/mypage',
  MYPAGE_FAVOR: '/mypage/favor',
  MYPAGE_BUY: '/mypage/buy',
  MYPAGE_INFO: '/mypage/info',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/products/:id',
  PRODUCT_BY_ID: (id: string) => `/products/${id}`,
};
