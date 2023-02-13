import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Cart from '@/pages/Cart';
import Mypage from '@/pages/Mypage';
import styled from '@emotion/styled';

const Router = () => {
  const location = useLocation();
  const root = document.querySelector('#root') as HTMLElement;
  if (location.pathname === '/') {
    root.style.backgroundColor = 'var(--login-background)';
  } else if (location.pathname === '/cart') {
    root.style.backgroundColor = 'var(--background-color)';
  }

  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CART} element={<Cart />} />
        <Route path={ROUTES.MYPAGE} element={<Mypage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default Router;

const Layout = styled.div`
  padding: 20px 10px;
`;
