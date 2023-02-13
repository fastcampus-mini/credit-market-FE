import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Cart from '@/pages/Cart';
import Mypage from '@/pages/Mypage';
import SignIn from '@/pages/SignIn';
import Signup from '@/pages/Signup';

const Router = () => {
  const location = useLocation();
  const root = document.querySelector('#root') as HTMLElement;
  if (location.pathname === '/') {
    root.style.backgroundColor = 'var(--login-background)';
  } else if (location.pathname === '/cart') {
    root.style.backgroundColor = 'var(--background-color)';
  }

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.MYPAGE} element={<Mypage />} />
      <Route path={ROUTES.SIGNIN} element={<SignIn />} />
      <Route path={ROUTES.SIGNUP} element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
