import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Cart from '@/pages/Cart';
import Mypage from '@/pages/Mypage';
import styled from '@emotion/styled';
import ProductDetail from '@/pages/ProductDetail';
import Buy from '@/pages/Buy';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Welcome from '@/pages/Welcome';
import App from '@/App';
import PrivateRoute from './PrivateRoute';
import MyInfo from '@/pages/MyInfo';
import MyFavor from '@/pages/MyFavor';
import MyBuy from '@/pages/MyBuy';

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGNUP + '/welcome'} element={<Welcome />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
        <Route
          path={ROUTES.CART}
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.BUY}
          element={
            <PrivateRoute>
              <Buy />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.MYPAGE}
          element={
            <PrivateRoute>
              <Mypage />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.MYPAGE_BUY}
          element={
            <PrivateRoute>
              <MyBuy />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.MYPAGE_FAVOR}
          element={
            <PrivateRoute>
              <MyFavor />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.MYPAGE_INFO}
          element={
            <PrivateRoute>
              <MyInfo />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default Router;

const Layout = styled.div`
  position: relative;
  z-index: 1;
  height: calc(100% - 115px);
  // padding: 0 10px;
`;
