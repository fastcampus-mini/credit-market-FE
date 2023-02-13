import { ROUTES } from '@/constants/routes';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const logoImage = (path: string, logoColor: string) => {
    return (
      location.pathname === path && (
        <img src={`../../../public/images/logo_${logoColor}.png`} alt="메인로고" />
      )
    );
  };

  return (
    <HeaderStyle>
      <Link to="/">
        {logoImage(ROUTES.HOME, 'white')}
        {logoImage(ROUTES.CART, 'Main')}
        {logoImage(ROUTES.MYPAGE, 'Main')}
      </Link>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  padding: 30px 10px 0;
  position: relative;
  z-index: 1;

  img {
    width: 100px;
  }
`;
