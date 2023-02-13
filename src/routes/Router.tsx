import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Cart from '@/pages/Cart';
import Mypage from '@/pages/Mypage';
import colors from '@/styles/colors';

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.MYPAGE} element={<Mypage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
