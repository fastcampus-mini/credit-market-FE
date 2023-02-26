import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import COLORS from '@/styles/colors';
import isCurPath from '@/utils/path';
import { ROUTES } from '@/constants/routes';
import move from './NavbarMove';
import NavbarUI from './NavbarUI';

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case ROUTES.HOME:
      case ROUTES.PRODUCTS:
        return move(1, 50, COLORS.primary);
      case ROUTES.SEARCH:
        return move(2, 147, COLORS.background);
      case ROUTES.CART:
      case ROUTES.BUY:
        return move(3, 244, COLORS.background);
      case ROUTES.MYPAGE:
      case ROUTES.MYPAGE_BUY:
      case ROUTES.MYPAGE_FAVOR:
      case ROUTES.MYPAGE_INFO:
        return move(4, 341, COLORS.background);
      default:
        return move(1, 50, COLORS.background);
    }
  }, [location]);

  if (isCurPath(ROUTES.LOGIN) || isCurPath(ROUTES.SIGNUP)) return null;

  return <NavbarUI />;
};

export default Navbar;
