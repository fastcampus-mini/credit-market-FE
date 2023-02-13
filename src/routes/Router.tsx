import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Cart from '@/pages/Cart';
import Mypage from '@/pages/Mypage';
import styled from '@emotion/styled';
import colors from '@/styles/colors';
import ProductDetail from '@/pages/ProductDetail';
import Buy from '@/pages/Buy';
import SignIn from '@/pages/SignIn';
import Signup from '@/pages/Signup';

const Router = () => {
  const location = useLocation();
  const bgColor = location.pathname === '/' ? colors.logInBgColor : colors.BgColor;

  return (
    <Layout bgColor={bgColor}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CART} element={<Cart />} />
        <Route path={ROUTES.MYPAGE} element={<Mypage />} />
        <Route path={ROUTES.SIGNIN} element={<SignIn />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
        <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
        <Route path={ROUTES.BUY} element={<Buy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default Router;

const Layout = styled.div<{ bgColor: string }>`
  padding: 20px 10px;
  background-color: ${({ bgColor }) => bgColor};
  position: relative;
  z-index: 1;
`;
