import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <HeaderStyle>
      <Link to="/">
        {location.pathname === '/' && (
          <img src="../../../public/images/logo_white.png" alt="메인로고" />
        )}
        {location.pathname === '/cart' && (
          <img src="../../../public/images/logo_Main.png" alt="메인로고" />
        )}
        {location.pathname === '/Mypage' && (
          <img src="../../../public/images/logo_Main.png" alt="메인로고" />
        )}
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
